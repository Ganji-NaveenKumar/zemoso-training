let v=document.getElementById('click-button');
localStorage.setItem('local score',0);
sessionStorage.setItem('session score',0);
var lcn1=0,lcn2=0;
v.addEventListener('click',function(){
    lcn1++;
    lcn2++;
    let a=document.getElementById('local');
    a.textContent=`Local Score :${lcn1}`;
    localStorage.setItem('local score',lcn1);
    let b=document.getElementById('session');
    b.textContent=`Session Score :${lcn2}`;
    sessionStorage.setItem('session score',lcn2);
});