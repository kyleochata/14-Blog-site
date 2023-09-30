const router = require('express').Router();

const { User, Articles, Comments } = require('../models');

//GET all article names and date created
//for website.com/
router.get('/', async (req, res) => {
  try {
    //sequelize get of all data in Articles table
    const articlesData = await Articles.findAll();
    //serialization Sequelize obj to normal obj
    const articles = articlesData.map(article => article.get({ plain: true }));
    //tester to see pulling data; change to res.render to send to handlebars
    // res.status(200).json(articles);
    console.log(articles)
    res.render('homepage', articles)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET single post 
router.get("/articles/:id", async (req, res) => {
  try {
    const singleArticleData = await Articles.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comments,
          include: [{
            model: User,
            attributes: ['username']
          }],

        }]
    })
    res.status(200).json(singleArticleData)
    //change to res.render send to correct handlebar
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;