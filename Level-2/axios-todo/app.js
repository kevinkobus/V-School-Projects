const axios = require("axios");

// Get All and put on the DOM
axios
  .get("https://api.vschool.io/kevinkobus/todo/")
  .then((response) => {
    const todoList = response.data;
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = todoList[i].title;
      document.form.appendChild(h1);
    }
  })
  .catch((error) => console.log(error));
