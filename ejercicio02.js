/** 
let diaActual=new Date();
const dia_de_la_semana=diaActual.getDay();
switch(dia_de_la_semana){
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
    //....
}
*/
//case?
//%
//**

/*const vueltas = [1,2,3,4,5,6,7,8,9,10];

 for (let vuelta of vueltas) {
        console.log("Vuelta nº " + vuelta);
 }*/

/*const person = { fname: "John", lname: "Doe", age: 25 };
     
 for (let x in person) {
        console.log(x)
 }*/

 //function
 function sum(a,b){
     return a-b
 }

console.log(sum(2,3));

/*function greet(greeting="hello",name){
    if(!name){
        return greeting;
    }else{
        return'$()greeting..'
    }
}*/

//1.Booleanos

let booleano1=true;
let booleano2=false;

const booleanoAnd=booleano1 && booleano2;
console.log(booleanoAnd);

const booleanoOr=booleano1 || booleano2;
console.log(booleanoOr);

const booleanoNot=booleano1 !== booleano2;
console.log(booleanoNot);

//const booleanoMix0=(booleano1||booleano2)&&();

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
console.log("Objetos en la mochila: ", mochila.length)
        if(mochila.length > 10){
            console.log("No puedo cargar con tantas cosas");
        }else if(mochila.length <= 10 && mochila.length > 2){
            console.log("Que bien voy con mi mochila");
        }else{
            console.log("Creo q no necesito una mochila");
        }

//---------------------------------------------------
const numero=10;
        let contarHsta10=0;
        while(contarHsta10<=numero){
            console.log(contarHsta10);
            contarHsta10++;
        }
//---------------------------------------------------

const diaFestivo=true;
        if(diaFestivo){
            console.log("Hoy no trabajo");
        }else{
            console.log("Hoy trabajo");
        }

//------------------------------------------
const arrayBucle=[];
        for(let i = 4; i < 19; i++){
            arrayBucle.push(i)
        }
    console.log(arrayBucle);
//-----------------------------------------

//--------------------------------
//---------------------------------

const arrayUno=['Con', 'Sofia', 'aprendiendo', 'bucles']


        
        
        
