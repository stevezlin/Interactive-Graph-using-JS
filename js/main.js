console.log ("this is reading")


fetch("./data/stat.json")
    .then(response => response.json())
    .then(data => {
    console.log("Got the data!");
    console.log(data);
// TODO: Call a function to do something with this data.
});


let chart = document.querySelector("#BarChart-bar");
let height = 70;
let bar = document.createElement("div");
bar.classList.add("Bar");
bar.style.height = height + "%";
chart.appendChild(bar);
