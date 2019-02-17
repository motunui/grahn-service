import Axios from 'axios';

let axios = Axios.create({
  baseURL: '/api/'
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
