const object = fetch("https://alibaraka.pythonanywhere.com/api/products/").then((res) => {
    return res.json();
}).then((datatext) => {
    console.log(datatext)
        // let data1 = "";
        // datatext.map((values) => {
        //     data1 += `
        //     <div class="card">
        //         <h1 class="name">${values.title}</h1>
        //         <img src="${values.img}" alt="Bu yerda rasm bor">
        //         <div class="text"><p>${values.description}</p></div>
        //     </div>
        //     `
        //     document.getElementsByClassName("cards").innerHTML = data1;
        // })
}).catch((err) => {
    console.log(err)
})