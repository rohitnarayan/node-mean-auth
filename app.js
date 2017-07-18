const 	express = require("express"),
		path 	= require("path"),
		bodyParser = require("body-parser"),
		cors = require("cors"),
		passport = require("passport"),
		mongoose = require("mongoose");

const users = require("./routes/users");
const config = require("./config/database.js");


mongoose.connect(config.database);

// mongoose.connection.on("connected",function(){
// 	console.log("connected to mongodb"+config.database);
// })

const app = express();
const port = 8080;

//MIDDLEWARES
app.use(cors());
// app.use(bodyParser.json());
var jsonParser = bodyParser.json();
app.use("/users",jsonParser,users);
app.use(express.static(path.join(__dirname,"public")));
app.use(passport.initialize());
app.use(passport.session());

// 	STATIC MIDDLEWARE
app.use(express.static(path.join(__dirname,"public")));

require("./config/passport")(passport);


app.get("/",function(req,res){
	res.send("Hello World");
});

app.listen(port);