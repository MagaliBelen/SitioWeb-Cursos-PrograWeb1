let vistaPrevia=document.querySelector(".giftcard");
let tituloDestinatario=document.querySelector(".titulo-destinatario");
let nombre=document.querySelector("#nombre");
let coloresFondos=document.getElementsByName("color-fondo");
let  precioGiftcard= document.querySelector(".precio-giftcard");
let monto=document.querySelector("#monto");
let pixelLetra=document.getElementsByName("pixel-letra");
let coloresLetras= document.getElementsByName("color-letra");
let ubicacion= document.getElementsByName("ubicacion");

//Completar nombre
nombre.addEventListener("keyup",()=>{
    tituloDestinatario.innerHTML=nombre.value;
});

//Cambios colores de fondo
coloresFondos.forEach((item)=>{
    item.addEventListener("click",()=>{
        vistaPrevia.classList.remove("rosa","rojo", "celeste", "verde", "azul");
        vistaPrevia.classList.add(item.value);
    });
});

//Cambio de monto
monto.addEventListener("keyup",()=>{
    precioGiftcard.innerHTML="$"+ monto.value;
});

//Cambio de tamaño de letra
pixelLetra.forEach((item)=>{
    item.addEventListener("click",()=>{
        tituloDestinatario.classList.remove("tamaño-20px","tamaño-28px", "tamaño-32px", "tamaño-48px", "tamaño-60px");
        tituloDestinatario.classList.add(item.value);
    });
});

//Cambio color de letra
coloresLetras.forEach((item)=>{
    item.addEventListener("click",()=>{
        vistaPrevia.classList.remove("rosa-letra","rojo-letra", "celeste-letra", "verde-letra", "azul-letra");
        vistaPrevia.classList.add(item.value);
    });
});

//Cambio de ubicacion
ubicacion.forEach((item)=>{
    item.addEventListener("click",()=>{
        precioGiftcard.classList.remove("derecha-abajo", "derecha-arriba", "izquierda-arriba");
        precioGiftcard.classList.add(item.value);
    });
});