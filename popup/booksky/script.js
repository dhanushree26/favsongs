//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display="block"

})

//select cancel button 
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var container = document.querySelector(".container")
var addsong = document.getElementById("add-song")
var songnameinput = document.getElementById("song-name-input")
var sungbyinput = document.getElementById("sung-by-input")
var favlyricinput = document.getElementById("fav-lyric-input")

addsong.addEventListener("click",function(event){
    event.preventDefault() 
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${songnameinput.value}</h2>
    <h3>${sungbyinput.value}</h3>
    <p>${favlyricinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
})

function deletebook(event){
    event.target.parentElement.remove()
}