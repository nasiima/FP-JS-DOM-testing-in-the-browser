
document.getElementById("mydiv").onclick = click;
document.getElementById("mydiv").onmouseleave= mouseleave;

// If a user clicks on the h1 tag, the background should change colour, if they move their mouse out of the space the background should return to the original colour.

function click () {
    document.getElementById("mydiv").style.background = "blue"; 
}
function mouseleave () {
    document.getElementById("mydiv").style.background = ""; 
}

// If a user hovers over a h2 tag replace the words inside it to contain a greeting

function changeText(obj, text) {

    obj.innerText = text;
}


// If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.

function getLetter (){
    var x = document.getElementById("comment").value
     document.getElementById("output").innerHTML = x;
    console.log(x)
    
}


// If someone clicks on one of the navigation items the styling of the connecting paragraph should change to be more bold and be a larger font size. If they click again on the same navigation item, the paragraph should revert to original styling. 





function change1 () {
    var a = document.querySelector(".styleBeforeHome")
    a.classList.toggle("styleAfterHome")
    }
     
    
    function change2 () {
    var b = document.querySelector(".styleBeforeFeatures")
    b.classList.toggle("styleAfterFeatures")
    } 
    
    
    function change3 () {
    var c = document.querySelector(".styleBeforePricing")
    c.classList.toggle("styleAfterPricing")
    }
    
    


