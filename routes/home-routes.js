const router = require('express').Router();
const authorizer = require('../utils/authorized')
const { User, Articles, Comments } = require('../models');

//GET all article names and date created
router.get('/', async (req, res) => {
  try {
    //sequelize get of all data in Articles table
    const articlesData = await Articles.findAll();
    //serialization Sequelize obj to normal obj
    const articles = articlesData.map(article => article.get({ plain: true }));
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

    const post = singleArticleData.dataValues;
    res.render('articles-page', {
      post,
      loggedIn: req.session.loggedIn
    })

  } catch (err) {
    return res.status(500).json(err)
  }
});

//send user to the login/signup page
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  res.render('login')
})

module.exports = router;