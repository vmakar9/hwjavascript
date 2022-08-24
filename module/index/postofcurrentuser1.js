console.log(location.href);
let url= new URL(location.href);
console.log(url);
let id = url.searchParams.get("id");
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(user => {
            let title = document.createElement('h1');
            title.innerText = user.title;
            document.body.appendChild(title);
        }
    )