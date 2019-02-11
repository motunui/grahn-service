const { Event, HighLights, Location, Guarantee } = require('./models.js');
let faker = require('faker');

let randomizeNumberThrough = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function location() {
  return Location.create({ name: faker.address.country() });
}

function event({ dataValues }) {
  return Event.create({
    type: faker.lorem.words(),
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.imageUrl(),
    listPrice: faker.finance.amount() * 100,
    locationId: dataValues.id
  });
}

function highlight({ dataValues }) {
  return HighLights.create({
    text: faker.lorem.words(),
    eventId: dataValues.id
  });
}

function populate(locations, func) {
  let arr = [];

  locations.forEach((location) => {
    let random = randomizeNumberThrough(1, 3);
    for (let i = 0; i < random; i += 1) {
      arr.pop(func(location));
    }
  });
  // for (let i = 0; i < random; i += 1) {
  //   for (let j = 0; j < objArr.length; j += 1) {
  //     arr.push(func(objArr[j]));
  //   }
  // }

  return Promise.all(arr);
}

function popLoc(limit, func) {
  let arr = [];

  for (let i = 1; i <= limit; i += 1) {
    arr.push(func());
  }

  return Promise.all(arr);
}

async function inject(primary) {
  let loc = await popLoc(primary, location);
  let events = await populate(loc, event);
  let highlights = await populate(events, highlight);

  return new Promise((res, rej) => {
    res('Done');
  });
}

// function promisifyAll() {
//   let storage = [];
//   return function map(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       storeage.push(callback(arr[i]));
//     }
//   };

//   return Promise.all(storage);
// }

// function asyncMap(tasks, callback) {
//   let promises = tasks.map((task) => {
//     return new Promise((res, rej) => {
//       task(res);
//     });
//   });

//   Promise.all(promises).then(callback);
// }

// function map(x) {
//   let arrs = [];
//   return function(func, res) {
//     for (let i = 0; i < x; i += 1) {
//       arrs.push(func(res));
//     }
//     return arrs;
//   };
// }

module.exports = inject;
