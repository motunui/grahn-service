const db = require('./index.js');
const { Event, HightLights, Location, Guarantee } = require('./models.js');

db.sync({ force: true })
  .then((a) => {
    let events = [];
    for (let i = 0; i <= 100; i++) {
      events.push({
        type: 'Event_' + i,
        name: 'Name_' + i,
        description: 'Description_' + i,
        imageUrl: 'imageUrl_' + i,
        listPrice: i * 100,
        locationId: i
      });
    }

    return Promise.all(
      events.map((e) => {
        return Event.create(e);
      })
    );
  })
  .then((events) => {
    // console.log('EVENT CALL: ', events);
  })
  .catch((e) => {
    console.log(e);
  });
