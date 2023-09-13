let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
let delBtn = document.getElementById("removeall");

// add btn disabled

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new item to List

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `<p> ${input.value} </p>
    <div class="item-btn">
    <i class="fa-solid fa-pen-to-square"></i
    ><i class="fa-solid fa-xmark"></i>
    </div>`;
    tasks.appendChild(newItem);
    input.value = "";
    addBtn.classList.remove("active");
    delBtn.classList.add("active");
  } else {
    alert("please enter a task");
    delBtn.classList.remove("active");
  }
});

// delete item from list

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

// Mark Items as Completed

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

// Remove All Items BTN

delBtn.addEventListener("click", (e) => {
  tasks.innerHTML = "";
  delBtn.classList.remove("active");
});

// Remove All Items BTN Disabled
