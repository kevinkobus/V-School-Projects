// const axios = require("axios");

// Function to retrieve all todos with a get request
function getTodos() {
  axios
    .get("https://api.vschool.io/kevinkobus/todo")
    .then((response) => listTodos(response.data))
    .catch((error) => console.log(error));
}

// Function to clear the todo list from the DOM each time
function clearList() {
  const el = document.getElementById("todo-list");
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// Function to list all todos on the DOM
function listTodos(data) {
  clearList();
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div");
    document.getElementById("todo-list").appendChild(container);

    const listItem = document.createElement("div");
    const descrip = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    // how do i give the checkbox a label?

    listItem.textContent = `${data[i].title} ${data[i].price}`;
    descrip.textContent = `${data[i].description}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    if (data[i].completed) {
      checkBox.checked = true;
      listItem.style.textDecoration = "line-through";
    }

    container.appendChild(listItem);
    container.appendChild(descrip);
    container.appendChild(checkBox);
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);
  }

  checkBox.addEventListener("click", function (e) {
    if (!checkBox.checked) {
      listItem.style.textDecoration = "none";
      axios
        .put(`https://api.vschool.io/kevinkobus/todo/${data[i]._id}`, {
          completed: false,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      listItem.style.textDecoration = "line-through";
      axios
        .put(`https://api.vschool.io/kevinkobus/todo/${data[i]._id}`, {
          completed: true,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  });

  //   Delete button which does a delete request
  deleteBtn.addEventListener("click", (e) => {
    console.log(`${data[i].title} has been deleted`);
    axios
      .delete(`https://api.vschool.io/kevinkobus/todo/${data[i]._id}`)
      .then((response) => getTodos())
      .catch((error) => console.log(error));
  });
  // Edit button which does a put request
  editBtn.addEventListener("click", (e) => {
    console.log(`${data[i].title} has been edited`);

    const editTodo = document.createElement("input");
    listItem.appendChild(editTodo);
    editTodo.value = `${data[i].title}`;

    const editDescrip = document.createElement("input");
    listItem.appendChild(editDescrip);
    editDescrip.value = `${data[i].description}`;

    const editPriority = document.createElement("input");
    listItem.appendChild(editPriority);
    editPriority.value = `${data[i].price}`;

    //editSubmit button
    const editSubmitBtn = document.createElement("button");
    listItem.append(editSubmitBtn);
    editSubmitBtn.textContent = "Submit Edit";

    editSubmitBtn.addEventListener("click", function (e) {
      console.log(`pushed editSubmit button for ${data[i].title}`);

      // edited list items
      const edits = {
        title: editTodo.value,
        price: editPriority.value,
        description: editDescrip.value,
      };
      axios
        .put(`https://api.vschool.io/kevinkobus/todo/${data[i]._id}`, edits)
        .then((response) => getTodos())
        .catch((error) => console.log(error));
    });
  });
}

getTodos();

// Takes form inputs and puts them on DOM with a post request
const todoForm = document["todo-form"];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //   new list items
  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
  };

  //   clear form
  todoForm.title.value = "";
  todoForm.description.value = "";
  todoForm.price.value = "";

  axios
    .post("https://api.vschool.io/kevinkobus/todo", newTodo)
    .then((response) => getTodos())
    .catch((err) => console.log(err));
});
