console.log('hello');
a = 20;
let b = 20;
var c = 30;
const d = 40;
console.log(a+b+c+d);
const sum = function(a,b){
    return a+b;
}
const mul = (a,b) => a*b;

console.log(sum(1,2));

console.log(mul(2,2));

console.log(`Mul: ${sum(3,4)}`);

const phone = {
    id:1,
    screen:'samsung',
    brand:'apple',
    getBrand:function(){
        return this.brand;
    },
    getObj:function(){
        return{
            id:2,
            name:'hello'
        }
    }
}

console.log(phone.screen+' '+phone.getBrand()+' '+phone.getObj().name);

