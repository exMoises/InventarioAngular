const mysql = require ('mysql');

const conexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port: 3306,
    database : 'stcok',
    insecureAuth : true
});

conexion.connect((err) => {
    
    if(err){
        console.log('ERROR DE CONEXION: '+ ' -- ' + err )
    }else {
        console.log('BASE DE DATOS SE A CONECTADO !!')
    }

});

module.exports = conexion;