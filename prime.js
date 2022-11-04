

function Primecheck(num){

let count=0;

for(let j=0;j<num;j++){

   if(num%j===0){
    count++;
 }
   }
  if(count==2){
     return true;
  }
     return false;

}
let ans=Primecheck(15);
  if(ans==true){
    console.log(num,"is a Prime Number");
 }else{
    console.log(num,"is not a Prime Number");
}