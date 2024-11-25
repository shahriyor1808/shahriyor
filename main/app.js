const colors = [  'rgb(255, 99, 71)',  
    'rgb(123, 104, 238)',  
    'rgb(255, 165, 0)',  
    'rgb(34, 139, 34)',  
    'rgb(0, 191, 255)',  
    'rgb(255, 20, 147)',  
    'rgb(255, 105, 180)',  
    'rgb(144, 238, 144)',  
    'rgb(255, 69, 0)',  
    'rgb(255, 255, 0)'  ];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomnumber = getrandomnumber()
    

    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
})
function getrandomnumber() {
    return Math.floor(Math.random() * colors.length);

}