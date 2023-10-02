const router = require('express').Router();
const authorizer = require('../utils/authorized')
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

    console.log(articles)
    return res.render('homepage', {
      articles,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    return res.status(500).json(err)
  }
})

//GET single post 
router.get("/articles/:id", authorizer, async (req, res) => {
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
    //change to res.render send to correct handlebar

    const post = singleArticleData.dataValues;
    console.log(post)
    res.render('articles-page', {
      post,
      loggedIn: req.session.loggedIn
    })

  } catch (err) {
    return res.status(500).json(err)
  }
});
// return res.status(200).json(post)

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  res.render('login', { layout: 'login' })
})

module.exports = router;