/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<21) 
{
  
	if(x%5===0 && x%3===0)
    {
        console.log("JuliaJames \n");
    }
	else if (x%3===0)
    {
        console.log("Julia \n");
    } 
    else if(x%5===0)
    {
        console.log("James \n");
    }
    else
    console.log(x + "\n");

    
x= x+1;
}