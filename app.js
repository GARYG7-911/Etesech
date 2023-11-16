const mysql = require("mysql2")

const conct = mysql.createConnection(
    {
    host:"localhost",
    port:3306,
    user:"root",
    password:"0907",
    database:"Kasitalovers"
    }
)
conct.connect(
    function(err) {
        if (err) {
            return console.error('error' , err)
        }

        conct.query(
            "select * from Platos",
            function (err, resultr, fields){
                console.log(resultr)
                console.log(fields)
            }
        )
    }
)

