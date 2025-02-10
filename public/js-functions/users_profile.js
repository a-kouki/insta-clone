const jsonData = require(path.join(__dirname, 'data/user_datas.js'));


function users_profile(){
    let users_profile_html =
    `
        <div>
            <img id="image_profile" src="{{profile_img}}">

            <div class="profile_detail">
                <div class="first_line_profile">
                    <span>{{name}}</span>
                    <button>Follow</button>
                    <button>Message</button>
                    <button>+</button>
                    <button>•••</button>
                </div>

                <div class="second_line_profile">
                    <span>N posts</span>
                    <button>N followers</buttno>
                    <button>N following</button>
                </div>

                <section><span>{{descrition}}</span></section>
            </div>
        </div>
    `

    document.querySelector('.profile').innerHTML = users_profile_html;
};



document.addEventListener("DOMContentLoaded", () => {
    users_profile();
});
