let buttons=document.querySelectorAll('button');
let display=document.querySelector('.display');
let input="";
let count=0;
let deci_cnt=0;

buttons.forEach((button) => {
        button.addEventListener('click',()=>{
            console.log(button.innerText)
            let ch=button.innerText;
            if(button.innerText=="RESET") {
                input="";
                display.innerText=input;
            }
            else if(button.innerText=="DEL") {
                input=input.slice(0,input.length-1);
                display.innerText=input;
            }
            else if(button.innerText=="=") {
                if((input[input.length-1]>'0' || 
                input[input.length-1]<'9')){
                    let res=Function("return " + input)();
                    res=Math.round(res*1000)/1000;
                    console.log(res);
                    display.innerText=res;
                }
                else alert('Invalid Input')
            }
            else if(input=="" && (ch<'0' || ch>'9')) alert('Invalid Input');
            else if((input[input.length-1]<'0' || 
            input[input.length-1]>'9') && (ch<'0' || ch>'9')) {alert('Invalid Input');}
            else if(ch=='.'){
                if(count==0){ 
                    input+=button.innerText;
                    display.innerText=input;
                    count++;
                }
                else{
                    count=0;
                    alert('Invalid Input');
                }
            }
            else {
                if(ch<'0' || ch>'9') {
                    count=0;
                    deci_cnt=0;
                }
                if(count) {
                    deci_cnt++;
                }
                if(deci_cnt>3) alert('Decimal limit reached');
                else{
                    input+=button.innerText;
                    display.innerText=input
                }
            }
         });
}); 



