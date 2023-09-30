// require('dotenv').config()
// const path = require('path');
// const express = require('express');
// // Import express-session
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set up sessions
// const sess = {
//   secret: process.env.SESS_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 60 * 1000,
//     httpOnly: true,
//     secure: false,
//   }
// };

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

// const express = require('express');
// const routes = require('./routes');
// // import sequelize connection
// const sequelize = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
//   });
// })

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

