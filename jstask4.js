for(i=2; i<=100; i++)
    {
        if(i%2==0)
   
    {
        document.write(i+ "<br>");
    }
}
    document.write("<br>");
    for(j=0; j<=100; j++)
        {
            if(j%2!=0)
       
        {
            document.write(j+ "<br>");
        }
    }
    document.write("<br>");
    number = prompt("please enter a number");
    if(number==1){
        document.write("1 is not a prime number");
    }else if(number <1){
        document.write("it is not a prime number");
    }else{
        for(var i = 2; i<number; i++){
            if(number%i == 0){
               document.write(number+"is not a prime number");
                break;

            }else{
                 document.write(number+"is  a prime number");

            }
        }
        
        
    }

    
document.write("<br>");

num=parseInt(prompt("Enter the number to find reverse"));
sum=0;
while(num>0)
{
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);

}
alert("Revese of give number is:"+sum);
document.write("<br>");
num=parseInt(prompt("Enter the number to find palindrom or Not"));
pali=num;
sum=0;
while(num>0)
{
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);

}
if(pali==sum)
    {
        alert("Enter Number is palindrom")
    }
    else{
        alert("Enter Number not palindrom");
    }

