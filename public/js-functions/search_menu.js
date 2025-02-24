
const search = document.getElementById('search');
const listuser = document.querySelector('.list_search');
/*
search.addEventListener('input', () =>{
    const searchlow = search.value.toLowerCase();
    console.log(searchlow);
  
    clearTimeout(searchtime);

    searchtime = setTimeout(() => {
        const use = searchlow;
        if(use.lenght > 0){
            fetch('/userserach')
            .then(response => response.json())
            .then(data => {
                listuser.innerHTML ='';
                data.forEach(use => {
                    const div = document.createElement("div");
                    div.classList.add('resultsearch');
                    div.textContent = use.name;
                    listuser.appendChild(div);
                });
            })
            .catch(err => 'Erro na busca');
        } else{
            listuser.innerHTML='';
        }
    }, 300);
});*/
/*
function loadUsers() {
    fetch(`/usersearch`)
    .then(response => response.json())
    .then(data => {
        const allUsers = data;
        console.log('Usuários carregados:', allUsers);
    })
    .catch(error => console.error('Erro ao carregar usuários:', error));
}
// Carrega todos os usuários ao carregar a página
window.addEventListener('DOMContentLoaded', loadUsers);
*/

function searchUser(){
    const searchuse = search.value;
    listuser.innerHTML ="";
    if(searchuse) {
        fetch('/usersearch')
            .then(response => response.json())
            .then(data => {
                const us = data.map((user, index) => ({ index, name: user.name }));
                const filteredUsers = us.filter(user => user.name.includes(searchuse));

                filteredUsers.forEach(user => {
                    console.log(data[user.index].profile_img)
                    //<a><img src="${data[user.index]}".profile_img><span>data[user.index].name</span></a>'';
                    //const div = document.createElement("div");
                    //div.classList.add("result");
                    //div.textContent = data[user.index].name;
                    //document.querySelector('.line_search').innerHTML = `<img src=${data[user.index].profile_img}>`
                    //console.log(listuser);
                    //const div = document.createElement("img");
                    //div.src = data[user.index].profile_img;
                    //listuser.appendChild(div);

                    listuser.innerHTML += `<a id="user_searching" href="/${data[user.index].name}">
                                                <img src=${data[user.index].profile_img}>
                                                <div> 
                                                    <span id="name">${data[user.index].name}</span>
                                                    <span id="nameuser">${data[user.index].nameuser}</span>
                                                </div>
                                            </a>`
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}
search.addEventListener("input", searchUser);



