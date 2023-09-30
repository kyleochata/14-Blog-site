const { User } = require('./Users');
const { Articles } = require('./Articles');
const { Comments } = require('./Comments');

User.hasMany(Articles, {
  foreignKey: 'created_by_user_id',
  onDelete: 'CASCADE'
})

//when user deletes, want articles to delete
Articles.belongsTo(User, {
  foreignKey: 'created_by_user_id',
  onDelete: 'CASCADE'
})

//when article deleted, want comments to delete
Articles.hasMany(Comments, {
  foreignKey: 'article_id',
  onDelete: 'CASCADE'
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