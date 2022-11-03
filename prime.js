

function checkPrime(){

let factors=0;

for(let i=0;i<num;i++){

   if(num%i===0){
   factors++;
 }
   }if(factor==2){
    return true;
   }else{
    return false;
   }
}
let ans=checkPrime(13)
if(ans==true){
  console.log("It is prime no.")
}else{
  console.log("NA");
}