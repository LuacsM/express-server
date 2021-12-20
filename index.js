const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()



//definnindo template engine
app.set('view engine', 'ejs')

//definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))

//definindo os arquivos PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extends: true}))

// ROTAS
app.get('/', (req, res) => { // pode resumir como "req" e "res"
    res.render('index', {
        title: 'Getag - Home'
    })
})

app.get('/posts', (req, res) => { // pode resumir como "req" e "res"
    fs.readFile('./store/posts.json', function(error, content){
        if (error){
            console.log('Ops, deu erro!', error)
        }else {
            const post = JSON.parse(content)

            res.render('posts', {
                title: 'Getag - Posts',
                posts: post
            })
        }
    })
    
})

app.get('/cadastro-posts', (req, res) => { // pode resumir como "req" e "res"
    const {c} = req.query // recebeu c=1 
    res.render('cadastro-posts', {
        title: 'Getag - Cadastrar Post',
        cadastrado: c,
    })
})

app.post('/salvar-post', (req, res)=>{
    const {titulo, texto, stars} = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
        stars,
    })

    const postsString = JSON.stringify(posts)

    fs.writeFileSync('./store/posts.json', postsString)

    //console.log(req.body)
    res.redirect('/cadastro-posts?c=1')
})

// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('Página não encontrada!')
})


// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))


