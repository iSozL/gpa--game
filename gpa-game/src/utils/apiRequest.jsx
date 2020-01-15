import axios from 'axios';
export default {
  fetchData(url, methods, datas, params) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://os.ncuos.com' + url,
        method: methods,
        data: datas,
        params: params
      })
        .then(res => {
          resolve(res);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};