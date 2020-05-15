function Calcular() {
    //Extraemos todos los valores de el Formulario
    var RFC = "";
    
    var apat=document.getElementById("APat").value;
    var amat=document.getElementById("AMat").value;
    var nom=document.getElementById("Nom").value;
    nom=nom.toUpperCase();

    ////REGLA 1

    var pnom = "";
    var papat = "";
    var pamat = "";

    //Primera letra del nombre
    //REGLA 4
    var verJ=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3);
    var verM=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3)+nom.charAt(4);
    if(verJ=="JOSE") {
        pnom=nom.charAt(5);
    } else {
        if(verM=="MARIA") {
            pnom=nom.charAt(6);
        } else {
            pnom=nom.charAt(0)+nom.charAt(1);
            console.log("No tienes nombres como jose o maria y tus letras son :"+pnom);
        }
    }
    
    //Extraemos la primera letra y la primera vocal del apellido paterno
    //REGLA 5

    if(apat=="") {
        var verJ=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3);
        var verM=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3)+nom.charAt(4);
        if(verJ=="JOSE") {
            pnom=nom.charAt(5)+nom.charAt(6);
            console.log("Tienes jose y tus letras son : "+pnom);
        } else {
            if(verM=="MARIA") {
                pnom=nom.charAt(6)+nom.charAt(7);
                console.log("Tienes maria y tus letras son : "+pnom);
            } else {
                pnom=nom.charAt(0)+nom.charAt(1);
                console.log("No tienes nombres como jose o maria y tus letras son :"+pnom);
            }
        }
    } else {
        apat=apat.toUpperCase();
        papat = apat.charAt(0);    
    
        for(var i=1;i<apat.length;i++) {
            if(apat.charAt(i)=="A" || apat.charAt(i)=="E" || apat.charAt(i)=="I" || apat.charAt(i)=="O" || apat.charAt(i)=="U") {
                papat=papat+apat.charAt(i);
                break;
            }
        }
        console.log("Tienes apellido paterno y tus letras son : "+papat);
    }
    //Extraemos la primera letra del apellido materno
    //REGLA 5
    if(amat=="") {
        var verJ=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3);
        var verM=nom.charAt(0)+nom.charAt(1)+nom.charAt(2)+nom.charAt(3)+nom.charAt(4);
        console.log(verJ+verM);
        if(verJ=="JOSE") {
            pnom=nom.charAt(5)+nom.charAt(6);
            console.log("Tienes jose y tus letras son : "+pnom);
        } else {
            if(verM=="MARIA") {
                pnom=nom.charAt(6)+nom.charAt(7);
                console.log("Tienes maria y tus letras son : "+pnom);
            } else {
                pnom=nom.charAt(0)+nom.charAt(1);
                console.log("No tienes nombres como jose o maria y tus letras son :"+pnom);
            }
        }
    } else {
        amat=amat.toUpperCase();
        pamat = amat.charAt(0);    
    /*
        for(var i=1;i<amat.length;i++) {
            if(amat.charAt(i)=="A" || amat.charAt(i)=="E" || amat.charAt(i)=="I" || amat.charAt(i)=="O" || amat.charAt(i)=="U") {
                pamat=pamat+amat.charAt(i);
                break;
            }
        }
        console.log("Tienes apellido materno y tus letras son : "+pamat);
    */}

    //Resultado
    var reg1 = "";
    if(apat=="") {
        pamat=amat.charAt(0)+amat.charAt(1);
        reg1=pamat+pnom;
        console.log("Tienes solo apellido materno y la parte es : "+reg1);
    } else {
        if(amat==""){
            papat=apat.charAt(0)+apat.charAt(1);
            reg1=papat+pnom;
            console.log("tienes solo apellido paterno y la parte es : "+reg1);
        } else {
            reg1=papat+pamat+pnom;
            console.log("tienes dos apellidos y la parte es : "+reg1);
        }
    }
   // console.log(reg1);

    ////REGLA 2
    var fech=document.getElementById("date").value;
  //  alert(fech);

    //Obtenemos y separamos
    var fec=String(fech);
    var arrayfec=fec.split("-");
    var reg2="";
    //console.log("dia: "+arrayfec[2]);
    //console.log("mes: "+arrayfec[1]);

    //Obtenemos ultimos caracteres año
    reg2=arrayfec[0].charAt(2)+arrayfec[0].charAt(3);
    //console.log("año: "+reg2);
    
    //Obtenemos mes
    reg2=reg2+arrayfec[1];

    //Obtenemos dia
    reg2=reg2+arrayfec[2];

    RFC=reg1+reg2;
    document.getElementById("RFC").value=RFC;
}
