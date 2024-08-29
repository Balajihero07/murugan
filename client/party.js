document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "party/Alumni01.jpeg";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cdp-01";
          document.getElementById("inputcardno").value = "cdp-01";
  
          break;
        case 2:
          imageUrl = "party/Alumni02.jpg";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cdp-02";
          document.getElementById("inputcardno").value = "cdp-02";
          break;
        case 3:
          imageUrl = "party/Annual01.jpg";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cdp-03";
          document.getElementById("inputcardno").value = "cdp-03";
          break;
        case 4:
          imageUrl = "party/Annual02.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdp-04";
          document.getElementById("inputcardno").value = "cdp-04";
          break;
        case 5:
          imageUrl = "party/Annual03.jpg";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdp-05";
          document.getElementById("inputcardno").value = "cdp-05";
          break;
        case 6:
          imageUrl = "party/Bachlore01.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-06";
          document.getElementById("inputcardno").value = "cdp-06";
          break;
        case 7:
          imageUrl = "party/Bachlore02.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-07";
          document.getElementById("inputcardno").value = "cdp-07";
          break;
        case 8:
          imageUrl = "party/Bachlore03.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-08";
          document.getElementById("inputcardno").value = "cdp-08";
          break;
        case 9:
          imageUrl = "party/Bachlore04.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-09";
          document.getElementById("inputcardno").value = "cdp-09";
          break;
        case 10:
          imageUrl = "party/farewell01.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-10";
          document.getElementById("inputcardno").value = "cdp-10";
          break;
        case 11:
          imageUrl = "party/farewell02.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-11";
          document.getElementById("inputcardno").value = "cdp-11";
          break;
        case 12:
          imageUrl = "party/farewell03.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-12";
          document.getElementById("inputcardno").value = "cdp-12";
          break;
        case 13:
          imageUrl = "party/farewell04.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdp-13";
          document.getElementById("inputcardno").value = "cdp-13";
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
