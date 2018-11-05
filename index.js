const express = require('express')
const bodyParser = require('body-parser')

// Express setup
const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

function tester(funcs, args) {

    funcs.forEach(func => {
        const t1 = performance.now();
        for(var i = 0; i < 100000; i++ ){
            func(args);
        };
        const diff = performance.now() - t1;
        console.log(diff);
    });
}


