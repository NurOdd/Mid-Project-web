
const fetchFunction = async()=>{

    const locInfo = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await locInfo.json();
return data;
}

const textInsert = async() =>{
    const getData = await fetchFunction();
 

}


textInsert()

//objectiu, generar post tarjeta de text, 



//agafa la info del API (json)
//guardar a un lloc*

//dir-li a la maquina a on es*
 

//tipus de data que vull
// insertar info a la tarjeta


// https://jsonplaceholder.typicode.com/posts


