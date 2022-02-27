const baseUrl = "http://localhost:8080/todos";


/*
export const loadTodos = () => {

    return fetch(baseUrl,{
        mode: 'no-cors'
    }).then((res) => res.json());
}*/
/*
export const loadTodos = () =>{
    return fetch(baseUrl,{
        mode: 'no-cors',
        headers:{
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
        }

    }).then((res)=>res.json());

}*/

export const loadTodos = () =>{
    return fetch(baseUrl,{
       
        headers:{
            'Access-Control-Allow-Origin': "*"
        }
    }).then((res) => res.json()); 
}

export const getTodo = (id) =>{
    return fetch('${baseUrl}/${id}').then((res)=>res.json());
}

export const createTodo = (todo) =>{

    return fetch(baseUrl, {
       
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin': "*"

        },
        body:JSON.stringify({
            title:todo.title,
            completed:todo.completed
    }) 

}).then((res) => res.json()); 
}

export const updateTodo = (todo) =>{

    return fetch('${baseUrl}/${todo.id}', {
       
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin': "*"

        },
        body:JSON.stringify({
            id:  todo.id,
            title:todo.title,
            completed:todo.completed
    }) 

}).then((res) => res.json()); 
}

export const deleteTodo = (id) =>{
    return fetch('${baseUrl}/${id}',{
     
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin': "*"

        },
    }).then(res => res.json());
}