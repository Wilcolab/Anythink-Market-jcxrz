var axios = require('axios');

var config = {
    method: 'post',
    url: 'http://localhost:3000/api/items',
    headers: { 
      'Content-Type': 'application/json', 
      'X-Requested-With': 'XMLHttpRequest', 
    },
};

for(let i = 0; i < 101; i++) {
   
      config.data.user = {
                email: `john${i}@jacob.com`,
                password: "1234678",
                username: `john${i}`
            }
        
      
}


// var data = JSON.stringify({
//   "item": {
//     "title": "How to train your dragon",
//     "description": "Ever wonder how?",
//     "body": "Very carefully.",
//     "tagList": [
//       "dragons",
//       "training"
//     ]
//   }
// });

// var config = {
//   method: 'post',
//   url: 'http://localhost:3000/api/items',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'X-Requested-With': 'XMLHttpRequest', 
//     'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGYyMzAyOTQ4NTI5MDA0ODQ0YmYyZCIsInVzZXJuYW1lIjoiZWl0YW5ncnVuc2VpZCIsImV4cCI6MTY1NDYwNjQ4OSwiaWF0IjoxNjQ5NDIyNDg5fQ.9WWPAYK0gzbp8TN8UBGMeDbrSUb01sqh1jnG6pbfGqY'
//   },
//   data : data
// };

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
