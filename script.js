window.addEventListener("load", function () {
  "use strict";
  function Number() {
    const checkBtn = document.querySelectorAll(".todo-item");
    const x = checkBtn.length;
    const numberOfTodoItem = document.querySelector(".active-item");
    
    return (numberOfTodoItem.innerHTML = x);
  }

  function removeTodoItem() {
    const removeBtn = document.querySelectorAll(".remove-todo");
    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener("click", function () {
        const item2remove = this.parentNode;
        item2remove.remove();
        Number();
      });
    }
  }

  function checkTodoItem() {
    const checkBtn = document.querySelectorAll("input[type=checkbox]:not(.input-check)");

    for (let i = 0; i < checkBtn.length; i++) {

      checkBtn[i].addEventListener("click", function () {

        const clickedCheckBox = this;

        const todo2Check = clickedCheckBox.nextElementSibling;
        const trash = clickedCheckBox.parentElement.nextElementSibling.children[0];

        if (clickedCheckBox.checked) {
          todo2Check.classList.add("check");
          trash.classList.remove("hide")
        } else {
          todo2Check.classList.remove("check");
          trash.classList.add("hide")
        }
      });
    }
    const checkInputBtn = document.querySelector(".input-check");


    checkInputBtn.addEventListener("click", function () {

        // const clickedCheckBox = this;

        const todo2Check = checkInputBtn.nextElementSibling;
        

        if (checkInputBtn.checked) {
          todo2Check.classList.add("check");
          
        } else {
          todo2Check.classList.remove("check");
        
        }
      });
  }

  function darkTheme() {
    document.documentElement.style.setProperty(
      "--Very-Dark-Blue",
      "hsl(0, 0%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--Very-Dark-Desaturated-Blue",
      "white"
    );
    document.documentElement.style.setProperty(
      "--Light-Grayish-Blue",
      "hsl(235, 19%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--Active",
      "hsl(220, 85%, 21%)"
    );
    document.documentElement.style.setProperty(
      "--Border-bottom",
      "rgb(37, 39, 60, 0.2)"
    );
    
  }
  function lightTheme() {

    document.documentElement.style.setProperty(
      "--Very-Dark-Blue",
      "hsl(235, 21%, 11%)"
    );
    document.documentElement.style.setProperty(
      "--Very-Dark-Desaturated-Blue",
      "hsl(235, 24%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--Light-Grayish-Blue",
      "hsl(234, 39%, 85%)"
    );
    document.documentElement.style.setProperty(
      "--Active",
      "hsl(220, 98%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--Border-bottom",
      "rgb(202, 205, 232, 0.2)"
    );

  }

  removeTodoItem();
  checkTodoItem();
  Number();

  document.addEventListener("keydown", function (evt) {
    const TodoInput = document.querySelector("input[type=text]");
    const ToDoValue = TodoInput.value;
    const todoList = document.getElementById("todo-list");
    const TodoInputCheckbox = document.querySelector(
      "form>input[type=checkbox]"
    );

    if (evt.key === "Enter") {
      evt.preventDefault();

      if (ToDoValue === "") {
        alert("Add Todo description");
      } else {
        if (TodoInputCheckbox.checked) {
          const todoItem = todo(ToDoValue);
          const todoDesc = todoItem.children[0].children[1];
          const TodoCheck = todoItem.children[0].children[0];
          TodoCheck.setAttribute("checked", "checked");
          todoDesc.classList.add("check");

          todoList.prepend(todoItem);
        } else {
          const todoItem = todo(ToDoValue);
          todoList.prepend(todoItem);
        }
      }

      document.querySelector("form").reset();

      TodoInput.classList.remove("check");
    }

    function todo(myTodo) {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";

      const div1 = document.createElement("div");

      const check4Todo = document.createElement("input");
      check4Todo.setAttribute("type", "checkbox");

      div1.appendChild(check4Todo);

      const todoPara = document.createElement("p");
      todoPara.innerHTML= myTodo;
      div1.appendChild(todoPara);

      const div2 = document.createElement("div");
      div2.className = "remove-todo";

      const removeTodoIcon = document.createElement("i");
      removeTodoIcon.className = " bi bi-trash3-fill hide";
      div2.appendChild(removeTodoIcon);

      todoItem.appendChild(div1);
      todoItem.appendChild(div2);

      return todoItem;
    }

    removeTodoItem();
    checkTodoItem();
    Number();
  });

  const clearCompleted = document.querySelector(
    ".display-ctrl div:last-child p"
  );
  clearCompleted.addEventListener("click", function () {
    const checkBtn = document.querySelectorAll(".todo-item");

    for (let i = 0; i < checkBtn.length; i++) {
      const checkedTodoItem = checkBtn[i].children[0].children[0];
      if (checkedTodoItem.checked) {
        checkedTodoItem.parentElement.parentElement.remove();
      }
    }
    Number();
  });

  const todoNav = document.querySelectorAll(".todo-nav p");
  for (let i = 0; i < todoNav.length; i++) {
    todoNav[i].addEventListener("click", function () {
      for (let i = 0; i < todoNav.length; i++) {
        todoNav[i].classList.remove("active");
        this.classList.add("active");

        if (this.innerHTML == "Completed") {
          const checkBtn = document.querySelectorAll(".todo-item");

          for (let i = 0; i < checkBtn.length; i++) {
            const checkedTodoItem = checkBtn[i].children[0].children[0];

            if (checkedTodoItem.checked) {
              checkedTodoItem.parentElement.parentElement.classList.remove(
                "hide"
              );
            } else {
              checkedTodoItem.parentElement.parentElement.classList.add("hide");
            }
          }
        } else if (this.innerHTML == "Active") {
          const checkBtn = document.querySelectorAll(".todo-item");

          for (let i = 0; i < checkBtn.length; i++) {
            const checkedTodoItem = checkBtn[i].children[0].children[0];

            if (checkedTodoItem.checked) {
              checkedTodoItem.parentElement.parentElement.classList.add("hide");
            } else {
              checkedTodoItem.parentElement.parentElement.classList.remove(
                "hide"
              );
            }
          }
        } else if (this.innerHTML == "All") {
          const checkBtn = document.querySelectorAll(".todo-item");

          for (let i = 0; i < checkBtn.length; i++) {
            checkBtn[i].classList.remove("hide");
          }
        }
      }
    });
  }

  if (window.innerWidth >= 1024) {
    document.querySelector(".small-screen").className = "hide";

    const themeSwitch = document.querySelector(".theme-switch");

    themeSwitch.addEventListener("click", function () {
      const switchSrc = themeSwitch.getAttribute("src");

      if (switchSrc == "images/icon-sun.svg") {
        themeSwitch.setAttribute("src", "images/icon-moon.svg");

        document.body.style.backgroundImage =
          "url(images/bg-desktop-light.jpg)";

        darkTheme()
      } else {
        themeSwitch.setAttribute("src", "images/icon-sun.svg");

        document.body.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";

        lightTheme()
      }
    });
  }
  if (window.innerWidth < 1024) {
    document.querySelector(".large-screen").className = "hide";

    const themeSwitch = document.querySelector(".theme-switch");

    themeSwitch.addEventListener("click", function () {
      const switchSrc = themeSwitch.getAttribute("src");

      if (switchSrc == "images/icon-sun.svg") {
        themeSwitch.setAttribute("src", "images/icon-moon.svg");

        document.body.style.backgroundImage = "url(images/bg-mobile-light.jpg)";

        darkTheme()
      } else {
        themeSwitch.setAttribute("src", "images/icon-sun.svg");

        document.body.style.backgroundImage = "url(images/bg-mobile-dark.jpg)";

        lightTheme()
      }
    });
  }
});
