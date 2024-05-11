let codchange=document.createElement("script");codchange.setAttribute("id","newcod");
 
if(profond==2){codchange.setAttribute("src","../../cod.js");}
if(profond==3){codchange.setAttribute("src","../../../cod.js");}
if(profond==4){codchange.setAttribute("src","../../../../cod.js");}
if(profond==5){codchange.setAttribute("src","../../../../../cod.js");}

document.querySelector("body").append(codchange);