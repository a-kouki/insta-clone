const users = [ {name: "batmanprofile",
    profile_img:"./picture_users/batmanprofile.jpg",
    descrition:"Work with vigilance\nIam vingance, Iam night, IAM BATMAN",

    posts_user:[{
        number: 1,
        data_post: "2d",
        music_name: "Batman 1989 Theme by Danny Elfman",
        post_img:"./picture_users/batman/post01.jpg",
        descrition_post: "Going fight crime. Its be long night.",
        }]
}];

function post_main_insta(){
    let code_html_posts = 
        `
        <div class="posts">  
            <div class="details_one">
                <div class="details_two">
                    <img src="./icons/profile.jpg" style="width: 50px; border-radius: 50%;">
                    <div>
                        <p><button>${users[0].name}</button> • <button>${users[0].posts_user[0].data_post}</button> • <button id="follow">Follow</button></p>
                        <span>${users[0].posts_user[0].music_name}</span>
                    </div>
                </div>
                <p>•••</p>
            </div>

            <div style="background-color: black;">
            <img id="post_img" src="${users[0].posts_user[0].post_img}">
            </div>
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
                <button>${users[0].name}</button><p>${users[0].posts_user[0].descrition_post}</p>

                <button id="view_comment">View all *number comments</button>
                <textarea placeholder="Add a comment.."></textarea>
            </div>
        </div>
    `;
    console.log(users[0].name);
    let p ='';
    for(let i=0;i<=10;i++){
        p += code_html_posts;
        i++;
    }
    document.querySelector('.posts_area').innerHTML = p;
    
};

document.addEventListener("DOMContentLoaded", () =>{
    post_main_insta();
})