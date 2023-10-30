//Runs before the javascript in the html file

const navToggle = document.querySelector('.nav-toggle');
const links = docment.querySelector('.links');

navToggle.addEventListener('click', function() {
    /*console.log(links.classList.contains("random"));
    console.log(links.classList.contains('Links'));
    if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }*/
    links.classList.toggle("show-links");
})

/*Console.log prints to console 
console.log("Hello World")
console.log(23 + 98)
console.log((4 + 6 + 9) / 77)

let a = 10
console.log(a)
const max = 57
actual = max - 13
percentage = actual / max
console.log(percentage)

Creates a pop up with a message
window.alert("Hello World") */
