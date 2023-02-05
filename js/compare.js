function compareCars() {
  const items = document.querySelectorAll("input[type=checkbox]");
  console.log("teste");
  let checkedItems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log("items", checkedItems);
      checkedItems.push(items[i]);
    }
  }

  if (checkedItems.length >= 2) {
  }
}

const abrirModal = () => {
  const modal = document.getElementById("modal");

  modal.classList.add("abrir");
  compareCars();

  modal.addEventListener("click", (event) => {
    if (event.target.id == "fechar" || event.target.id == "modal") {
      modal.classList.remove("abrir");
    }
  });
};
