document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "grandopening/Grand.webp";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cd-015";
          document.getElementById("inputcardno").value = "cd-015";
  
          break;
        case 2:
          imageUrl = "grandopening/Grandopen01.webp";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cd-016";
          document.getElementById("inputcardno").value = "cd-016";
          break;
        case 3:
          imageUrl = "grandopening/Grandopen02.jpg";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cd-017";
          document.getElementById("inputcardno").value = "cd-017";
          break;
        case 4:
          imageUrl = "grandopening/Grandopen03.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cd-018";
          document.getElementById("inputcardno").value = "cd-018";
          break;
        case 5:
          imageUrl = "grandopening/Grandopen04.jpg";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cd-019";
          document.getElementById("inputcardno").value = "cd-019";
          break;
        case 6:
          imageUrl = "grandopening/Grandopen05.jpeg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-020";
          document.getElementById("inputcardno").value = "cd-020";
          break;
        case 7:
          imageUrl = "grandopening/Grandopen06.png";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-021";
          document.getElementById("inputcardno").value = "cd-021";
          break;
        case 8:
          imageUrl = "grandopening/Grandopen07.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-022";
          document.getElementById("inputcardno").value = "cd-022";
          break;
        case 9:
          imageUrl = "grandopening/Grandopen08.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-023";
          document.getElementById("inputcardno").value = "cd-023";
          break;
        case 10:
          imageUrl = "grandopening/Grandopen09.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-024";
          document.getElementById("inputcardno").value = "cd-024";
          break;
        case 11:
          imageUrl = "grandopening/Grandopen10.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-25";
          document.getElementById("inputcardno").value = "cd-025";
          break;
        case 12:
          imageUrl = "grandopening/Grandopen11.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-026";
          document.getElementById("inputcardno").value = "cd-026";
          break;
        case 13:
          imageUrl = "grandopening/Grandopen12.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cd-027";
          document.getElementById("inputcardno").value = "cd-027";
          break;
        default:
          console.log("Invalid image number");
          return; // Exit the function if the number is invalid
      }
  
      var imageElement = document.getElementById("changeimage");
      imageElement.src = imageUrl;
    }
  
    // Call the imageChange function with the extracted image number
    if (!isNaN(imageNumber)) {
      imageChange(imageNumber);
    } else {
      console.log("Invalid image number");
    }
  });
  var modal = document.getElementById("myModal");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("changeimage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
  function yourorder(){
      alert("Your order is sucessfuly recevied");
  }
