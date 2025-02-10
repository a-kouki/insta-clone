function post_main_insta(posts) {
    let code_html_posts = '';

    posts.forEach(({ user, post }) => {
        code_html_posts += `
            <div class="posts">  
                <div class="details_one">
                    <div class="details_two">
                        <img src="${user.profile_img}" style="width: 42px; border-radius: 50%;">
                        <div>
                            <a href='/${user.name}'><button>${user.name}</button> • <button>${post.data_post}</button> • <button id="follow">Follow</button></a><br>
                            <span>${post.music_name}</span>
                        </div>
                    </div>
                    <p>•••</p>
                </div>

                <img id="post_img" src="${post.post_img}">
                
                <div class="icons">
                    <div class="icons_right">
                        <button><img src="./icons/heart.png"></button>
                        <button><img src="./icons/message.png"></button>
                        <button><img src="./icons/send.png"></button>
                    </div>
                    <button><img src="./icons/save.png" ></button>
                </div>

                <div class="description">
                    <button>Like by</button>
                    
                    <div id="comment_line">
                        <a href="./${user.name}">${user.name}</a> 
                        <span>${post.descrition_post}</span>
                    </div>

                    <button id="view_comment">View all *number comments</button>
                    <textarea placeholder="Add a comment.."></textarea>
                </div>
            </div>
        `;
    });

    document.querySelector('.posts_area').insertAdjacentHTML('beforeend',code_html_posts);
    //document.querySelector('.posts_area').innerHTML += code_html_posts;

};


document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/random-posts')  
        .then(response => response.json())
        .then(data => {
            post_main_insta(data.posts);
        });
});

let currentPage = 1;
let loading = false;

function loadMorePosts() {

    fetch(`/api/random-posts`)
        .then(response => response.json())
        .then(data => {
            post_main_insta(data.posts); 
        })
        .catch(error => {
            console.error("Erro ao carregar mais posts:", error);
        });
}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMorePosts();
    }
});
