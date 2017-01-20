function miclick(){
        var numeros=[]; //Array 
        var num=document.getElementById('numero'); //Captura de los valores ingresados
        var mensaje=document.getElementById('ver');  //elemento que mostrara los elementos ingresados
        document.getElementById("ver").className = ""; // Reseteando la clases del elemento <p></p> para anular la animacion
        document.getElementById("ver").style.visibility = "hidden"; //Ocultando elemento <p></p> con id ver
        
        //---------Validacion de valor nullos------///
        if (num.value=="") {
            alert("Ingrese un valor");
        }else{
        
            //------------validacion de numeros repetidos--------//
             if (numeros.indexOf(num.value) > -1) {
                alert("numero ya ingresado");
              } else {
              //-------agregar los nuevos elementos al array----------//
                numeros.push(num.value);
             }
           
        }

        num.value="";
        //---------------Aplicando el ordenamiento----------------//
        numeros.sort(ordenar);
        //--------------union de los valor ingresados----------
        mensaje.innerHTML += " " + numeros.join(", ");        
}
//--------Agregando la clase animated fadeInDown de la Libreria animate.css----//
function mostrar(){
    document.getElementById("ver").className = "animated fadeInDown";
    document.getElementById("ver").style.visibility = "visible";//----cambiando el estado visible del elemento
}

//----------funcion para ordenar los numeros en forma acendente--------//
function ordenar(a,b) {
    return a-b;
}

