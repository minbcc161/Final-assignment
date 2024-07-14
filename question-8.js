// Question #8: Fetching User List from Server

let username =() => {
    return fetch('https://jsonplaceholder.typicode.com/users')
}
let handleResponse = (response) =>{
    return response.json()
}
let onSuccess = (data)=> {
    let users = []
    users.push(data);
let newUsers = []
for(let i =0; i < data.length; i++){
    
    newUsers.push(data[i].name)
}
console.log(newUsers)
    
}
   
username().then(handleResponse).then(onSuccess)
