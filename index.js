import express  from "express";

const app = express();


app.get("/",(req,res)=>{
    res.send("Server is Ready");
});


// get a list of five jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'this is another joke'
        },
        {
            id: 3,
            title: 'Another second joke',
            content: 'this is another second joke'
        },

        {
            id: 4,
            title: 'forth joke',
            content: 'this is another joke'
        },

        {
            id: 5,
            title: 'Another fifth joke',
            content: 'this is another fifth joke'
        },


    ];
    res.send(jokes);
});

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`Server is listning @ http://localhost:${port}`);
})
