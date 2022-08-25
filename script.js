function Confidencialidade(){
    var pontos1=document.getElementById("pontos1");
    var maisTexto1=document.getElementById("mais1");
    var btnLeiaMais1=document.getElementById("btnLeiaMais1");

    if(pontos1.style.display === "none"){
        pontos1.style.display="inline";
        maisTexto1.style.display="none";
        btnLeiaMais1.innerHTML="Confidencialidade";
    }else{
        pontos1.style.display="none",
        maisTexto1.style.display="inline";
        btnLeiaMais1.innerHTML="Confidencialidade";
    }
}

function Integridade(){
    var pontos2=document.getElementById("pontos2");
    var maisTexto2=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");

    if(pontos2.style.display === "none"){
        pontos2.style.display="inline";
        maisTexto2.style.display="none";
        btnLeiaMais2.innerHTML="Integridade";
    }else{
        pontos2.style.display="none",
        maisTexto2.style.display="inline";
        btnLeiaMais2.innerHTML="Integridade";
    }
}

function Disponibilidade(){
    var pontos3=document.getElementById("pontos3");
    var maisTexto3=document.getElementById("mais3");
    var btnLeiaMais3=document.getElementById("btnLeiaMais3");

    if(pontos3.style.display === "none"){
        pontos3.style.display="inline";
        maisTexto3.style.display="none";
        btnLeiaMais3.innerHTML="Disponibilidade";
    }else{
        pontos3.style.display="none",
        maisTexto3.style.display="inline";
        btnLeiaMais3.innerHTML="Disponibilidade";
    }
}