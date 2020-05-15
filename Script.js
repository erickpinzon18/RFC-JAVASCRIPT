function Calcular() {
    //Extraemos todos los valores de el Formulario
    var apat=document.getElementById("APat").value;
    apat=apat.toUpperCase();
    var amat=document.getElementById("AMat").value;
    var nom=document.getElementById("Nom").value;
    var mes=document.getElementById("Mes").value;
    var dia=document.getElementById("Dia").value;


    ////REGLA 1

    //Extraemos la primera letra y la primera vocal del apellido paterno
    var papat = apat.charAt(0);
    for(var i=1;i<apat.length;i++) {
        if(apat.charAt(i)=="A" || apat.charAt(i)=="E" || apat.charAt(i)=="I" || apat.charAt(i)=="O" || apat.charAt(i)=="U") {
            papat=papat+apat.charAt(i);
            break;
        }
    }
    
    //Extraemos la primera letra del apellido materno
    var pamat = amat.charAt(0);

    //Primera letra del nombre
    var pnom = nom.charAt(0);

    //Resultado
    var reg1=papat+pamat+pnom;


}