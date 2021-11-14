/*Variables*/
const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const boxs = document.querySelectorAll(".box");
const options = document.querySelectorAll(".options button");

/*Functions*/

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
previewData("weekly");
