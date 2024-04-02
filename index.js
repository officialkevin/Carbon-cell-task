const express = require("express");

const app = express();

//app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/protectedroutes", require("./routes/protectedroutes"));

// for fetching api

app.use("/fetchApi_filterAndLimit",require("./routes/fetchApi_filterAndLimit"));









// for swagger documentation
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express')


const options={

    definition:{
        openapi:'3.0.0',
        info:{
            title:'node js api project documentation',
            version:'1.0.0'
        },
        servers:[
            {
             url:'http://localhost:5000/'
            }


        ]


    },
    apis:['./routes/*.js']


}

const swaggerSpecification=swaggerJSDoc(options);


app.use("/api-docs",swaggerUi.serve,
swaggerUi.setup(swaggerSpecification))
//end of swagger documentation


app.listen(5000, () => {
  console.log("Listening on port 5000");
});
 