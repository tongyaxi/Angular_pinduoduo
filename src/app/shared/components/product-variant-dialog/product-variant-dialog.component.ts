import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { ProductVariant } from '../../../product/domain';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css']
})
export class ProductVariantDialogComponent implements OnInit {

  @Input() variants: ProductVariant[] = [];
  @Input() selectedVariantIndex = -1;
  public count = 1;

  /**表单提交 */
  @Output() formSubmitted = new EventEmitter();

  /**把选中的索引抛出到外部，外部图片随之变化。 */
  @Output() selected = new EventEmitter<number>();
  
  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  get price() {
    if(this.selectedVariantIndex < 0 || this.variants.length == 0) {
      return 0;
    }
    return this.variants[this.selectedVariantIndex].price;
  }

  get selectedVariantName() {
    return this.selectedVariantIndex < 0
      ? ''
      : this.variants[this.selectedVariantIndex].name;
  }

  get productVariantImage() {
    if(this.selectedVariantIndex < 0 || this.variants.length == 0) {
      return;
    }
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }

  handleSelection(idx: number) {
    this.selectedVariantIndex = idx;
    this.selected.emit(this.selectedVariantIndex);
  }

  handleAmountChange(count: number) {
    /**拿到子组件的amount值 */
    this.count = count;
  }

  handleConfirm() {
    if(this.selectedVariantIndex < 0 || this.count === 0) {
      return;
    }
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    });
    /**点击提交过后关闭对话框 */
    this.dialogService.close();
  }

}
