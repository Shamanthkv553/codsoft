const display=document.getElementById("display");
const buttons=document.querySelectorAll(".btn");

function allClear(){
    display.value="";
}
function calculate(data){
    try{
    let ans=eval(data);
    return ans;
    }
    catch{
        return "invalid input";
    }
}

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const target=e.target;
    
        if(target.value=='=')
        {
         let val=calculate(display.value);
         display.value=val;
        }
        else if(target.value=='clr')
        {
            allClear();
        }
        else
        {
            display.value+=target.value;
        }

    })
})
