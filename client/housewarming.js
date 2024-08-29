document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "Housewarming/House01.jpg";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cdh-01";
          document.getElementById("inputcardno").value = "cdh-01";
  
          break;
        case 2:
          imageUrl = "Housewarming/House02.jpg";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cdh-02";
          document.getElementById("inputcardno").value = "cdh-02";
          break;
        case 3:
          imageUrl = "Housewarming/House03.jpg";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cdh-03";
          document.getElementById("inputcardno").value = "cdh-03";
          break;
        case 4:
          imageUrl = "Housewarming/House04.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdh-04";
          document.getElementById("inputcardno").value = "cdh-04";
          break;
        case 5:
          imageUrl = "Housewarming/house05.jpg";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdh-05";
          document.getElementById("inputcardno").value = "cdh-05";
          break;
        case 6:
          imageUrl = "Housewarming/House06.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-06";
          document.getElementById("inputcardno").value = "cdh-06";
          break;
        case 7:
          imageUrl = "Housewarming/House07.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-07";
          document.getElementById("inputcardno").value = "cdh-07";
          break;
        case 8:
          imageUrl = "Housewarming/House08.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-08";
          document.getElementById("inputcardno").value = "cdh-08";
          break;
        case 9:
          imageUrl = "Housewarming/House09.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-09";
          document.getElementById("inputcardno").value = "cdh-09";
          break;
        case 10:
          imageUrl = "Housewarming/House10.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-10";
          document.getElementById("inputcardno").value = "cdh-10";
          break;
        case 11:
          imageUrl = "Housewarming/House11.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-11";
          document.getElementById("inputcardno").value = "cdh-11";
          break;
        case 12:
          imageUrl = "Housewarming/House12.png";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-12";
          document.getElementById("inputcardno").value = "cdh-12";
          break;
        case 13:
          imageUrl = "Housewarming/House13.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-13";
          document.getElementById("inputcardno").value = "cdh-13";
          break;
        case 14:
          imageUrl = "Housewarming/House14.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdh-14";
          document.getElementById("inputcardno").value = "cdh-14";
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
