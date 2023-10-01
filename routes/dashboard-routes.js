const router = require('express').Router();
const { User, Articles, Comments } = require('../models')
const authorizer = require('../utils/authorized')
//when in dashboard, want to see the articles written by the user
router.get('/', authorizer, async (req, res) => {
  //tester to get data. will need to change the route to '/', fxn to check if user is logged into a session, where changed to req.session. user's id
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
    // res.status(200).json(userDashboardData)
    console.log(userDashboardData)
    //serialization
    const userDashboard = userDashboardData.map(articles => articles.get({ plain: true }))
    console.log(userDashboard)
    return res.render('dashboard-page', {
      userDashboard,
      layout: 'dashboard',
    })
  } catch (err) {
    res.status(500).json(err)
  }

});
// router.get('/new', (req, res) => {
//   res.render(add relative path to the correct handlebar for making a new post, {
//   layout: 'dashboard'
// })
// })

// router.get('/edit/:id', async (req, res) => {
//   try {
//     const editArticleData = await Articles.findByPk(req.params.id);
//     if (!editArticleData) {
//       res.status(404).json(`Sorry no article with that id found! Please try again`)
//     }
//     res.render('edit-article', {
//       layout: '',
//     })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })
module.exports = router