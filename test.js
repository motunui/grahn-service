const Comment = db.define('comment', {
  title: Sequelize.STRING,
  user: Sequalize.STRING,
  rating: Sequelize.INTEGER,
  body: Sequelize.TEXT,
  // review_date: Sequelize.DATE, A time stamp is created when something is
  //stored into db
  trip_date: Sequelize.DATE,
  pic_URL: Sequalize.STRING,
  mobile: Sequelize.BOOLEAN,
  Flag: Sequelize.BOOLEAN
});

Event.hasMany(Comment);

let generateComments = function() {
  let comments = [];

  for (let i = 0; i < Math.floor(Math.random() * 25) + 1; i++) {
    comments.push({
      user: faker.internet.userName,
      rating: Math.floor(Math.random() * 5 + 1),
      body: faker.lorem.paragraphs,
      trip_date: faker.date.past,
      pic_URL: faker.image.city,
      mobile: Math.random() >= 0.5,
      flag: Math.random() >= 0.95
    });
  }
  return comments;
};

let generateEvents = (comments) => {
  let events = [];
  for (var i = 0; i < 100; i++) {
    events.push(
      Event.create({ name: faker.address.city, comments: generateComments() })
    );
  }

  return Promise.all(events);
};

(async () => {
  let events = await generateEvents(comments);
})();
