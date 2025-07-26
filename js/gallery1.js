
const options = ["Scenting_Candles.JPG","Mulled_Wine.JPG","Festive_Christmas.JPG","ScentedCandles.JPG","CandleCollection.JPG","Floral_Indulgence.jpg","InnerCalm.jpg","Detoxifying.jpg","Water_Lily.jpg","BTG_1.JPG","BTG_2.JPG","BTG_3.JPG","BTG_4.JPG"];

function setImages()
{
	console.log("Function setImages");
	currentImages = document.getElementsByClassName("preview");
	for (i = 0; i < currentImages.length; i++) {
	    ranindex = Math.floor(Math.random() * options.length);
		console.log("Random Index", ranindex);
		randomImg = "images/" + options[ranindex];
		currentImages[i].setAttribute("src",randomImg);
		// currentImages[i].src = randomImg;
		currentImages[i].setAttribute("tabindex","0");
	}
	
}

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
	console.log("Function Update");
	document.getElementById("image").innerHTML = previewPic.alt;
	document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
	}
	
	function upDateDiv(ThisDiv){
	console.log("Function UpdateDiv");
	ThisDiv.style.color = "blue";
	ThisDiv.style.borderStyle = "dashed"; 
	ThisDiv.style.borderColor = "red";
	ThisDiv.style.borderWidth = "10px";
	ThisDiv.style.backgroundColor = "yellow";
	ThisDiv.innerHTML = "Hover over the div to change the display properties."
	}

	function unDoDiv(ThisDiv){
	console.log("Function unDoDiv");	
	ThisDiv.style.color = "#FFFFFF";
	ThisDiv.style.borderStyle = "solid"; 
	ThisDiv.style.borderColor = "black";
	ThisDiv.style.borderWidth = "5px";
	ThisDiv.style.backgroundColor = "#8e68ff";
	ThisDiv.innerHTML = "Move out of the div to restore the display properties."
	}
	
	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	console.log("Function Undo");
	const myElement = document.getElementById("image");
	myElement.style.backgroundImage = "url('')";
	myElement.innerHTML = "Hover over an image below to display here."
	}
