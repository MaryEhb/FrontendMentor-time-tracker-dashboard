/*Variables*/
let data = [];

const boxs = document.querySelectorAll(".box");
const options = document.querySelectorAll(".options button");

/*Functions*/

//Get data from json file
const getData = (action) => {
  fetch('./js/data.json')
    .then(response => response.json())
    .then(result => action(result))
    .catch(st => {
      console.log("getting data error: " + st)
    })
}

//Function called after fetching data from json
const storeAndPrevData = (result) => {
  data.push(...result)
  previewData("weekly")
}

//preview required data in its card
const previewData = (option) => {
  for (let i = 0; i <= boxs.length; i++) {
    boxs[i].querySelector(".time").innerHTML =
      data[i].timeframes[option].current + "hrs";
    boxs[i].querySelector(".sec-text").innerHTML = `last ${
      option == "daily" ? "day" : option.slice(0, -2)
    } - ${data[i].timeframes[option].previous}hrs`;
  }
};

// Function called when option clicked
const optionSelected = (e) => {
  options.forEach((option) => option.classList.remove("selected"));
  e.target.classList.add("selected");

  previewData(e.target.value);
};

/*Event Listeners*/
options.forEach((option) => option.addEventListener("click", optionSelected));

/*calling function on page load*/
getData(storeAndPrevData)
