
function orderposts(){
    let p = document.getElementById('posts_area');
    let ps = p.querySelectorAll('button');

    let countRow = 1;
    let i = ps.length - 1;

    while(i >= 0){

        for (let j=1; j<=3; j++){
            if(i<0) break;

            ps[i].style.gridColumn = j;
            ps[i].style.gridRow = countRow;

            i--;
        };
        countRow++;
    };
};



document.addEventListener('DOMContentLoaded', () =>{
    const posts = document.querySelector('#new_id_for_button');

    posts.addEventListener('click', () => {
        orderposts();
    });

    let p = document.getElementById('posts_area');
    const ps = p.querySelectorAll('button');

    const view_img_video = document.getElementById('post_img');

    ps.forEach(ps => {
        ps.addEventListener('click', () => {

            const content = ps.querySelector('img').src;
            view_img_video.src = content;

            const detail_two = document.querySelector('.details_two div span');
            console.log(detail_two);
            const music = ps.querySelector('#music_post').innerHTML;
            detail_two.innerHTML = music;

            const comment = document.querySelector('#comment_line').querySelector('span');
            const about = ps.querySelector('span').innerHTML;
            comment.innerHTML = about;

            document.querySelector('.post_view_center').style.display = 'flex';
            document.querySelector('.close-btn').style.display = 'flex';
            document.querySelectorAll('.arrow-button').forEach(button => {
                button.style.display = 'flex';
            });
        });
    });
});


document.addEventListener('click', (event) => {
    if(!event.target.closest('.post_view') && event.target.closest('.post_view_center') || event.target.closest('.close-btn'))
    {
    document.querySelector('.post_view_center').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
    document.querySelectorAll('.arrow-button').forEach(button => {
        button.style.display = 'none';
    });
    };
})

