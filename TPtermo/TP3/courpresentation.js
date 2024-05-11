let ns="http://www.w3.org/2000/svg";

let crtob=0;let nxt=1;let nxtexo=1;let selection=23;let rn1=0;let rn2=0;
let tbcorr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let rang=0;var sndtab=[0];
var sndnum=[0];var profond=2;
var photocour=[0,1,1,1,1];var photoexo=[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0];var gatekey="123459876";



var photocor=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 for(let g=0;g<=60;g++){sndnum[g]=0;}
let evtb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function get_ord1(idt){rang=parseInt(idt[idt.length-1]);}
function get_ord2(idt){ let f=parseInt(idt[idt.length-2]+idt[idt.length-1]);let d=parseInt(idt[idt.length-2]);
 rang=f+4;}
function get_ord4(idt){ let f=parseInt(idt[idt.length-2]);let d=parseInt(idt[idt.length-1]);
 rang=3*(f-1)+18+d;rn1=f;rn2=d;}

function get_ord3(idt){let d=parseInt(idt[idt.length-3]+idt[idt.length-2]);let r=parseInt(idt[idt.length-1]);
    rang=3*(d-1)+r+18;rn1=d;rn2=r; }
/*
function fcor2(idtf){get_ord3(idtf);
if(document.querySelector("#corr"+rn1)||document.querySelector("#photocorr"+rn1)){tbcorr[rn1]=1;

if(photocor[rn1]==0){document.querySelector("#exer").removeChild(document.querySelector("#corr"+rn1));
  let coro=document.createElementNS(ns,"svg");coro.setAttribute("id","corr"+rn1);
coro.addEventListener("click",()=>{let tg=event.currentTarget;let Id=tg.getAttribute("id");
tbcorr[parseInt(Id[Id.length-2]+Id[Id.length-1])]=0;
for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();}}
document.querySelector("#exer").removeChild(event.currentTarget);});
document.querySelector("#exer").append(coro);}

if(document.querySelector("#photocorr"+rn1)){document.querySelector("exer").removeChild(document.querySelector("#photocorr"+rn1));}

if(document.querySelector("#scrcor")){document.querySelector("body").removeChild(document.querySelector("#scrcor"));}
 let scrp=document.createElement("script");scrp.setAttribute("id","scrcor");
document.querySelector("body").append(scrp);
if(selection==1){document.querySelector("#scrcor").setAttribute("src","aprop"+rn1+".js");}
if(selection==2){document.querySelector("#scrcor").setAttribute("src","bprop"+rn1+".js");}
if(selection==3){document.querySelector("#scrcor").setAttribute("src","cprop"+rn1+".js");}
if(selection==4){document.querySelector("#scrcor").setAttribute("src","dprop"+rn1+".js");}
if(selection==5){document.querySelector("#scrcor").setAttribute("src","eprop"+rn1+".js");}
if(selection==6){document.querySelector("#scrcor").setAttribute("src","fprop"+rn1+".js");}
if(selection==7){document.querySelector("#scrcor").setAttribute("src","gprop"+rn1+".js");}
if(selection==8){document.querySelector("#scrcor").setAttribute("src","hprop"+rn1+".js");}
if(selection==9){document.querySelector("#scrcor").setAttribute("src","iprop"+rn1+".js");}
if(selection==10){document.querySelector("#scrcor").setAttribute("src","jprop"+rn1+".js");}
if(selection==11){document.querySelector("#scrcor").setAttribute("src","kprop"+rn1+".js");}
if(selection==12){document.querySelector("#scrcor").setAttribute("src","lprop"+rn1+".js");}
if(selection==13){document.querySelector("#scrcor").setAttribute("src","mprop"+rn1+".js");}
if(selection==14){document.querySelector("#scrcor").setAttribute("src","nprop"+rn1+".js");}
}
if(tbcorr[rn1]==0){if(photocor[rn1]==0){let coro=document.createElementNS(ns,"svg");coro.setAttribute("id","corr"+rn1);
coro.addEventListener("click",()=>{let tg=event.currentTarget;let Id=tg.getAttribute("id");
tbcorr[parseInt(Id[Id.length-2]+Id[Id.length-1])]=0;
for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();}}
document.querySelector("#exer").removeChild(event.currentTarget);});}

if(photocor[rn1]==1&&document.querySelector("#photocorr"+rn1)){
document.querySelector("exer").removeChild(document.querySelector("#photocorr"+rn1));}


if(photocor[rn1]==0){document.querySelector("#exer").append(coro);tbcorr[rn1]=1;}

if(document.querySelector("#scrcor")){document.querySelector("body").removeChild(document.querySelector("#scrcor"));}
 let scrp=document.createElement("script");scrp.setAttribute("id","scrcor");
document.querySelector("body").append(scrp);

if(selection==1){document.querySelector("#scrcor").setAttribute("src","aprop"+rn1+".js");}
if(selection==2){document.querySelector("#scrcor").setAttribute("src","bprop"+rn1+".js");}
if(selection==3){document.querySelector("#scrcor").setAttribute("src","cprop"+rn1+".js");}
if(selection==4){document.querySelector("#scrcor").setAttribute("src","dprop"+rn1+".js");}
if(selection==5){document.querySelector("#scrcor").setAttribute("src","eprop"+rn1+".js");}
if(selection==6){document.querySelector("#scrcor").setAttribute("src","fprop"+rn1+".js");}
if(selection==7){document.querySelector("#scrcor").setAttribute("src","gprop"+rn1+".js");}
if(selection==8){document.querySelector("#scrcor").setAttribute("src","hprop"+rn1+".js");}
if(selection==9){document.querySelector("#scrcor").setAttribute("src","iprop"+rn1+".js");}
if(selection==10){document.querySelector("#scrcor").setAttribute("src","jprop"+rn1+".js");}
if(selection==11){document.querySelector("#scrcor").setAttribute("src","kprop"+rn1+".js");}
if(selection==12){document.querySelector("#scrcor").setAttribute("src","lprop"+rn1+".js");}
if(selection==13){document.querySelector("#scrcor").setAttribute("src","mprop"+rn1+".js");}
if(selection==14){document.querySelector("#scrcor").setAttribute("src","nprop"+rn1+".js");}

}
if(tbcorr[rn1]==1&&photocor[rn1]==0){crtob=document.createElementNS(ns,"text"); crtob.setAttribute("x","50");
crtob.setAttribute("y","300");crtob.setAttribute("font-family","Arial");
crtob.setAttribute("stroke","rgba(0%,80%,100%,0.1)");crtob.setAttribute("font-size","100");
crtob.setAttribute("fill","rgba(100%,0%,100%,0.1");crtob.setAttribute("stroke-width","1");
crtob.setAttribute("id","ltt345338");crtob.textContent="CORRECTION";
if(photocor[rn1]==0){document.querySelector("#corr"+rn1).append(crtob);
crtob.setAttribute("style","null");}
}

}

function fcor1(idtf){get_ord4(idtf);
if(document.querySelector("#corr"+rn1)||document.querySelector("#photocorr"+rn1)){tbcorr[rn1]=1;
if(photocor[rn1]==0){document.querySelector("#exer").removeChild(document.querySelector("#corr"+rn1));
  let coro=document.createElementNS(ns,"svg");coro.setAttribute("id","corr"+rn1);
coro.addEventListener("click",()=>{let tg=event.currentTarget;let Id=tg.getAttribute("id");
tbcorr[parseInt(Id[Id.length-1])]=0;
for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();}}
document.querySelector("#exer").removeChild(event.currentTarget);}); 
 document.querySelector("#exer").append(coro); }

if(document.querySelector("#photocorr"+rn1)){
document.querySelector("exer").removeChild(document.querySelector("#photocorr"+rn1));tbcorr[rn1]=0;}
if(document.querySelector("#scrcor")){document.querySelector("body").removeChild(document.querySelector("#scrcor"));}
 let scrp=document.createElement("script");scrp.setAttribute("id","scrcor");
document.querySelector("body").append(scrp);

if(selection==1){document.querySelector("#scrcor").setAttribute("src","aprop"+rn1+".js");}
if(selection==2){document.querySelector("#scrcor").setAttribute("src","bprop"+rn1+".js");}
if(selection==3){document.querySelector("#scrcor").setAttribute("src","cprop"+rn1+".js");}
if(selection==4){document.querySelector("#scrcor").setAttribute("src","dprop"+rn1+".js");}
if(selection==5){document.querySelector("#scrcor").setAttribute("src","eprop"+rn1+".js");}
if(selection==6){document.querySelector("#scrcor").setAttribute("src","fprop"+rn1+".js");}
if(selection==7){document.querySelector("#scrcor").setAttribute("src","gprop"+rn1+".js");}
if(selection==8){document.querySelector("#scrcor").setAttribute("src","hprop"+rn1+".js");}
if(selection==9){document.querySelector("#scrcor").setAttribute("src","iprop"+rn1+".js");}
if(selection==10){document.querySelector("#scrcor").setAttribute("src","jprop"+rn1+".js");}
if(selection==11){document.querySelector("#scrcor").setAttribute("src","kprop"+rn1+".js");}
if(selection==12){document.querySelector("#scrcor").setAttribute("src","lprop"+rn1+".js");}
if(selection==13){document.querySelector("#scrcor").setAttribute("src","mprop"+rn1+".js");}
if(selection==14){document.querySelector("#scrcor").setAttribute("src","nprop"+rn1+".js");}
}
if(tbcorr[rn1]==0){if(photocor[rn1]==0){let coro=document.createElementNS(ns,"svg");coro.setAttribute("id","corr"+rn1);
coro.addEventListener("click",()=>{let tg=event.currentTarget;let Id=tg.getAttribute("id");
tbcorr[parseInt(Id[Id.length-1])]=0;
for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();}}
document.querySelector("#exer").removeChild(event.currentTarget);});}

if(photocor[rn1]==0){document.querySelector("#exer").append(coro);tbcorr[rn1]=1;}
if(photocor[rn1]==1&&document.querySelector("#photocorr"+rn1)){
document.querySelector("exer").removeChild(document.querySelector("#photocorr"+rn1));}

if(document.querySelector("#scrcor")){document.querySelector("body").removeChild(document.querySelector("#scrcor"));}
 let scrp=document.createElement("script");scrp.setAttribute("id","scrcor");
document.querySelector("body").append(scrp);
if(selection==1){document.querySelector("#scrcor").setAttribute("src","aprop"+rn1+".js");}
if(selection==2){document.querySelector("#scrcor").setAttribute("src","bprop"+rn1+".js");}
if(selection==3){document.querySelector("#scrcor").setAttribute("src","cprop"+rn1+".js");}
if(selection==4){document.querySelector("#scrcor").setAttribute("src","dprop"+rn1+".js");}
if(selection==5){document.querySelector("#scrcor").setAttribute("src","eprop"+rn1+".js");}
if(selection==6){document.querySelector("#scrcor").setAttribute("src","fprop"+rn1+".js");}
if(selection==7){document.querySelector("#scrcor").setAttribute("src","gprop"+rn1+".js");}
if(selection==8){document.querySelector("#scrcor").setAttribute("src","hprop"+rn1+".js");}
if(selection==9){document.querySelector("#scrcor").setAttribute("src","iprop"+rn1+".js");}
if(selection==10){document.querySelector("#scrcor").setAttribute("src","jprop"+rn1+".js");}
if(selection==11){document.querySelector("#scrcor").setAttribute("src","kprop"+rn1+".js");}
if(selection==12){document.querySelector("#scrcor").setAttribute("src","lprop"+rn1+".js");}
if(selection==13){document.querySelector("#scrcor").setAttribute("src","mprop"+rn1+".js");}
if(selection==14){document.querySelector("#scrcor").setAttribute("src","nprop"+rn1+".js");}
}
if(photocor[rn1]==0){crtob=document.createElementNS(ns,"text"); crtob.setAttribute("x","50");
crtob.setAttribute("y","300");crtob.setAttribute("font-family","Arial");
crtob.setAttribute("stroke","rgba(0%,80%,100%,0.1)");crtob.setAttribute("font-size","100");
crtob.setAttribute("fill","rgba(100%,0%,100%,0.1");crtob.setAttribute("stroke-width","1");
crtob.setAttribute("id","ltt345338");crtob.textContent="CORRECTION";
document.querySelector("#corr"+rn1).append(crtob);
crtob.setAttribute("style","null");}


}
*/



function playings(){for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();}}}



function cls(){let el;let slct;let bod;bod=document.querySelector('#tabl');

for(let i=1;i<5;i++){el=document.querySelector('#sv'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','sv'+i);
bod.removeChild(el);bod.append(slct); } 
bod=document.querySelector('#exer');
for(let i=1;i<15;i++){el=document.querySelector('#extb'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','extb'+i);
if(tbcorr[i]==1){bod.removeChild(document.querySelector("#corr"+i));tbcorr[i]=0;}
bod.removeChild(el);bod.append(slct); }
for(let k=1;k<15;k++){for(let n=1;n<4;n++){/*bod=document.querySelector('#prop'+k+''+n);
 el=document.querySelector('#svpro'+k+''+n);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','svpro'+k+''+n);
bod.removeChild(el);bod.append(slct);*/  }} }



window.onload=function(){

let profd=document.createElement("script");profd.setAttribute("id","prfd");
profd.setAttribute("src","deep.js")
document.querySelector("body").append(profd);

let newcd=document.createElement("script");newcd.setAttribute("id","change");
newcd.setAttribute("src","cod.js")
document.querySelector("body").append(newcd);

document.querySelector("body").removeChild(document.querySelector("#prfd"));
function sndAsign(pos,ext){for(let i=1;i<5;i++){sndtab[i].setAttribute("src","voix"+i+pos+ext);}
for(let i=1;i<15;i++){sndtab[i+4].setAttribute("src","voiexo"+i+pos+ext);}
for(let i=1;i<15;i++){for(let j=1;j<4;j++){sndtab[3*(i-1)+j+18].setAttribute("src","voicorr"+i+j+pos+ext);}}

}

function setEvent(){


document.querySelector("#sbmt").addEventListener("click",()=>{

 let kg=0;let ng=0;let code=document.querySelector('#input1').value;
if(code==gatekey){document.querySelector("body").removeChild(document.querySelector("#cover"));}
else {document.querySelector("#input1").value="";}});


document.querySelector("#start").addEventListener("click",()=>{
playings();sndtab[1].play();sndnum[1]=1;});

document.querySelector("#suite1").addEventListener("click",()=>{
playings();sndtab[2].play();sndnum[2]=1;});

document.querySelector("#suite2").addEventListener("click",()=>{
playings();sndtab[3].play();sndnum[3]=1;});

document.querySelector("#suite3").addEventListener("click",()=>{
playings();sndtab[4].play();sndnum[4]=1;});

for(let tx=1;tx<15;tx++){if(document.querySelector("#titrex"+tx)){document.querySelector("#titrex"+tx).addEventListener("click",()=>{
playings();sndtab[4+tx].play();sndnum[4+tx]=1;});}}

for(let i=1;i<10;i++){for(let j=1;j<4;j++){get_ord4(""+i+j);if(document.querySelector("#prop"+i+j)){
document.querySelector("#prop"+i+j).addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();sndnum[ply]=0;}}
  let tg=event.currentTarget;let Id=tg.getAttribute("id");
get_ord4(Id);let rgn=rang; 
 sndtab[rgn].play();sndnum[rgn]=1;


});}
}}

for(let i=10;i<15;i++){for(let j=1;j<4;j++){get_ord3(""+i+j);if(document.querySelector("#prop"+i+j)){
document.querySelector("#prop"+i+j).addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();sndnum[ply]=0;}}
let tg=event.currentTarget;let Id=tg.getAttribute("id");
get_ord3(Id);let rgn=rang;   

 sndtab[rgn].play();sndnum[rgn]=1;


});}
}}

}

let scrp=document.createElement("script");scrp.setAttribute("id","scrcor");
document.querySelector("body").append(scrp);

let courexo=document.createElement("script");courexo.setAttribute("id","courexo");
document.querySelector("body").append(courexo);
 
 sndtab[0]=document.querySelector("#dsc1");sndtab[0].setAttribute("src","dsc1.mp3");
 for(let g=1;g<=4;g++){sndtab[g]=document.querySelector("#voix"+g);/*sndtab[g].setAttribute("src","voix"+g+".3gpp");*/ }
 for(let q=1;q<=14;q++){sndtab[4+q]=document.querySelector("#voiexo"+q);/*sndtab[4+q].setAttribute("src","voiexo"+q+".3gpp");*/ }
for(let g=0;g<14;g++){for(let q=1;q<=3;q++){sndtab[18+3*g+q]=document.querySelector("#voicor"+(g+1)+""+q);
 /*sndtab[18+3*g+q].setAttribute("src","voicor"+(g+1)+""+q+".3gpp");*/                                          }}
 

let ob=0;
let larg=screen.availWidth;
let haut=screen.availHeight;
let navi=document.querySelector("#nv1");
let suj=document.querySelector("#tab");
if(larg>800){/*navi.style.left=""+Math.round((larg-800)/2)+"px";*/}
if(larg<800){/*document.querySelector("#couvr").removeChild(svcvr);
 navi.style.left=""+30+"px";navi.style.right=""+30+"px";*/} 
let CLI=document.querySelector("#clic");let ftsz;
if(larg>=800){CLI.style.fontSize="60px";ftsz=60;}
if(larg<800){CLI.style.fontSize="90px";ftsz=90;} 
 let flag=1;let yet=0;

 

CLI.style.top=""+Math.round((haut-CLI.offsetHeight)/3)+"px";

let intv=setInterval(()=>{if(larg>=800){
 CLI.style.color="rgba(100%,10%,100%,1)";
  
if(ftsz==60){flag=1;}if(ftsz==40){flag=0;}
if(ftsz>=40&&ftsz<60&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px"; }
if (ftsz<=60&&ftsz>40&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";}
}
 /*(ftsz==60){flag=1;}if(ftsz==40){flag=0;}
if(ftsz>=40&&ftsz<60&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px";}
if (ftsz<=60&&ftsz>40&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";}*/
/*CLI.style.left=""+Math.round((larg-CLI.offsetWidth)/2)+"px";}*/

if(larg<800){let clsvp;
 CLI.style.color="rgba(100%,100%,100%,1)";
  
 if(ftsz==90){flag=1;}if(ftsz==60){flag=0;}
if(ftsz>=60&&ftsz<90&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px"; }
if (ftsz<=90&&ftsz>60&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";}

 /*CLI.style.left=""+Math.round((haut-CLI.offsetWidth)/2)+"px";*/}
                          
                         },100);

let nxtph=document.querySelector("#nxtphs");
nxtph.style.left=""+0+"px";
document.querySelector("#couvr").addEventListener("click",()=>{let rtn=0;let dfl=0;clearInterval(intv);sndtab[0].play();sndnum[0]=1;
/*let scrl=setInterval(()=>{if(rtn==0){window.scrollBy(0,20);dfl=dfl+20;if(dfl==12000){rtn=1;}}
if(rtn==1){window.scrollBy(0,-20);dfl=dfl-20;if(dfl==0){rtn=0;}} },100);*/});



setEvent();
sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});

for(let tf=1;tf<15;tf++){sndtab[tf].addEventListener("ended",()=>{
get_ord4(sndtab[tf].getAttribute("id"));sndnum[rang]=0;});}

for(let tf=15;tf<61;tf++){sndtab[tf].addEventListener("ended",()=>{
get_ord3(sndtab[tf].getAttribute("id"));sndnum[rang]=0;});}


nxt=1;let fsd=5; selection=1;


sndAsign(selection,".mp3");
                                                           
 for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();sndnum[ply]=0;}}
 sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});
     document.querySelector("#titrex1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();sndnum[ply]=0;}}
   sndtab[5].addEventListener("ended",()=>{sndnum[5]=0;});
 sndtab[5].play();sndnum[5]=1;});


document.querySelector("body").removeChild(document.querySelector("#courexo"));
 let exocr=document.createElement("script");exocr.setAttribute("id","courexo");
document.querySelector("body").append(exocr);
document.querySelector("#courexo").setAttribute("src","courexo1.js");







document.querySelector("#e4").addEventListener('click',()=>{

});



document.querySelector("#e3").addEventListener('click',()=>{
});


document.querySelector("#e2").addEventListener('click',()=>{
});






document.querySelector("#e1").addEventListener('click',()=>{
});


document.querySelector("#ter").addEventListener('click',()=>{});



document.querySelector("#bp1").addEventListener('click',()=>{
});


document.querySelector("#nxtphs").addEventListener('click',()=>{nxt++; 
  bod=document.querySelector('#tabl'); 
 for(let i=1;i<5;i++){el=document.querySelector('#sv'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','sv'+i);
bod.removeChild(el);bod.append(slct); } 

});








};







