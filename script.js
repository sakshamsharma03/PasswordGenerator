let GenButton=document.getElementById("genbutton");
let CopyButton=document.getElementById("copy");
let Clear=document.getElementById("clear");
let lenght =8;
let input=document.getElementById("inp"); 
let upper="ABCDEFGHIJKLMNOPQRSTUVW";
let lower="abcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let symbol="{}#,!-@/\():;.|`$+=_[]^?&~%";
let All=upper+lower+num+symbol;
//console.log(All);
GenButton.addEventListener("click", ()=>
{
    //console.log("done");
    let password=" ";
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
      while (password.length<=lenght)
      {
         password+=All[Math.floor(Math.random()*All.length)];
      }
   
    input.value=password;

})

CopyButton.addEventListener("click",()=>
{
    input.select();
    document.execCommand("copy");
})
Clear.addEventListener("click",()=>{
    password=" ";
    input.value=password;
})