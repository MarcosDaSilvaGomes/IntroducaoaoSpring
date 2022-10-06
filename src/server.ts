// express 
import * as express from 'express';

const app = express ();
const port = 3000;

app.get ('/', (request, response) => {

    response.send ('Hello wolrd');
} );

app.get ('/bsm', (request, response) => {

    response.send ('A lista de BSMs da Generation Brasil<br>'+
   'Persistência <br>' + 
   ' Responsabilidade pessoal <br>' +
   ' Orientação ao futuro <br>'+
   'Mentalidade pessoal <br>' +
   ' Habilidade em equipe <br>'+
   'Atenção aos detalhes <br>'+
   'Proatividade <br>' +
  'Comunicação' )
});

app.get ('/ODS', (request, response) => {

    response.send ('Objetivos aprendidos na semana<br>'+
        '1- Entender e aplicar como funcionar o banco de dados<br>'+
        '2- Criando bancos de dados<br> ' +
        '3- Fazer um vinculo de cada categoria utilizando 1:1, 1:n , n:n')
    
});




app.listen(port, () => {
console.log(`Server is runnig at port ${port} `);

});