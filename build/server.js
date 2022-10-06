"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// express 
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello wolrd');
});
app.get('/bsm', function (request, response) {
    response.send('a lista de BSMs da Generation Brasil<br>' +
        'Persistência <br>' +
        ' Responsabilidade pessoal <br>' +
        ' Orientação ao futuro <br>' +
        'Mentalidade pessoal <br>' +
        ' Habilidade em equipe <br>' +
        'Atenção aos detalhes <br>' +
        'Proatividade <br>' +
        'Comunicação');
});
app.listen(port, function () {
    console.log("Server is runnig at port ".concat(port, " "));
});
