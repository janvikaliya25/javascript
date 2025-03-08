let age=[23,54,67,45,34];

let oldage=age[0];

for(let i=0;i<age.length;i++)
{
    if(age[i]>oldage)
    {
        oldage=age[i];
    }
}

console.log(oldage);