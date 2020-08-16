namespace App {
  // DECORATOR = A METHOD DECORATOR
  // first 2 argurments are target and methodname, we don't use it, therefore the underscore
  export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor);
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjustedDescriptor;
  }
}
