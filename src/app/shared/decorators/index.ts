export function Emoji() {
  return (target:object, key:string) => {
    let val = target[key];

    const getter = () => {
      return val;
    }

    const setter = (value:string) => {
      val = `😃${value}😂`
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

export function Confirmable(message : string){
  return (target:object, key:string, discrptor:PropertyDescriptor) => {
    const origin = discrptor.value;
    discrptor.value = function(...args:any[]) {
      const allow = window.confirm(message);
      if(allow){
        return origin.apply(this, args);
      }
      return null;
    }
    return discrptor;
  }

}