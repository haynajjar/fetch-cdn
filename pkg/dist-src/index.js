const options = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};
export default function fetchCDN(url) {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(response => {
      if (response.ok) {
        response.blob().then(blob => {
          resolve(URL.createObjectURL(blob));
        });
      } else {
        reject(`Response error, status: ${response.status}`);
      }
    }).catch(error => {
      reject(`Problem while fetching ${url} , ${error.message}`);
    });
  });
}