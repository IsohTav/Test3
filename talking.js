
const express = require("express");
const router = express.Router();
const app = express();

router.get(‘/handle’,(request,response) => {
    res.send('hello world')
});


app.use("/", router);
