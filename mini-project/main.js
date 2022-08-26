fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then(users => users.forEach(user=>{
        let div = document.createElement('div');
        div.innerText = user.id + " " + user.name;
        document.body.appendChild(div);
        let button = document.createElement('button');
        button.innerText = "more info";
        button.onclick = function (){
            location.href=`user.html?id=${user.id}`;
        }
        div.appendChild(button);
    }))