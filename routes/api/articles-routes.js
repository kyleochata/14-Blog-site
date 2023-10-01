const router = require('express').Router();
const { Articles } = require('../../models');
const authorizer = require('../../utils/authorized');

router.post('/', authorizer, async (req, res) => {
  try {
    const newArticleData = await Articles.create({
      title: req.body.title,
      created_by_user_id: req.session.user,
      content: req.body.content
    })
    if (!newArticleData) {
      res.status(400).json({ message: 'sorry invalid post' })
    }
    res.status(200).json(newArticleData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router