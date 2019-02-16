import Axios from 'axios';

export function fetchFromDB(path, setState) {
  Axios.get(`/api/${path}`)
    .then(({ data }) => {
      console.log('TCL: fetchFromDB -> data', data);
      setState(data);
    })
    .catch((err) => {
      console.log('TCL: fetchFromDB -> err', err);
    });
}
