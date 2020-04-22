//= partials/helper.js

function List(list) {

  this.list = list;
  this.buttons = document.querySelectorAll('.js-button');
  console.log('this.buttons = ', this.buttons);
  this.buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => controller(btn, listItem));
  });
}
function addElement() {
  console.log('addElement');
}
function getFirstElement(btn, listItem) {
  console.log('listItem  getFirstElement= ', listItem);

  let children = [];
  for (let i = 0; i = list.childNodes.length; i++) {
    console.log('i = ', i);
    //console.log("list.childNodes[i] =", list.childNodes[i]);
    //let child = list.childNodes[i];
    //
    //if (child.nodeType != 1){
    //  continue;
    //}
    //list.childNodes[i].style.color = 'red';
    //children += list.childNodes[i];
  }
  console.log("children =", children);
  //let firstChild = list.firstChild;
  //console.log('firstChild = ',firstChild);
  //if (listItem.nodeType = 1) {
  //  listItem.style.color = 'red';
  //}
}
function controller(btn, listItem) {
  console.log('listItem controller = ', listItem);
  if (btn.dataset.id) {
    switch (btn.dataset.id) {
      case 'addElementToTheEnd':
        getFirstElement(listItem);
        break;

      //case value2:
      //  do2;
      //  break;
      //
      //case value3:
      //  do3;
      //  break;

      default:
        console.log("Unknown button!");
        break;
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {

  let list = document.querySelectorAll('.js-list');
  if (list.length > 0) {
    list.forEach(list => new List(listItem));
  }
});

//# sourceMappingURL=scripts-compiled.js.map