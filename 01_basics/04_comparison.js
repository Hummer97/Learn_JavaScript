// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2>1);
// console.log(2<1);
// console.log(2!=1);


// here the string should treated as number. 
console.log("2">1);
console.log("02">1);
//but you should always convert the type first then compaire otherwise it gives us beard response somtime.

console.log(null > 0); //0>0 : false
console.log(null >= 0);//0>=0 : ture
console.log(null <= 0);//0<=0 : true
console.log(null == 0);//null == 0 : false
//In this above 👆 example the comparison operator (< > >= <=), treated null as number 0 but == treated differently. 

console.log(undefined >= 0);//false
console.log(undefined <= 0);//false
console.log(undefined == 0);//false

//=== this operator compair equality check with dataType equality.
console.log("2" === 2);// here 2 is equal to 2 but also a 2 is in string format and another 2 is in integer format thats why it’s give us false as output.

