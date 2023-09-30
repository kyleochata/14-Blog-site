const { Comments } = require('../models');

const commentsData = [
  {
    article_id: 1,
    comment: 'This is awesome!',
    comment_date: 'April 20, 2021',
    comment_user_id: 1
  },
  {
    article_id: 2,
    comment: 'This is awesome!',
    comment_date: 'September 29, 2023',
    comment_user_id: 4
  },
  {
    article_id: 1,
    comment: 'Thanks!',
    comment_date: 'April 27, 201',
    comment_user_id: 1
  },
  {
    article_id: 2,
    comment: 'Thanks!',
    comment_date: 'September 29, 2023',
    comment_user_id: 2
  }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments