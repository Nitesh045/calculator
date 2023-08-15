const btn=document.getElementById('btn');
btn.addEventListener('click',clearData)
function clearData(){
    document.getElementById('inputValue').value="";
}
function getValue(value){
  document.getElementById('inputValue').value+=value;  
    
}

function getResult(){
let allValue=document.getElementById('inputValue').value;
let total=eval(allValue);
console.log(total);
document.getElementById('inputValue').value=total;
}
