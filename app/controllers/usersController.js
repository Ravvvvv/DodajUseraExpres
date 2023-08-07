
const Useres = require('../models/UsersModels')

module.exports = {
    index: (req, res) => {

        Users.find({}).lean((datas) => {

            res.send(datas, {

            });
        }).catch((err) => {
            res.send(err)
        })
        // const posts = await Post.find().exec();
        // res.send(posts)
    }
};