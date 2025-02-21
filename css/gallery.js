/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
	document.getElementById("image").innerHTML = previewPic.alt;
	document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
	}
	
	function upDateDiv(ThisDiv){
	ThisDiv.style.color = "blue";
	ThisDiv.style.borderStyle = "dashed"; 
	ThisDiv.style.borderColor = "red";
	ThisDiv.style.borderWidth = "10px";
	ThisDiv.style.backgroundColor = "yellow";
	ThisDiv.innerHTML = "Hover over the div to change the display properties."
	}

	function unDoDiv(ThisDiv){
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
	
	const myElement = document.getElementById("image");
	myElement.style.backgroundImage = "url('')";
	myElement.innerHTML = "Hover over an image below to display here."
	
	}