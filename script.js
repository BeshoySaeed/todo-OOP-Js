let formSubmit = document.querySelector("#input-btn");

let TableObject = function (_inputValue) {
  this.newRow = document.createElement("tr");
  this.newTd = document.createElement("td");
  this.deleteBtn = document.createElement("button");
  this.editBtn = document.createElement("button");
  this.editBtn.className = "edit";
  this.editBtn.textContent = "Edit";

  this.inputValueClass = _inputValue;

  var thisObject = this;

  this.removeRow = function () {
    thisObject.newRow.remove();
  };

  this.deleteBtn.addEventListener("click", this.removeRow);
};

formSubmit.addEventListener("click", (e) => {
  let inputValue = document.querySelector("#input-text").value;
  let tableArea = document.querySelector("#table-row");
  e.preventDefault();

  if (inputValue == "") {
  } else {
    // inherit from table object

    let object = new TableObject(inputValue);

    object.newRow.append(object.newTd);
    object.newTd.textContent = object.inputValueClass;
    tableArea.append(object.newRow);

    // add delete btn

    object.deleteBtn.textContent = "delete";
    object.newRow.append(object.deleteBtn);

    //   add edit btn

    object.newRow.append(object.editBtn);

    let editable = false;
    object.editBtn.addEventListener("click", () => {
      if (!editable) {
        object.editBtn.textContent = "submit";
        object.newTd.contentEditable = true;
        object.newTd.focus();
        editable = true;
      } else {
        object.editBtn.textContent = "edit";
        object.newTd.contentEditable = false;
        editable = false;
      }
    });
  }
});
