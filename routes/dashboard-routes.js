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
      layout: 'dashboard',
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/new', (req, res) => {
  res.render('new-article', {
    layout: 'dashboard'
  })
})

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
    console.log(editArticleData)
    if (!editArticleData) {
      res.status(404).json(`Sorry no article with that id found! Please try again`)
    }
    // const editArticle = editArticleData.map(article => article.get({ plain: true }));
    res.render('edit-article', {
      editArticle,
      layout: 'dashboard',
    })
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router