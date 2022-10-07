
const fetchFunctionProject = async()=>{

    const locInfoProject = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataProject = await locInfoProject.json();
return dataProject;
}

const textInsert = async() =>{
    const getDataProject = await fetchFunctionProject();

    for (let i = 3; i < 6; i++) {
        const post = getDataProject[i];

    document.querySelector(`#titleProject${i+1}`).innerHTML=post.title

    document.querySelector(`#typologyProject${i+1}`).innerHTML=post.body

    }

}


textInsert()
