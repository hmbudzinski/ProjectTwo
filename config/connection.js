var mysql = require("mysql");
var connection;

//do we use Jawsdb for this or a differet one?
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        //need to add secret password thing
        password: "",
        //need to add db name once created
        database: ""
    });
}
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;