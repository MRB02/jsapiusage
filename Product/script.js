fetch("https://restcountries.com/v3.1/all").then((res) => {
    return res.json();
}).then((response) => {
    response.forEach((item) => {

        console.log(item.name)
    })

}).catch((err) => {
    console.log(err)
})