const n =parseInt(process.argv[2]);

let fact = 1;
if(isNaN(n)||n<0)
{
    console.log("Enter the valid poistive integer ");
}
else
{
    for(let i =1;i<=n;i++)
    {
        fact*= i;
    } 
    console.log(`Factorial of ${n} is ${fact}`);
}