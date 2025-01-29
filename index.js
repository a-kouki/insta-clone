const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5500;


app.use(express.static(path.join(__dirname,'public')));


function loadUsersData() {
    const usersFilePath = path.join(__dirname, './data/users_data.json');
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
};

function loadYourData(){
    const yourfilePath = path.join(__dirname, './data/your_data.json');
    return JSON.parse(fs.readFileSync(yourfilePath, 'utf8'));
}

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/main.html'));
})

app.get('/yourdata', (req, res) => {
    const yourData = loadYourData();
    res.json(yourData);
});
app.post('/update-following-json', express.json(), (req,res) => {
    const updateData = req.body;
    console.log(updateData);
    fs.writeFile(
        path.join(__dirname, './data/your_data.json'),
        JSON.stringify(updateData, null, 2),
        (err) => {
            if(err){
                console.error('Erro ao salvar os dados:', err);
                return res.status(500).send('Erro ao salvar os dados.');
            }
            res.status(200).send('Dados atualizados com sucesso!');
        }
    );
});

app.get('/profile', (req, res) => {
    const you = loadYourData();

    fs.readFile(path.join(__dirname, '/public/profile.html'), 'utf8', (err,data) => {
        const replaces = [
            { placeholder: '{{name}}', value: you.name },
            { placeholder: '{{N posts}}', value: you.posts_user.length.toString() + ' posts' },
            { placeholder: '{{profile_img}}', value: you.profile_img },
            { placeholder: '{{descrition}}', value: you.descrition},
            { placeholder: '{{N followers}}', value: you.follower.length.toString() + ' follower' },
            { placeholder: '{{N following}}', value: you.following.length.toString() + ' following' }
        ];

        let userHtml = data;
        replaces.forEach(replace => {
            userHtml = userHtml.replace(new RegExp(replace.placeholder, 'g'), replace.value);
        });

        let posts_qty = you.posts_user;
        let postsHTML= '';

        let countRow = 1;
        let i = posts_qty.length - 1;

        while(i >= 0){
            for(let j=1; j<=3; j++){
                if(i < 0 ) break;

                postsHTML += `
                <button style="grid-column: ${j}; grid-row: ${countRow};"><img src="${posts_qty[i].post_img}"><span style="display: none">${posts_qty[i].descrition_post}</span></button>
                `;
                i--;
            };
            countRow++;
        };

        userHtml = userHtml.replace('{{posts}}', postsHTML);

        res.send(userHtml);
    });

});

app.get('/:username', (req, res) => {
    const username = req.params.username; 
    const users = loadUsersData();
    const user = users.find(u => u.name === username); 

    if (user) {
        fs.readFile(path.join(__dirname, 'public/users_profile.html'), 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send('Erro ao ler o template HTML');
            }

            let userHtml = data
                .replace('{{N posts}}', `${user.posts_user.length} posts`);

            const replacements = [
                { placeholder: '{{name}}', value: user.name },
                { placeholder: '{{profile_img}}', value: user.profile_img },
                { placeholder: '{{descrition}}', value: user.descrition},
                { placeholder: '{{N followers}}', value: user.follower.length.toString() + ' follower'},
                { placeholder: '{{N following}}', value: user.following.length.toString() + ' following' }];

            replacements.forEach(replacement => {
                userHtml = userHtml.replace(new RegExp(replacement.placeholder, 'g'), replacement.value);
            })

            let posts_qty = user.posts_user;
            let postsHTML= '';

            let countRow = 1;
            let i = posts_qty.length - 1;

            while(i >= 0){
                for(let j=1; j<=3; j++){
                    if(i < 0 ) break;

                    postsHTML += `
                    <button style="grid-column: ${j}; grid-row: ${countRow};"><img src="${posts_qty[i].post_img}"><span style="display: none">${posts_qty[i].descrition_post}</span></button>
                    `;
                    i--;
                };
                countRow++;
            };

            userHtml = userHtml.replace('{{posts}}', postsHTML);
            
            const you = loadYourData();

            res.send(userHtml);
        });
    } else {
        res.status(404).send('Usuário não encontrado');
    } 
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
