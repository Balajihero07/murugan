document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var imageUrl;
      switch (num) {
        case 1:
          imageUrl = "birthdaycard/birthdaycard01.jpg";
          document.getElementById("discount").innerHTML = "₹9";
          document.getElementById("orginalamount").innerHTML = "₹7";
          document.getElementById("cardno").innerHTML = "card no:  cdb-01";
          document.getElementById("inputcardno").value = "cdb-01";
  
          break;
        case 2:
          imageUrl = "birthdaycard/birthdaycard02.jpg";
          document.getElementById("discount").innerHTML = "₹15";
          document.getElementById("orginalamount").innerHTML = "₹9";
          document.getElementById("cardno").innerHTML = "card no:  cdb-02";
          document.getElementById("inputcardno").value = "cdb-02";
          break;
        case 3:
          imageUrl = "birthdaycard/birthdaycard03.png";
          document.getElementById("discount").innerHTML = "₹7";
          document.getElementById("orginalamount").innerHTML = "₹5";
          document.getElementById("cardno").innerHTML = "card no:  cdb-03";
          document.getElementById("inputcardno").value = "cdb-03";
          break;
        case 4:
          imageUrl = "birthdaycard/birthdaycard04.jpg";
          document.getElementById("discount").innerHTML = "₹8";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdb-04";
          document.getElementById("inputcardno").value = "cdb-04";
          break;
        case 5:
          imageUrl = "birthdaycard/birthdaycard05.webp";
          document.getElementById("discount").innerHTML = "₹6";
          document.getElementById("orginalamount").innerHTML = "₹4";
          document.getElementById("cardno").innerHTML = "card no:  cdb-05";
          document.getElementById("inputcardno").value = "cdb-05";
          break;
        case 6:
          imageUrl = "birthdaycard/birthdaycard06.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-06";
          document.getElementById("inputcardno").value = "cdb-06";
          break;
        case 7:
          imageUrl = "birthdaycard/birthdaycard07.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-07";
          document.getElementById("inputcardno").value = "cdb-07";
          break;
        case 8:
          imageUrl = "birthdaycard/birthdaycard08.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-08";
          document.getElementById("inputcardno").value = "cdb-08";
          break;
        case 9:
          imageUrl = "birthdaycard/birthdaycard09.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-09";
          document.getElementById("inputcardno").value = "cdb-09";
          break;
        case 10:
          imageUrl = "birthdaycard/birthdaycard10.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-10";
          document.getElementById("inputcardno").value = "cdb-10";
          break;
        case 11:
          imageUrl = "birthdaycard/birthdaycard11.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-11";
          document.getElementById("inputcardno").value = "cdb-11";
          break;
        case 12:
          imageUrl = "birthdaycard/birtdaycard12.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-12";
          document.getElementById("inputcardno").value = "cdb-12";
          break;
        case 13:
          imageUrl = "birthdaycard/birthdaycard13.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-13";
          document.getElementById("inputcardno").value = "cdb-13";
          break;
        case 14:
          imageUrl = "birthdaycard/birthdaycard14.jpg";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-14";
          document.getElementById("inputcardno").value = "cdb-14";
          break;
        case 15:
          imageUrl = "birthdaycard/birthdaycard.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-15";
          document.getElementById("inputcardno").value = "cdb-15";
          break;
        case 16:
          imageUrl = "birthdaycard/card3.webp";
          document.getElementById("discount").innerHTML = "₹12";
          document.getElementById("orginalamount").innerHTML = "₹8";
          document.getElementById("cardno").innerHTML = "card no:  cdb-16";
          document.getElementById("inputcardno").value = "cdb-16";
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
        //Geting a detials in brithday order from
        document.getElementById('brithdayform').addEventListener('submit', async (e) => {
          e.preventDefault();
           //database schema
          const orderData = {
              title: document.getElementById('title').value,
              venue: document.getElementById('venue').value,
              additionalinformation: document.getElementById('additionalinformation').value,
              noofcard: document.getElementById('noofcard').value,
              mobileno: document.getElementById('mobileno').value,
              inputcardno: document.getElementById('inputcardno').value,
              date: document.getElementById('date').value,
              brithdayname: document.getElementById('brithdayname').value,
              times: document.getElementById('times').value,
          };
        
          try {
              const token = localStorage.getItem('token');
              if (!token) {
                  alert('You are not logged in. Please log in and try again.');
                  window.location.href = 'login.html';
                  return;
              }
            //fetching the details in brithdayorder 
              const response = await fetch('https://murugan-yram.onrender.com/api/auth/brithdayorder', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'x-auth-token': token,
                  },
                  body: JSON.stringify(orderData),
              });
        
              const data = await response.json();
               //Notification of above the form is above the not filled geting error 
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