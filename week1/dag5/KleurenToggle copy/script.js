console.log("this is working")

const bodyElement = document.getElementById("bodyElement");

document.getElementById("menuLogo").addEventListener("click", openMenuClick);
document.getElementById("menuLogo").addEventListener("mouseover", openMenuHover);
document.getElementById("dropDown").addEventListener("mouseleave", closeMenu);

//menu open
function openMenuClick() {
    document.getElementById("dropDownUl").classList.toggle("active");
}
function openMenuHover() {
    document.getElementById("dropDownUl").classList.add("active")
}
function closeMenu() {
    document.getElementById("dropDownUl").classList.remove("active")
}
// What happens on click

document.getElementById("menuPoint").addEventListener("click", dropDownMenu)
document.getElementById("redPoint").addEventListener("click", dropDownRed)
document.getElementById("orangePoint").addEventListener("click", dropDownOrange)
document.getElementById("purplePoint").addEventListener("click", dropDownPurple)
document.getElementById("greenPoint").addEventListener("click", dropDownGreen)

function dropDownMenu() {
    document.getElementById("bodyElement").className = "menu";
    document.getElementById("dropDownUl").classList.toggle("active");
    document.getElementById("textScreen").innerHTML = "Home";
}
function dropDownRed() {
    document.getElementById("bodyElement").className = "red";
    document.getElementById("dropDownUl").classList.toggle("active");
    document.getElementById("textScreen").innerHTML = "Red";
}
    function dropDownOrange() {
    document.getElementById("bodyElement").className = "orange";
    document.getElementById("dropDownUl").classList.toggle("active");
    document.getElementById("textScreen").innerHTML = "Orange";
}
function dropDownPurple() {
    document.getElementById("bodyElement").className = "purple";
    document.getElementById("dropDownUl").classList.toggle("active");
    document.getElementById("textScreen").innerHTML = "Purple";
}
function dropDownGreen() {
    document.getElementById("bodyElement").className = "green";
    document.getElementById("dropDownUl").classList.toggle("active");
    document.getElementById("textScreen").innerHTML = "Green";
}

//what happens by mouseover
document.getElementById("dropDownMenu").addEventListener("mouseover", mouseOverMenu);
function mouseOverMenu() {
    bodyElement.style.background = "grey";
}
document.getElementById("dropDownMenu").addEventListener("mouseout", mouseOutMenu);
function mouseOutMenu() {
    bodyElement.removeAttribute("style")  ;
}

document.getElementById("dropDownRed").addEventListener("mouseover", mouseOverRed);
function mouseOverRed() {
    bodyElement.style.background = "red";
}
document.getElementById("dropDownRed").addEventListener("mouseout", mouseOutRed);
function mouseOutRed() {
    bodyElement.removeAttribute("style")  ;
}

document.getElementById("dropDownOrange").addEventListener("mouseover", mouseOverOrange);
function mouseOverOrange() {
    bodyElement.style.background = "orange";
}
document.getElementById("dropDownOrange").addEventListener("mouseout", mouseOutOrange);
function mouseOutOrange() {
    bodyElement.removeAttribute("style")  ;
}

document.getElementById("dropDownPurple").addEventListener("mouseover", mouseOverPurple);
function mouseOverPurple() {
    bodyElement.style.background = "purple";
}
document.getElementById("dropDownPurple").addEventListener("mouseout", mouseOutPurple);
function mouseOutPurple() {
    bodyElement.removeAttribute("style")  ;
}
document.getElementById("dropDownGreen").addEventListener("mouseover", mouseOverGreen);
function mouseOverGreen() {
    bodyElement.style.background = "green";
}
document.getElementById("dropDownGreen").addEventListener("mouseout", mouseOutGreen);
function mouseOutGreen() {
    bodyElement.removeAttribute("style")  ;
}

//Key pressed

document.addEventListener("keydown", event1)
    function event1() {
    if ( event.keyCode === 49) {
        document.getElementById("bodyElement").className = "menu";
        document.getElementById("textScreen").innerHTML = "Home";
    } else if ( event.keyCode === 50) {
        document.getElementById("bodyElement").className = "red";  
        document.getElementById("textScreen").innerHTML = "Red"; 
    } else if ( event.keyCode === 51) {
    document.getElementById("bodyElement").className = "orange";  
    document.getElementById("textScreen").innerHTML = "Orange"; 
    } else if ( event.keyCode === 52) {
        document.getElementById("bodyElement").className = "purple";  
        document.getElementById("textScreen").innerHTML = "Purple"; 
    } else if ( event.keyCode === 53) {
        document.getElementById("bodyElement").className = "green";  
        document.getElementById("textScreen").innerHTML = "Green";
    };
};