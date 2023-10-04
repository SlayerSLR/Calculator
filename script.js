let a=``,
    b=``,
    o=``,
    A=0,
    B=0,
    ans=0,
    history=[],
    counter=0;
    oldAns=0,
    flag=false,
    path=false,
    outString=``;
let inputView=document.getElementById("inputView");
let outputView=document.getElementById('outputView');
//document.body.addEventListener('keydown',keyEntry);

window.addEventListener("keydown",keySort);
function keySort(e){
    switch(e.key){
        case `0`:keyNumEnter(e.key);
                 break
        case `1`:keyNumEnter(e.key);
                 break
        case `2`:keyNumEnter(e.key);
                 break
        case `3`:keyNumEnter(e.key);
                 break
        case `4`:keyNumEnter(e.key);
                 break
        case `5`:keyNumEnter(e.key);
                 break
        case `6`:keyNumEnter(e.key);
                 break
        case `7`:keyNumEnter(e.key);
                 break
        case `8`:keyNumEnter(e.key);
                 break
        case `9`:keyNumEnter(e.key);
                 break
        case `+`:keyOpEnter(e.key);
                 break
        case `-`:keyOpEnter(e.key);
                 break
        case `*`:keyOpEnter(e.key);
                 break
        case `/`:keyOpEnter(e.key);
                 break
        case `Backspace`:numDel();
                         break
        case `Delete`:   numDel();
                         break  
        

    }
}

function keyNumEnter(e){
    if(a==``||(b==`` && o==``)){
        a+=e;
        inView();
          }
 else if(o!=``){
        b+=e;
        inView();
        eval();
          }
}

function keyOpEnter(e){
    if(a!=``&&o!=``&&b!=``){
        a=a+o+b;
        o=``;
        b=``;
        flag=true;
    }
    switch(e){
        case "+":o=`+` ;
                   inView();
                   break

        case "-":o="-";
                        inView();
                        break

        case "*":o="x";
                        inView();
                        break
        case "/":o="/";
                      inView();
                      break
    }

    if(b!=``){
        eval();
    }
}

function numEnter(e){
         if(a==``||(b==`` && o==``)){
                a+=e.target.id;
                inView();
                  }
         else if(o!=``){
                b+=e.target.id;
                inView();
                eval();
                  }
        
              
    }
function opEnter(e){
    if(a!=``&&o!=``&&b!=``){
        a=a+o+b;
        o=``;
        b=``;
        flag=true;
    }
    switch(e.target.id){
        case "add":o=`+` ;
                   inView();
                   break

        case "subtract":o="-";
                        inView();
                        break

        case "multiply":o="x";
                        inView();
                        break
        case "divide":o="/";
                      inView();
                      break
    }

    if(b!=``){
        eval();
    }
}

function eval(){
   
    switch (o){
        case `+`:A=parseFloat(a);
                 if(flag){A=ans};
                 B=parseFloat(b);
                 oldAns=ans; 
                 ans=A+B;
                 //history[counter]=ans;
                 //++counter;
                 numView();
                 break

        case `-`:A=parseFloat(a);
                 if(flag){A=ans};
                 B=parseFloat(b);
                 oldAns=ans;
                 ans=A-B;
                 numView();
                 break

        case `x`:A=parseFloat(a);
                 if(flag){A=ans};
                 B=parseFloat(b);
                 oldAns=ans;
                 ans=A*B;
                 numView();
                 break

        case `/`:A=parseFloat(a);
                 if(flag){A=ans};
                 B=parseFloat(b);
                 oldAns=ans;
                 ans=A/B;
                 numView();
                 break
    }
}

function numView() {
    outputView.innerHTML=`${ans}`;
}

function inView(){
 let outString=a+o+b;   
 inputView.innerHTML=outString;   
}

function numDel(){
                str=((b==``)?
                    ((o==``)?a
                    :o):b)
                stringDelete(str);
}

function stringDelete(str){
    switch(str){
        case a:path=true;
               break;
        case b:path=false;
               break;
        case o:o=``;
               inView();
               break
    }

    if(path){
        a=a.slice(0,(a.length-1));
        a==`` ? clearAll() : inView();
    }
    else{
        b=b.slice(0,(b.length-1));
        clearOutput();
        
    }
    
}

function clearOutput(){

    inView();
    outputView.innerHTML=``;
}

function clearAll(){
    inputView.innerHTML=``;
    outputView.innerHTML='';
    a=``;
    o=``;
    b=``;
    A=0;
    B=0;
    ans=0;
    history[0]=0;
    flag=false;
}