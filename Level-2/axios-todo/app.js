const axios = require("axios");

// Function for getting todos from axios
function getTodos() {
axios.get("https://api.vschool.io/kevinkobus/todo")
    .then(response => postTodos(response.data))
    .catch(error => console.log(error))
}

getTodos()

// Put all on the DOM
function postTodos(data) {
for (let i = 0; i < data.length; i++) {
  const h1 = document.createElement("h1");
  h1.textContent = data[i].title;
  document.body.appendChild(h1);
}
}



// var newTodo = {
//   title: "Title here",
//   description: "Description here",
//   price: 0,
//   imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg",
//   completed: false,
// };
