document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "Engagement/Engagement01.jpeg";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cde-01";
          document.getElementById("inputcardno").value = "cde-01";
  
          break;
        case 2:
          imageUrl = "Engagement/Engagement02.jpeg";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cde-02";
          document.getElementById("inputcardno").value = "cde-02";
          break;
        case 3:
          imageUrl = "Engagement/Engagement03.avif";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cd-017";
          document.getElementById("inputcardno").value = "cd-017";
          break;
        case 4:
          imageUrl = "Engagement/Engagement04.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cde-04";
          document.getElementById("inputcardno").value = "cde-04";
          break;
        case 5:
          imageUrl = "Engagement/Engagement05.png";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cde-05";
          document.getElementById("inputcardno").value = "cde-05";
          break;
        case 6:
          imageUrl = "Engagement/Engagement06.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-06";
          document.getElementById("inputcardno").value = "cde-06";
          break;
        case 7:
          imageUrl = "Engagement/Engagement07.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-07";
          document.getElementById("inputcardno").value = "cde-07";
          break;
        case 8:
          imageUrl = "Engagement/Engagement08.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-08";
          document.getElementById("inputcardno").value = "cde-08";
          break;
        case 9:
          imageUrl = "Engagement/Engagement09.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-09";
          document.getElementById("inputcardno").value = "cde-09";
          break;
        case 10:
          imageUrl = "Engagement/Engagement10.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-10";
          document.getElementById("inputcardno").value = "cde-10";
          break;
        case 11:
          imageUrl = "Engagement/Engagement11.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-11";
          document.getElementById("inputcardno").value = "cde-11";
          break;
        case 12:
          imageUrl = "Engagement/Engagement12.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-12";
          document.getElementById("inputcardno").value = "cde-12";
          break;
        case 13:
          imageUrl = "Engagement/Engagement13.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cde-13";
          document.getElementById("inputcardno").value = "cde-13";
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
  
  document.getElementById('weddorderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const orderData = {
        title: document.getElementById('title').value,
        venue: document.getElementById('venue').value,
        additionalinformation: document.getElementById('additionalinformation').value,
        noofcard: document.getElementById('noofcards').value,
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
  
        const response = await fetch('https://murugan-yram.onrender.com/api/auth/weddorder', {
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