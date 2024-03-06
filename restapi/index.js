const express = require('express')
const app  = express()
const port = 3000

//parse JSON using express
app.use(express.json())
app.use(express.urlencoded( {extended : false}))

let movies = [{
    id: '1',
    title: 'Inception',
    director: 'Christopher Nolan',
    release_date : '2010.07.10'
},
{
    id: '2',
    title : 'The Irishman',
    director : 'Martin Scorsese',
    release_date : '2019.09.27'
},
];

// get name the movie list in the form of JSON
app.get('/movie',(req,res)=>{
    res.json(movies)
});

//add a movie to the list 

app.post('/movie',(req,res)=>{
    const movie= req.body 
    console.log(movie)
    movies.push(movie)
    res.json(movies);
})

//search movie in the list

app.get('/movie/:id',(req,res)=>{
    const id = req.params.id

    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    }
        res.status(404).send('Movie not found')
})

// set the server to listem at port

app.listen(port,()=> console.log(`server listening at port ${port}`))