function compareCars() {
  const items = document.querySelectorAll("input[type=checkbox]");

  let checkedItems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      checkedItems.push(items[i]);
    }
  }

  if (checkedItems.length >= 2) {
  }
}
