/**负责插入dom 
 * @Injectable 意思其他实例可以依赖注入这个该service实例
*/
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type } from '@angular/core';

export interface ChildConfig {
  inputs: object;
  outputs: object;
  position: DialogPosition;
}

export interface DialogPosition {
  top: string;
  left: string;
  width: string;
  height: string;
}

@Injectable({ providedIn: 'root' })
export class DomService {

  private childComponentRef: ComponentRef<any>;
  /** ComponentFactoryResolver: 动态创建组建
   *  ApplicationRef: 
  */
  constructor(
      private resolver:ComponentFactoryResolver,
      private appRef:ApplicationRef,
      private injector:Injector,
      @Inject(DOCUMENT) private document:Document
    ) {
    
  }

  /**组件初始化好之后，插入div中去 */
  public appendComponentTo(parentId: string, child: Type<any>, childConfig: ChildConfig) {
    
    const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.injector);
    this.attachConfig(childConfig, childComponentRef);

    this.childComponentRef = childComponentRef;
    this.appRef.attachView(childComponentRef.hostView);

    const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.document.getElementById(parentId).append(childDOMElement);
  }

  /**关闭对话框，移除组件 */
  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
  }

  /**处理Input，Output */
  public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const element = inputs[key];
        componentRef.instance[key] = element;
      }
    }
    for (const key in outputs) {
      if (outputs.hasOwnProperty(key)) {
        const element = outputs[key];
        componentRef.instance[key] = element;
      }
    }
  }

}