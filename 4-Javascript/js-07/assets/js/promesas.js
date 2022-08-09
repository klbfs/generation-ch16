//variable que simula los datos pedidos
const saludo = "Hola Mundo"; 
const datos = [
    {
        nombre: "Karen",
        apellido: "Benitez"
    },
    {
        nombre: "Fiona",
        apellido: "Flores"
    },
    {
        nombre: "Xu",
        apellido: "Kei"
    }
];


//función que simula una petición
function obtenerDatos(){
    //estructura de promesa
    return new Promise((resolve, reject)=>{
        //success cuando sean los 2 s
        setTimeout(() => {

            if(true){  //false para que de el error

                resolve(datos) 

            }
            else{

                reject("no se pudo obtener datos")

            }


            
        },2000)
    })
}


//Resolución de promesas
/***FORMA NÚMERO 1******/
//de la función obtener datos obtenemos una promesa y cuando se resuelva, llamamos a then. nada almacena el resultado de una promesa que se cumplió
obtenerDatos().then((nada)=>{ 
    
    console.log(nada);
}).catch( (error) =>{
    
    console.log(error);

}  )


/*obtenerDatos().then(function(){
    console.log("Se resolvió");
})*/







/***FORMA NÚMERO 2******/
//con funciones asíncronas - await async
async function funcionAsincrona(){
    
    //try catch 

   try{//success
        const datos = await obtenerDatos(); //espera a que se resuelva la promesa
        console.log(datos);

   }catch(error){//fail
        console.log(error);
   }
    

}
funcionAsincrona();