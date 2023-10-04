const router = require('express').Router();
const { User, Articles, Comments } = require('../models')
const authorizer = require('../utils/authorized')
//when in dashboard, want to see the articles written by the user
router.get('/', authorizer, async (req, res) => {
  try {
    const userDashboardData = await Articles.findAll({
      where: {
        created_by_user_id: req.session.user
      },
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
        }
      ]
    })
    //serialization
    const userDashboard = userDashboardData.map(articles => articles.get({ plain: true }))
    res.render('dashboard-page', {
      userDashboard,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

//render in the new-article page to create a new echo
router.get('/new', authorizer, (req, res) => {
  res.render('new-article', {
  })
})

//controller to edit an existing echo
router.get('/edit/:id', authorizer, async (req, res) => {
  try {
    const editArticleData = await Articles.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          include: [{
            model: User,
            attributes: ['username']
          }],
        }]
    })

    if (!editArticleData) {
      res.status(404).json(`Sorry no article with that id found! Please try again`)
    }
    const editArticle = editArticleData.get({ plain: true });
    console.log(editArticle)
    res.render('edit-article', {
      editArticle,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router