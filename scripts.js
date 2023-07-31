const toolbarButtons = document.querySelectorAll(".toolbar-button");
const toolbarSelects = document.querySelectorAll(".toolbar-select");
const toolbarInputs = document.querySelectorAll(".toolbar-input");
const content = document.querySelector(".content");

toolbarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.getAttribute("data-command");
    document.execCommand(command, false, null);
  });
});

toolbarSelects.forEach((select) => {
  select.addEventListener("change", () => {
    const command = select.getAttribute("data-command");
    const value = select.value;
    document.execCommand(command, false, value);
  });
});

toolbarInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const command = input.getAttribute("data-command");
    const value = input.value;
    document.execCommand(command, false, value);
  });
});
