require('./config/config');
var express = require('express')
var bodyParser = require('body-parser')

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     let text = JSON.stringify(req.body, null, 2)
//     res.end(text)
//     console.log('------------------------------------');
//     console.log(text);
//     console.log('------------------------------------');
// })



app.get('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})

app.post('/usuario', function(req, res) {
    // let body = req.body;
    // res.json({
    //     persona: body
    // });


    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });

})

app.delete('/usuario', function(req, res) {
    res.json('Se envio un DELETE')
})


app.listen(process.env.PORT, () => {
    console.log('------------------------------------');
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
    console.log('------------------------------------');
})