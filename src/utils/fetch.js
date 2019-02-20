import Axios from 'axios';

let axios = Axios.create({
  baseURL: 'http://ec2-3-95-171-215.compute-1.amazonaws.com/api/'
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
