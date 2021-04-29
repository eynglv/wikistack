const express = require('express');
const router = express.Router();
const addPage = require("../views/addPage");
const {db, Page, User} = require("../models")


router.get('/add', (req, res, next) => {
    res.send(addPage())

})

router.get('/',  (req, res, next) => {
    res.send('something wiki');
})

function slugConverter(title){
    if (title === undefined || title === ""){
        return "untitled_content"
    } else {
        const result = title.replace(/ /g, "_")
        return result.replace(/\W/g, '');
    }
}


router.post('/', async (req, res, next) => {
    try{
        const name = req.body.name;
        const title = req.body.title;
        const email = req.body.email;
        const content = req.body.content;
        const status = req.body.status;

        const person = await User.create({
            name: name,
            email: email,
        });

        const page = await Page.create({
            title: title,
            slug: slugConverter(title),
            content: content,
            status: status
        });

        res.status(200);
    } catch (err) {
        next(err)
    }

})



module.exports = router;