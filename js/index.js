
const fetchFunction = async()=>{

    const locInfo = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await locInfo.json();
return data;
}

const textInsert = async() =>{
    const getData = await fetchFunction();

    for (let i = 0; i < 3; i++) {
        const post = getData[i];

    document.querySelector(`#titleProject${i+1}`).innerHTML=post.title

    document.querySelector(`#typologyProject${i+1}`).innerHTML=post.body

    


    }

}


textInsert()

//objectiu, generar post tarjeta de text, 
//agafa la info del API (json)
//guardar a un lloc*
//dir-li a la maquina a on es*
 // 3 post
// escriure dades a diferents elements (DOM)
/*p = projectTitle
*/
// insertar info a *a tarjeta
// https://jsonplaceholder.typicode.com/posts


