const express = require('express')
const router = express.Router();
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
    apis:['./routes/fetchApi_filterAndLimit']


}

const swaggerSpecification=swaggerJSDoc(options);
