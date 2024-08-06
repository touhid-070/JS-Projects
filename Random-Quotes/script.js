const btn = document.getElementById("btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            this.data = data;
            let random =Math.floor(Math.random()*data.length)
            // console.log(random[0].text);
            output.innerHTML = data[random].text;
        })
})