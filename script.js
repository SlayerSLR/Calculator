let a=``,
    b=``,
    o=``,
    A=0,
    B=0,
    ans=0;
    outString=``;
let inputView=document.getElementById("inputView");
let outputView=document.getElementById('outputView');
//document.body.addEventListener('keydown',keyEntry);

multiply=document.getElementById(multiply)

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
    }
    switch(e.target.id){
        case "add":o=`+` ;
                   inView();
                   break

        case "subtract":o="-";
                        inView();
                        break

        case "multiply":o="*";
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
    if(a!=``&&o!=``&&b!=``){
        a=`${ans}`;
    }
    switch (o){
        case `+`:A=parseFloat(a);
                 B=parseFloat(b);
                 ans=A+B;
                 numView();
                 break

        case `-`:A=parseFloat(a);
                 B=parseFloat(b);
                 ans=A-B;
                 numView();
                 break

        case `*`:A=parseFloat(a);
                 B=parseFloat(b);
                 ans=A*B;
                 numView();
                 break

        case `/`:A=parseFloat(a);
                 B=parseFloat(b);
                 ans=A/B;
                 numView();
                 break
    }
}
/*function keyEntry(e){
    if(a==``){
        a+=e.target.value;
    }
    else if(o!=``){
        b+=e.target.value;
        eval();
    }
    else{
        eval();
    
    }
}
*/
function numView() {
    outputView.innerHTML=`${ans}`;
}

function inView(){
 let outString=a+o+b;   
 inputView.innerHTML=outString;   
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
}