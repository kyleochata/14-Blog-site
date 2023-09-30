const { Comments } = require('../models');

const commentsData = [
  {
    article_id: 1,
    comment: 'This is awesome!',

    comment_user_id: 1
  },
  {
    article_id: 2,
    comment: 'This is awesome!',

    comment_user_id: 4
  },
  {
    article_id: 1,
    comment: 'Thanks!',

    comment_user_id: 1
  },
  {
    article_id: 2,
    comment: 'Thanks!',

    comment_user_id: 2
  }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments