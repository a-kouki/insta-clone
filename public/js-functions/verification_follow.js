
document.addEventListener('DOMContentLoaded', async () => {
    const followButton = document.getElementById('follow_user');
    const username = document.querySelector('.first_line_profile span').textContent;
    console.log('chegou ae aqui 1');
    try {
        
        const response = await fetch('/yourdata');
        const yourData = await response.json();
        const isFollowing = yourData.following.includes(username);

        if (isFollowing) {
            updateFollowButton(followButton, true);
        }else{
            updateFollowButton(followButton, false);
        }

        followButton.addEventListener('click', async () => {
            const isFollowing = yourData.following.includes(username);

            if(isFollowing){
                updateFollowButton(followButton, false);
                const index = yourData.following.indexOf(username);
                if (index > -1) {
                    yourData.following.splice(index, 1);
                    console.log(yourData.following);
                    console.log("removido");
                }
            }else{
                updateFollowButton(followButton, true);
                yourData.following.push(username);
                console.log("inserido");
            }

            await fetch('/update-following-json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(yourData),
            });
            
        });
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
});

function updateFollowButton(button, isFollowing) {
    if (isFollowing) {
        button.textContent = 'Following';
        button.style.backgroundColor = '#efefef';
        button.style.color = 'black';
    } else {
        button.textContent = 'Follow';
        button.style.backgroundColor = '#0095f6';
        button.style.color = 'white';
    };
}
