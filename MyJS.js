/*Name this external file gallery.js*/

function upDate(previewPic){
    let imageToChange=document.getElementById("image");
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
*/
    imageToChange.style.backgroundImage=`url('${previewPic.src}')`;
/*
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */  
    imageToChange.innerHTML=previewPic.alt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
*/
        let imageUndo=document.getElementById("image");
        imageUndo.style.backgroundImage='';
/*
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		imageUndo.innerHTML="Hover over an image below to display here.";
	}

    function setRandomImg(){
        options=["Cat1.jpg", "Cat2.jpg", "Cat3.jpg", "bacon.jpg", "bacon2.jpg", "bacon3.jpg"];

        curImg=document.querySelectorAll(".preview img");
        for(var i=0; i<curImg.length; i++){
            console.log("image"+i);

            randomImg=options[Math.floor(Math.random()*options.length)];
            curImg[i].src=randomImg;

            curImg[i].setAttribute("tabindex", "0");
        }
    }