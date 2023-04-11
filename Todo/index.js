// let note = document.querySelector(".input");

// document.querySelector(".addButton").addEventListener("click",()=>{
//     console.log("its working");
//     let p = document.createElement("p");
//     p.className = "output";
//     let n = document.createTextNode(note.value);
//     p.appendChild(n);
//     let btn = document.createElement("button");
//     btn.className = "editButton";
    



//     const cont = document.querySelector(".container");
//     cont.append(p); 
//     document.querySelector(".output").appendChild(btn);
// })


// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node)

// const element = document.getElementById("div1");
// element.appendChild(para);
const list = [];
let text = "";
const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");

/// create input, delete , and edit html elenent wrap wrap with div.item
// and then append in append in container
// before append remove element from container to avoid previously appended element and newly appended element mixup

function displayItem(isReverse = true) {
  container.innerHTML = ``;

  function listElement(e, i) {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
          <input type="text" class="item_input ${i}" id=${i} value= "" disabled >
          <button class="editButton   ${i}"  onclick="editItem(this)" >edit</button>
          <button class="deleteButton ${i}"   onclick ="deleteItem(this)" >delete</button>
          <button class="saveButton ${i}"  style="display:none"  onclick ="saveButton(this)" >save</button>
          `;
    container.appendChild(item);
    item.firstElementChild.value = e;
  }

  if (isReverse) {
    list.reverse().forEach((e, i) => {
      listElement(e, i);
    });
  } else {
    list.forEach((e, i) => {
      listElement(e, i);
    });
  }
}

/// on add button check if input field is empty or not
// if empty show alert and then return
// else push input value in list  []array
// set set input value to empty
// and then call displayItem() to display list item

addButton.addEventListener("click", function () {
  if (input.value == "") return alert("input fild is empty");
  list.push(input.value);
  input.value = "";
  displayItem();
});

// on edit remove delete and edit button
// show save button
function editItem(e) {
  const input = e.parentElement.firstElementChild;
  e.parentElement.lastElementChild.style.display = "inline";
  e.parentElement.children[2].style.display = "none";
  e.parentElement.children[1].style.display = "none";
  input.focus();
  input.removeAttribute("disabled");
}

// on save
// if edit-input is empty and user save the result the remove the element from list
//  and then call displayitem( reverse list arr = false)  to avoid
//  changinh the sequence of displayed item
function saveButton(e) {
  const index = e.className.split(" ")[1];
  list[index] = e.parentElement.firstElementChild.value;

  if (e.parentElement.firstElementChild.value == "") {
    const id = e.className.split(" ")[1];
    list.splice(id, 1);
  }
  displayItem(false);
}

// on delete
// remove the item from list array and teh call displayItem()

function deleteItem(e) {
  const id = e.className.split(" ")[1];
  list.splice(id, 1);
  displayItem();
}