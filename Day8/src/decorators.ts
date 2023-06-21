
@Frozen
class IceCream{

    @Emoji()
    flavor = 'vanila';

    toppings=[];
    
    @Confirmable('Are you sure?')
    @Confirmable('Are you super, super sure? There is no going back!')
         addTopping(topping) {
               this.toppings.push(topping);
           }



}

function Confirmable(message: string) {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
  
        descriptor.value = function( ... args: any[]) {
            const allow = confirm(message);
  
            if (allow) {
              const result = original.apply(this, args);
              return result;
            } else {
              return null;
            }
      };
  
      return descriptor;
    };
  }

function Emoji(){
    return function(target: Object, key: string | symbol){

        let val = target[key];

        const getter = () =>  {
            return val;
        };
        const setter = (next) => {
            console.log('updating flavor...');
            val = `🍦 ${next} 🍦`;
        };
    
    }
}

function Frozen(constructor: Function){
    Object.freeze(constructor);
}
