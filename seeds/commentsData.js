const { Comments } = require('../models');

const commentsData = [
  {
    article_id: 1,
    comment: `Computer science looks better`,

    comment_user_id: 2
  },
  {
    article_id: 1,
    comment: `Depends on what type of job you want. If you want to become a software engineer you should get a CS degree.
You can still land a job as a SWE with an IT degree but it’ll be harder.`,

    comment_user_id: 4
  },
  {
    article_id: 2,
    comment: 'Thanks!',

    comment_user_id: 1
  },
  {
    article_id: 2,
    comment: 'This is amazingly helpful!',

    comment_user_id: 4
  },
  {
    article_id: 3,
    comment: 'This is really cool!',
    comment_user_id: 1
  },
  {
    article_id: 4,
    comment: 'It really is NIGHT and DAY',
    comment_user_id: 5
  }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments