/************************** Hexadecimal Generator *********************/
let wrapper = document.querySelector(".wrapper");
let generatorBtn = document.querySelector("button");
let input = document.querySelector(".number");

// creating the function that creates a random hex color
const colorGenerator = () => {
  let result = "#";
  let letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += letters[Math.floor(Math.random() * 16)];
  }
  return result;
};
// testing if the function works
// console.log(colorGenerator());

// here are the five default color boxes
for (let i = 0; i < 5; i++) {
  let theColor = colorGenerator();

  // declaring a new color variable so that it stays the same
  let color = theColor;

  // creating the color box
  let box = document.createElement("div");
  box.style.backgroundColor = color;
  box.style.height = "120px";
  box.textContent = color;
  wrapper.appendChild(box);

  // creating the copy-button
  let copy = document.createElement("button");
  copy.style.float = "right";
  copy.textContent = "Copy";
  copy.style.fontSize = "12px";
  box.appendChild(copy);
  copy.addEventListener("click", function() {
    // creating the function that copies the color to clipboard
    const el = document.createElement("textarea");
    el.value = color;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  });
}
// creating the function that creates the new colors
const newColors = function() {
  // clearing the page from the default colors
  wrapper.innerHTML = "";

  // getting the users value from the input-field
  let value = input.value;
  for (let i = 0; i < value; i++) {
    var theColor = colorGenerator();

    // declaring a new color variable so that it stays the same
    let color = theColor;

    // creating the color box
    let box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.height = "120px";
    box.textContent = color;
    wrapper.appendChild(box);

    // creating the copy-button
    let copy = document.createElement("button");
    copy.setAttribute("id", "tooltip");
    copy.style.float = "right";
    copy.textContent = "Copy";
    copy.style.fontSize = "12px";
    box.appendChild(copy);

    // creating the function that copies the color to clipboard
    copy.addEventListener("click", function() {
      const el = document.createElement("textarea");
      el.value = color;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
  }
};
// finally using the newColors function when the generator-button is clicked
generatorBtn.addEventListener("click", newColors);
