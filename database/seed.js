const db = require('./index.js');
const { Event, HighLights, Location, Guarantee } = require('./models.js');

db.sync({ force: true })
  .then((a) => {
    let locs = [];

    for (let i = 1; i <= 100; i++) {
      locs.push({
        name: 'Name_' + i
      });
    }

    return Promise.all(
      locs.map((l) => {
        return Location.create(l);
      })
    );
  })
  .then((locs) => {
    let events = [];

    for (let i = 1; i <= 100; i++) {
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
    let hls = [];

    for (let i = 1; i <= 100; i++) {
      hls.push({
        text: 'Text_' + i,
        eventId: i
      });
    }

    return Promise.all(
      hls.map((hl) => {
        return HighLights.create(hl);
      })
    );
  })
  .catch((e) => {
    console.log(e);
  });
