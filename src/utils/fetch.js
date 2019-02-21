import Axios from 'axios';

let axios = Axios.create({
  baseURL: 'http://34.205.143.254/api/'
});

export function fetchFromDB(path, setState) {
  axios
    .get(`${path}`)
    .then(({ data }) => {
      console.log('TCL: fetchFromDB -> data', data);
      setState(data);
    })
    .catch((err) => {
      console.log('TCL: fetchFromDB -> err', err);
    });
}
