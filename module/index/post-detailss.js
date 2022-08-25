console.log(location.href);
let url= new URL(location.href);
console.log(url);
let id = url.searchParams.get("id");
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(info =>{
        let div = document.createElement('div');
        let p1 =document.createElement('p')
        p1.innerText = info.id;
        let p2 = document.createElement('p');
        p2.innerText = info.body;
        div.append(p1,p2);
        document.body.appendChild(div);
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => response.json())
            .then(all =>{
                   let title = document.createElement('h2');
                   title.innerText = "more information"
                   let div = document.createElement('div');
                   let p = document.createElement('p');
                   p.innerText = all.id;
                   let p1 = document.createElement('p');
                   p1.innerText = all.name;
                   let p2 = document.createElement('p');
                   p2.innerText = all.email;
                   let p3 = document.createElement('p');
                   p3.innerText = all.body;
                    div.append(title,p,p1,p2,p3);
                    document.body.appendChild(div)
            })
    })