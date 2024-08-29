document.addEventListener("DOMContentLoaded", function () {
  // Extracting the image number from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const imageNumber = parseInt(urlParams.get("image"));

  // Define the imageChange function to change the image based on the provided number
  function imageChange(num) {
    var imageUrl;
    switch (num) {
      case 1:
        imageUrl = "weddingcard/weddingcard1.jpg";
        document.getElementById("discount").innerHTML = "₹10";
        document.getElementById("orginalamount").innerHTML = "₹7";
        document.getElementById("cardno").innerHTML = "card no:  cdw-001";
        document.getElementById("inputcardno").value = "cdw-001";
        break;
      case 2:
        imageUrl = "weddingcard/weddingcard2.jpg";
        document.getElementById("discount").innerHTML = "₹15";
        document.getElementById("orginalamount").innerHTML = "₹9";
        document.getElementById("cardno").innerHTML = "card no:  cdw-002";
        document.getElementById("inputcardno").value = "cdw-002";
        break;
      case 3:
        imageUrl = "weddingcard/weddingcard3.jpg";
        document.getElementById("discount").innerHTML = "₹9";
        document.getElementById("orginalamount").innerHTML = "₹5";
        document.getElementById("cardno").innerHTML = "card no:  cdw-003";
        document.getElementById("inputcardno").value = "cdw-003";
        break;
      case 4:
        imageUrl = "weddingcard/weddingcard4.jpg";
        document.getElementById("discount").innerHTML = "₹8";
        document.getElementById("orginalamount").innerHTML = "₹4";
        document.getElementById("cardno").innerHTML = "card no:  cdw-004";
        document.getElementById("inputcardno").value = "cdw-004";
        break;
      case 5:
        imageUrl = "weddingcard/weddingcard5.jpg";
        document.getElementById("discount").innerHTML = "₹9";
        document.getElementById("orginalamount").innerHTML = "₹4";
        document.getElementById("cardno").innerHTML = "card no:  cdw-005";
        document.getElementById("inputcardno").value = "cdw-005";
        break;
      case 6:
        imageUrl = "weddingcard/weddingcard6.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-006";
        document.getElementById("inputcardno").value = "cdw-006";
        break;
      case 7:
        imageUrl = "weddingcard/weddingcard7.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-007";
        document.getElementById("inputcardno").value = "cdw-007";
        break;
      case 8:
        imageUrl = "weddingcard/weddingcard8.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-008";
        document.getElementById("inputcardno").value = "cdw-008";
        break;
      case 9:
        imageUrl = "weddingcard/weddingcard9.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-009";
        document.getElementById("inputcardno").value = "cdw-009";
        break;
      case 10:
        imageUrl = "weddingcard/weddingcard10.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-010";
        document.getElementById("inputcardno").value = "cdw-010";
        break;
      case 11:
        imageUrl = "weddingcard/weddingcard11.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-011";
        document.getElementById("inputcardno").value = "cdw-011";
        break;
      case 12:
        imageUrl = "weddingcard/weddingcard12.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-012";
        document.getElementById("inputcardno").value = "cdw-012";
        break;
      case 13:
        imageUrl = "weddingcard/weddingcard13.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-013";
        document.getElementById("inputcardno").value = "cdw-013";
        break;
      case 14:
        imageUrl = "weddingcard/weddingcard14.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-014";
        document.getElementById("inputcardno").value = "cdw-014";
      case 15:
        imageUrl = "weddingcard/weddingcard15.jpg";
        document.getElementById("discount").innerHTML = "₹12";
        document.getElementById("orginalamount").innerHTML = "₹8";
        document.getElementById("cardno").innerHTML = "card no:  cdw-015";
        document.getElementById("inputcardno").value = "cdw-015";
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
function yourorder() {
  alert("Your order is sucessfuly recevied");
}
document.getElementById('weddorderForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const orderData = {
      title: document.getElementById('title').value,
      venue: document.getElementById('venue').value,
      additionalinformation: document.getElementById('additionalinformation').value,
      noofcard: document.getElementById('noofcard').value,
      mobileno: document.getElementById('mobileno').value,
      inputcardno: document.getElementById('inputcardno').value,
      date: document.getElementById('date').value,
      bridename: document.getElementById('bridename').value,
      times: document.getElementById('times').value,
      groomname: document.getElementById('groomname').value,
  };

  try {
      const token = localStorage.getItem('token');
      if (!token) {
          alert('You are not logged in. Please log in and try again.');
          window.location.href = 'login.html';
          return;
      }

      const response = await fetch('/api/auth/weddorder', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
          },
          body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
          alert('Your order is Received you want to any correction go to dashboardpage');
          document.getElementById('notification').classList.add('success');
          document.getElementById('notification').innerText = 'Order submitted successfully!';
      } else {
          document.getElementById('notification').classList.add('error');
          document.getElementById('notification').innerText = data.msg || 'Error submitting order';
      }
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('notification').classList.add('error');
      document.getElementById('notification').innerText = 'Error submitting order';
  }
});