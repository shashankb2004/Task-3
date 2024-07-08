const d=document.getElementById("i");

function appendToDisp(input)
{
    d.value+=input;
}

function clearDisp()
{
    d.value="";
}

function del(){
    d.value+=d.textContent.slice(0,-1);
}

function calculate()
{
try{
    d.value=eval(d.value);
}
catch(error){
    d.value="Error";
}
}
