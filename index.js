const express = require('express')
const app = express()
const path = require('path')


//definnindo template engine
app.set('view engine', 'ejs')

//definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))

//definindo os arquivos PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))



// ROTAS
app.get('/', (req, res) => { // pode resumir como "req" e "res"
    res.render('index', {
        title: 'Getag - Home'
    })
})

app.get('/posts', (req, res) => { // pode resumir como "req" e "res"
    res.render('posts', {
        title: 'Getag - Posts',
        posts: [
            {
                title: 'Novidades no mundo da tecnologia',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra dolor sit amet mauris vehicula mollis. Proin aliquam, nisl nec aliquet aliquet, enim tellus aliquam orci, eu dapibus lectus leo ac felis. Curabitur lobortis risus turpis, in ultrices nulla sollicitudin a. Duis sed neque in eros ultricies venenatis eget sit amet elit. Morbi sed tortor et ipsum ultricies feugiat. Proin purus magna, congue at posuere eu, tincidunt sit amet risus. Nunc porta risus vel ligula tristique accumsan. Ut rutrum libero orci, at facilisis nisi luctus sed.'
            },
            {
                title: 'Criando um servidor com node.js',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra dolor sit amet mauris vehicula mollis. Proin aliquam, nisl nec aliquet aliquet, enim tellus aliquam orci, eu dapibus lectus leo ac felis. Curabitur lobortis risus turpis, in ultrices nulla sollicitudin a. Duis sed neque in eros ultricies venenatis eget sit amet elit. Morbi sed tortor et ipsum ultricies feugiat. Proin purus magna, congue at posuere eu, tincidunt sit amet risus. Nunc porta risus vel ligula tristique accumsan. Ut rutrum libero orci, at facilisis nisi luctus sed.'
            },
            {
                title: 'JavaScript é a linguagem mais usada no mundo!',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra dolor sit amet mauris vehicula mollis. Proin aliquam, nisl nec aliquet aliquet, enim tellus aliquam orci, eu dapibus lectus leo ac felis. Curabitur lobortis risus turpis, in ultrices nulla sollicitudin a. Duis sed neque in eros ultricies venenatis eget sit amet elit. Morbi sed tortor et ipsum ultricies feugiat. Proin purus magna, congue at posuere eu, tincidunt sit amet risus. Nunc porta risus vel ligula tristique accumsan. Ut rutrum libero orci, at facilisis nisi luctus sed.'
            }
        ]
    })
})

// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('Página não encontrada!')
})


// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))