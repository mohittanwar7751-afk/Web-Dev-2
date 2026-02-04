const para =  document.createElement("p");
para.textContent = "This is a new paragraph added by JavaScript.";
console.log(para);

document.getElementById("content").appendChild(para);
document.querySelector("#content p").remove();

const image = document.createElement("img");

image.setAttribute("src","https://images.ctfassets.net/piwi0eufbb2g/4k3m7B1tegAEtCfQ3XJP13/eea1eae6fcaf7099e20cf7f41d5201b8/What_is_a_Callback_Function_in_JavaScript.jpg?w=1200&h=630");

image.setAttribute("alt","javascript");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);




setInterval(() => {
    let date = new Date();
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    const clock = document.getElementById("digi-clock");
    clock.textContent = `${hour} : ${min} : ${sec}`;
}, 1000);

