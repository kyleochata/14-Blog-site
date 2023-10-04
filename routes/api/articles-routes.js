const router = require('express').Router();
const { Articles, Comments } = require('../../models');
const authorizer = require('../../utils/authorized');

//create a new echo(blog post) after user fills out form on dashboard/new
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

//update an existing echo(blog post) after user fills out the forms on dashboard/edit/:id
router.put('/:id', authorizer, async (req, res) => {
  try {
    const updateArticleData = await Articles.update({
      title: req.body.title,
      created_by_user_id: req.session.user,
      content: req.body.content
    },
      {
        where: {
          id: req.params.id
        }
      }
    )
    if (!updateArticleData) {
      res.status(404).json({ message: "No article found. Please try again" })
    }

    res.status(200).json(updateArticleData)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
})

//delete an existing echo (delete existing blog post)
router.delete('/:id', authorizer, async (req, res) => {
  try {
    const deleteArticle = await Articles.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!deleteArticle) {
      res.status(404).json({ message: "No article found. Please try again" })
    }
    res.json(deleteArticle)
  } catch (err) {
    res.status(500).json(err)
  }
})

//create a new responding echo(comment)
router.post('/comment', authorizer, async (req, res) => {
  try {
    console.log(req.body)
    const { article_id, comment } = req.body;
    console.log(comment)
    const newComment = await Comments.create({
      article_id,
      comment,
      comment_user_id: req.session.user
    });
    res.status(200).json(newComment)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
})

module.exports = router