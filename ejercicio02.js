//1.Booleanos

let booleano1=true;
let booleano2=false;

const booleanoAnd=booleano1 && booleano2;
console.log(booleanoAnd);

const booleanoOr=!booleano1;
console.log(booleanoOr);

const booleanoNot=booleano1;
console.log(booleanoNot);

const booleanoMix0=booleano1||booleano2&&(booleano1||(!booleano1&&!booleano2));

//2.Operadores

const valorDivision=17/3;
console.log(valorDivision.toFixed(2));

const valorResto=17-7;
console.log(valorResto);

//3.Logica de programacion

let A= 9;
let B= A.toString();
console.log(typeof A);
console.log(typeof B);
console.log(A==B);
console.log(A===B);

const mochila=[1,2,3,4,5,6,7,8,9,10];
    if(mochila.length>10){
        console.log("No puedo cargar con tantas cosas");
    }else if(mochila.length<10 && mochila.length>2){
        console.log("Que bien voy con mi mochila");
    }else{
        console.log("Creo q no necesito una mochila");
    }


for(let contarHasta10=0 ; contarHasta10 < 11 ; contarHasta10++){
    console.log(contarHasta10);
}
    

const diaFestivo=true;
        if(diaFestivo){
            console.log("Hoy no trabajo");
        }else{
            console.log("Hoy trabajo");
        }


const arrayBucle=[];
        for(let i=3 ; i < 19 ; i++){
            arrayBucle.push(i);
        }
        console.log(arrayBucle);

/*
const Dotaheros=['necro', 'ursa', 'od', 'pl']
        let zhenrong=" ";
            for (let dotahero of Dotaheros){
                text += dotahero +" ";
            }
            console.log(text);*/

const arrayUno=['Con', 'Sofia', 'aprendiendo', 'bucles'];
    let text=" ";
    for (let x in arrayUno){
        text += x + " ";
    }
        console.log(text);
        console.log(arrayUno[2]);


console.log("loop 20times")
let i =0;
while(i<20){
    if(i%3==0)
    {
        console.log(i);
        i++;
    }
    else
    {
        i++;
    }
}


let notaActual =[1,2,3,4,5,6,7,8,9,10];
    const nota = notaActual[7];
    switch (nota) {
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Insuficiente");
            break;
        case 5:
        case 6:
            console.log("Suficiente");
            break;
        case 7:
        case 8:
            console.log("Notable");
            break;
        case 9:
        case 10:
            console.log("Sobresaliente"); 
            break;    
    }


function resta(a,b){
    return a-b
}
console.log(resta(3,2));


function duplicaNumero(x){
    if(x!=null){
        return x*2
    }
    else {
        return "Debo ser ejecutada con un número"
    }
}
console.log(duplicaNumero())