let count=[50,80,85,90,95];

let sum=0;
let average=0;

for(let i=0;i<count.length;i++){
    sum+=count[i];
}

if(count.length>0)
{
    average=sum/count.length;
}

console.log(average)