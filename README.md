
## Fetch js file from CDN

Used to load web workers from CDN/remote origin

### Installation

```sh 
$ npm install --save fetch-cdn
```

### Usage

```js
import fetchCDN from 'fetch-cdn'
// or use from cdn
// import fetchCDN from 'https://www.unpkg.com/browse/fetch-cdn@0.1.4'
async function getLocalUrl(remoteUrl){
	return await fetchCDN(remoteUrl)
}
```

### License
MIT