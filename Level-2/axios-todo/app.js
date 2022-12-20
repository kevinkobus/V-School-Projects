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
    container.className = "todoItemList";

    const listItem = document.createElement("div");
    listItem.textContent = `ToDo: ${data[i].title}`;
    container.appendChild(listItem);
    listItem.setAttribute("id", "todoItem");

    const descrip = document.createElement("div");
    descrip.textContent = `Description: ${data[i].description}`;
    container.appendChild(descrip);
    descrip.setAttribute("id", "todoDescrip");

    const price = document.createElement("div");
    price.textContent = `Price: $${data[i].price}`;
    container.appendChild(price);
    price.setAttribute("id", "todoPrice");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    container.appendChild(checkBox);
    checkBox.setAttribute("id", "todoCheckBox");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    container.appendChild(deleteBtn);
    deleteBtn.setAttribute("id", "todoDeleteBtn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    container.appendChild(editBtn);
    editBtn.setAttribute("id", "todoEditBtn");

    if (data[i].completed) {
      checkBox.checked = true;
      listItem.style.textDecoration = "line-through";
    } else if (data[i].completed) {
      checkBox.checked = false;
      listItem.style.textDecoration = "none";
    }

    // checkbox eventlistener
    checkBox.addEventListener("click", (e) => {
      if (checkBox.checked) {
        axios
          .put("https://api.vschool.io/kevinkobus/todo/" + data[i]._id, {
            completed: false,
          })
          .then(getTodos())
          .catch((error) => console.log(error));
      } else if (!checkBox.checked) {
        axios
          .put("https://api.vschool.io/kevinkobus/todo/" + data[i]._id, {
            completed: true,
          })
          .then(getTodos())
          .catch((error) => console.log(error));
      }
    });

    //   Delete button which does a delete request
    deleteBtn.addEventListener("click", (e) => {
      axios
        .delete("https://api.vschool.io/kevinkobus/todo/" + data[i]._id)
        .then(getTodos())
        .catch((error) => console.log(error));
    });

    // Edit button which does a put request
    //   editBtn.addEventListener("click", (e) => {
    //     console.log(`${data[i].title} has been edited`);

    //     const editListItem = document.createElement("input");
    //     listItem.appendChild(editListItem);
    //     editTodo.value = `${data[i].title}`;

    //     const editDescrip = document.createElement("input");
    //     descrip.appendChild(editDescrip);
    //     editDescrip.value = `${data[i].description}`;

    //     const editPrice = document.createElement("input");
    //     price.appendChild(editPrice);
    //     editPrice.value = `${data[i].price}`;

    //     //editSubmit button
    //     const editSubmitBtn = document.createElement("button");
    //     listItem.append(editSubmitBtn);
    //     editSubmitBtn.textContent = "Submit Edit";

    //     editSubmitBtn.addEventListener("click", function (e) {
    //       console.log(`${data[i].title} has been edited`);

    //       // edited list items
    //       const edits = {
    //         title: editListItem.value,
    //         price: editPrice.value,
    //         description: editDescrip.value,
    //         completed: editCompleted.value,

    //       };
    //       axios
    //         .put(`https://api.vschool.io/kevinkobus/todo/${data[i]._id}`, edits)
    //         .then((response) => getTodos())
    //         .catch((error) => console.log(error));
    //     });
    //   });
  }
}

getTodos();

// Takes form inputs and puts them on DOM with a post request
const todoForm = document["todo-form"];

todoForm.addEventListener("submit", (e) => {
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
