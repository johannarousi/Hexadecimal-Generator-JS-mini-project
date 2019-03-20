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

  // creating a function that chooses black or white font-color for the color-text so it it is visible in every color
  const blackOrWhite = () => {
    let red = color.slice(1, 3);
    let green = color.slice(3, 5);
    let blue = color.slice(5);

    let r = parseInt(red, 16);
    let g = parseInt(green, 16);
    let b = parseInt(blue, 16);

    if (r + g + b > 400) {
      return "black";
    } else {
      return "white";
    }
  };
  // creating the color box
  let box = document.createElement("div");
  box.style.backgroundColor = color;
  box.style.height = "120px";
  box.textContent = color;
  box.style.color = blackOrWhite();
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

    // creating a function that chooses black or white font-color for the color-text so it it is visible in every color
    const blackOrWhite = () => {
      let red = color.slice(1, 3);
      let green = color.slice(3, 5);
      let blue = color.slice(5);

      let r = parseInt(red, 16);
      let g = parseInt(green, 16);
      let b = parseInt(blue, 16);

      if (r + g + b > 400) {
        return "black";
      } else {
        return "white";
      }
    };
    // creating the color box
    let box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.height = "120px";
    box.textContent = color;
    box.style.color = blackOrWhite();
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
