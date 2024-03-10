function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Sorry Request cannot be accepted due to some technical errors`);
})

const textToDisplay ="Front End Developer & UI/UX Designer.";

function displayText(index){
    if (index <= textToDisplay.length){
        document.getElementById("dynamicText").innerHTML =textToDisplay.substring(0, index);
        setTimeout(function(){
            displayText(index +1);
        
        }, 80);

    }
}
window.onload=function (){
    displayText(0);
};
