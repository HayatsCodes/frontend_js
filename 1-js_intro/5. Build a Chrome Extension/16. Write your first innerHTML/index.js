// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>" + "Buy" + "</button>"

function buy() {
    console.log("Buy!")
}