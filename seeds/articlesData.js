const { Articles } = require('../models');

const articlesData = [
  {
    title: 'Learning to Code',

    created_by_user_id: 2,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae maiores temporibus sed! Quas ducimus sed ipsum, repellat laborum incidunt voluptates inventore quidem aliquid, perspiciatis ratione maiores amet, cumque vero!'
  },
  {
    title: 'What is the deal with design?',

    created_by_user_id: 4,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae maiores temporibus sed! Quas ducimus sed ipsum, repellat laborum incidunt voluptates inventore quidem aliquid, perspiciatis ratione maiores amet, cumque vero!'
  },
  {
    title: 'Making it to the end',

    created_by_user_id: 3,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae maiores temporibus sed! Quas ducimus sed ipsum, repellat laborum incidunt voluptates inventore quidem aliquid, perspiciatis ratione maiores amet, cumque vero!'
  },
  {
    title: 'Light the fire',

    created_by_user_id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae maiores temporibus sed! Quas ducimus sed ipsum, repellat laborum incidunt voluptates inventore quidem aliquid, perspiciatis ratione maiores amet, cumque vero!'
  },
];

const seedArticles = () => Articles.bulkCreate(articlesData);

module.exports = seedArticles