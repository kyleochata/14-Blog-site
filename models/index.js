const { User } = require('./Users');
const { Articles } = require('./Articles');
const { Comments } = require('./Comments');

User.hasMany(Articles, {
  foreignKey: 'created_by_user_id'
})

Articles.belongsTo(User, {
  foreignKey: 'created_by_user_id'
})

Articles.hasMany(Comments, {
  foreignKey: 'article_id'
})

User.hasMany(Comments, {
  foreignKey: 'comment_user_id'
})

Comments.belongsTo(User, {
  foreignKey: 'comment_user_id'
})

Comments.belongsTo(Articles, {
  foreignKey: 'article_id'
})

module.exports = { User, Articles, Comments }