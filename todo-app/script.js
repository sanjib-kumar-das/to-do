const addFrm = document.querySelector(".addFrm");
const textContent = document.querySelector(".textContent");

const ul = document.querySelector(".todos");

let addItem = (val) => {
  let el = `<li
  class="
    list-group-item
    d-flex
    justify-content-between
    align-items-center
  "
>
  <span>${val}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  ul.innerHTML += el;
};

// Event Handling on Form Submit

addFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = textContent.value;

  if (item.trim().length > 0) {
    addItem(item);
    textContent.value = "";
  }
});

// Search Item

let li = document.querySelectorAll(".list-group-item");

let searchItem = (text) => {
  li.forEach((el, i, arr) => {
    if (el.textContent.trim().toLowerCase().indexOf(text) == -1) {
      // console.log(arr);
      el.classList.add("filtered");
    } else {
      el.classList.remove("filtered");
    }
  });
};

document.addEventListener("keyup", () => {
  let searchText = document.querySelector(".searchText");
  searchItem(searchText.value.toLowerCase());
});

// Perform Deletion

ul.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.previousElementSibling);
  e.target.parentNode.remove();
});
