
function menus(){
    let m = 
        `
            <a href='../main.html'><img id="logo_insta" src="./icons/Instagram-Logo.png"></a>

            <div class="menus_options font_menus">
                <a id="home_button" href="../main.html"><div><img src="./icons/Home.svg"><p>Home</p></div></a>
                <a id="search_button"><div><img src="./icons/search.png"><p>Search</p></div></a>
                <a><div><img src="./icons/explore.svg"><p>Explore</p></div></a>
                <a><div><img src="./icons/reels.png"><p>Reels</p></div></a>
                <a><div><img src="./icons/send.png"><p>Messages</p></div></a>
                <a><div><img src="./icons/heart.png"><p>Notifications</p></div></a>
                <a><div><img src="./icons/public.png"><p>Create</p></div></a>
                <a href="/profile"> <div id="profile_button"><img src="./icons/profile.jpg" style="border-radius: 15px;"><p>Profile</p></div></a>
            </div>
            
            <div class="menus_profile font_menus">
                <button id="menu_button" >
                    <div class="more">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <p>More</p>
                </button>
            </div>
        `;
    document.querySelector('.menus').innerHTML = m;
};


document.addEventListener("DOMContentLoaded", () => {
    menus(); 
    menu_search();
    menu_more();
});


function menu_search() {
    const searchButton = document.querySelector('#search_button');
   
    searchButton.addEventListener('click', () => {

        if(document.querySelector('.menus_options')){

            const tagp = document.querySelectorAll('.menus_options p');
            tagp.forEach((p) => {
                p.style.display ='none';
            })
            const more = document.querySelector('.menus_profile p');
            more.style.display = 'none';
            const more_button = document.querySelector('.menus_profile button');
            more_button.style.paddingLeft = '9px';
            more_button.style.paddingTop = '18px';

            const menu = document.querySelector('.menus_options');
            menu.classList.replace('menus_options','menus_options_change');

            const iconIns = document.querySelector('#logo_insta');
            console.log("Instagram Logo element found:", iconIns);
            iconIns.src = './icons/instagram.png';
            iconIns.id = 'logo_insta_change';

            const m = document.querySelector('.menus');
            m.classList.replace('menus', 'menus_change');

            const border_search = document.querySelector('#search_button');
            border_search.style.border = '1px solid #b7b3b3';
            border_search.style.borderRadius = '10px';

            document.querySelector('.area_search').style.display ='flex';
            
    
        }else if(document.querySelector('.menus_options_change')){
            const menu = document.querySelector('.menus_options_change');
            menu.classList.replace('menus_options_change','menus_options');
            
            const iconIns = document.querySelector('#logo_insta_change');
            iconIns.src = './icons/instagram-Logo.png';
            iconIns.id = 'logo_insta';

            const tagp = document.querySelectorAll('.menus_options p');
            tagp.forEach((p) => {
                p.style.display ='flex';
            });
            const more = document.querySelector('.menus_profile p');
            more.style.display = 'flex'; 

            const m = document.querySelector('.menus_change');
            m.classList.replace('menus_change', 'menus');

            const more_button = document.querySelector('.menus_profile button');
            more_button.style.paddingLeft = '20px';
            more_button.style.paddingTop = '0px';

            const border_search = document.querySelector('#search_button');
            border_search.style.border = 'none';
            border_search.style.borderRadius = 'none';

            document.querySelector('.area_search').style.display ='none';

        }

    });
    
};


function menu_more(){
    const morebutton = document.querySelector('#menu_button');

    morebutton.addEventListener('click',() => {
        if(document.querySelector('.moreoptions').style.display != 'none'){
        document.querySelector('.moreoptions').style.display = 'none';
        }
        else{
            document.querySelector('.moreoptions').style.display = 'flex';
        }
    });

}

