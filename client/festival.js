document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "Festival/Festival01.jpg";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cdf-01";
          document.getElementById("inputcardno").value = "cdf-01";
  
          break;
        case 2:
          imageUrl = "Festival/Festival02.jpg";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cdf-02";
          document.getElementById("inputcardno").value = "cdf-02";
          break;
        case 3:
          imageUrl = "Festival/Festival03.jpg";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cdf-03";
          document.getElementById("inputcardno").value = "cdf-03";
          break;
        case 4:
          imageUrl = "Festival/Festival04.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdf-04";
          document.getElementById("inputcardno").value = "cdf-04";
          break;
        case 5:
          imageUrl = "Festival/Festival05.jpg";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdf-05";
          document.getElementById("inputcardno").value = "cdf-05";
          break;
        case 6:
          imageUrl = "Festival/Festival06.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-06";
          document.getElementById("inputcardno").value = "cdf-06";
          break;
        case 7:
          imageUrl = "Festival/Festival07.png";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-07";
          document.getElementById("inputcardno").value = "cdf-07";
          break;
        case 8:
          imageUrl = "Festival/Festival08.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-08";
          document.getElementById("inputcardno").value = "cdf-08";
          break;
        case 9:
          imageUrl = "Festival/Festival09.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-09";
          document.getElementById("inputcardno").value = "cdf-09";
          break;
        case 10:
          imageUrl = "Festival/Festival10.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-10";
          document.getElementById("inputcardno").value = "cdf-10";
          break;
        case 11:
          imageUrl = "Festival/graduation.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-11";
          document.getElementById("inputcardno").value = "cdf-11";
          break;
        case 12:
          imageUrl = "Festival/rehearsal.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdf-12";
          document.getElementById("inputcardno").value = "cdf-12";
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
