var Discogs = require('disconnect');

var db = new Discogs().database();
db.getRelease(176126, function(err, data){
	console.log(data);
});


var dis = new Discogs({userToken: 'fzhNyTQoQjboVqTyQUeXsDTVUyVucSXpVDViwqVV'});

// Authenticate by consumer key and secret
var dis = new Discogs({
	consumerKey: 'OybxAqyJeOwAFtZmqIGa', 
	consumerSecret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
});

var db = new Discogs(accessData).database();
db.getRelease(176126, function(err, data){
	var url = data.images[0].resource_url;
	db.getImage(url, function(err, data, rateLimit){
		// Data contains the raw binary image data
		require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
			console.log('Image saved!');
		});
	});
});














// class Fetch {
//     async getData(input) {
//       const myKey = "OybxAqyJeOwAFtZmqIGa";
//       const mySecret = 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
//       const response = await fetch(
//         `https://api.discogs.com/database/search/q=${input}&key=${myKey}&secret=${mySecret}`
//       );
  
//       const data = await response.json();
  
//       console.log(data);
  
//       return data;
//     }
//   }


//   &key=foo123&secret=bar456

//   curl "https://api.discogs.com/releases/2848009" -H "Authorization: Discogs key=OybxAqyJeOwAFtZmqIGa, secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy"


//   https://api.discogs.com/releases/2848009&key=OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy

//   https://api.discogs.com/database/search?q=Nirvana&key=OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy

// fetch('https://api.discogs.com/database/search?q=Amy-Winehouse&key=OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy')
// .then(response => response.json())
// .then(data => console.log(data));




// // Authenticate by user token
// var dis = new Discogs({userToken: 'fzhNyTQoQjboVqTyQUeXsDTVUyVucSXpVDViwqVV'});

// // Authenticate by consumer key and secret
// var dis = new Discogs({
// 	consumerKey: 'OybxAqyJeOwAFtZmqIGa', 
// 	consumerSecret: 'YzAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
// });

// var db = new Discogs(accessData).database();
// db.getRelease(176126, function(err, data){
// 	var url = data.images[0].resource_url;
// 	db.getImage(url, function(err, data, rateLimit){
// 		// Data contains the raw binary image data
// 		require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
// 			console.log('Image saved!');
// 		});
// 	});
// });
