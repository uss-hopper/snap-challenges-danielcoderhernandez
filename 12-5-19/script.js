

const onPageLoad = () => {
	axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) => {
		let breeds = data.message;
		let cards = '';
		for(let breed in breeds) {
			cards = cards + '<div>' + breed + '</div>';
		}
		let html = document.getElementById("target");
		html.innerHTML = cards;
	});
};



// axios.get (url[, config])

// axios.get ({
// 	method: 'get',
// 	url: 'https://dog.ceo/dog-api/breeds-list',
// 	responseType: 'stream'
// })
// 	.then(function (response) {
// 		response.data.pipe(fs.createWriteStream('doglist'))
// });

// const axios = require('axios').default;

// const onPageLoad = () => {
// 	axios.request ({
// 		url: '/breeds/list/all',
// 		method: 'get',
// 		baseURL: 'https://dog.ceo/dog-api/'
// 	})
// };

// const axios = require('axios');

// axios.request ({
// 	url: '/breeds/list/all',
// 	method: 'get',
// 	baseURL: 'https://dog.ceo/dog-api/'
// });