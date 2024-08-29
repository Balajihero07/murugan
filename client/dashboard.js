async function getUserDetails() {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('/api/auth/user-details', {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const data = await response.json();
      document.getElementById('name').textContent = `Name: ${data.user.name}`;
      document.getElementById('email').textContent = `Email: ${data.user.email}`;
      
      const ordersDiv = document.getElementById('orders');
      if (data.orders.length === 0) {
        ordersDiv.innerHTML = '<p>No orders found.</p>';
      } else {
        ordersDiv.innerHTML = data.orders.map(order => {
          const groomOrDefaultName = order.groomname || 'N/A';

          return `
          <div">
            <table border=2 width=100%>
              ${order.title ? `<tr><th>Order Title:</th><th>${order.title}</th></tr>` : ''}
              ${order.bridename ? `<tr><th>Bride Name:</th><th>${order.bridename}</th></tr>` : ''}
              ${order.housename ? `<tr><th>House Name:</th><th>${order.housename}</th></tr>` : ''}
              ${order.babyshowername ? `<tr><th>House Name:</th><th>${order.babyshowername}</th></tr>` : ''}
              ${order.festivalname ? `<tr><th>Festival Name:</th><th>${order.festivalname}</th></tr>` : ''}
              ${order.partyname ? `<tr><th>Party Name:</th><th>${order.partyname}</th></tr>` : ''}
              ${order.bridename === '' || order.brithdayname ? `<tr><th>Name:</th><th>${order.brithdayname}</th></tr>` : ''}
              ${order.groomname ? `<tr><th>Groom Name:</th><th>${groomOrDefaultName}</th></tr>` : ''}
              ${order.venue ? `<tr><th>Venue:</th><th>${order.venue}</th></tr>` : ''}
              ${order.date ? `<tr><th>Date:</th><th>${order.date.split('T')[0]}</th></tr>` : ''}
              ${order.times ? `<tr><th>Time:</th><th>${order.times}</th></tr>` : ''}
              ${order.additionalinformation ? `<tr><th>Additional Information:</th><th>${order.additionalinformation}</th></tr>` : ''}
              ${order.mobileno ? `<tr><th>Phone No:</th><th>${order.mobileno}</th></tr>` : ''}
              ${order.noofcard ? `<tr><th>No Of Cards:</th><th>${order.noofcard}</th></tr>` : ''}
              ${order.inputcardno ? `<tr><th>Cards NO:</th><th>${order.inputcardno}</th></tr>` : ''}
            </table>
              ${order.bridename ?`<button onclick="editOrder('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.bridename ?`<button onclick="deleteOrder('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              ${order.brithdayname ? `<button onclick="editbrith('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.brithdayname ? `<button onclick="deletebrith('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              ${order.housename ? `<button onclick="edithouse('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.housename ? `<button onclick="deletehouse('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              ${order.babyshowername ? `<button onclick="editbabyshower('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.babyshowername ? `<button onclick="deletebabyshower('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              ${order.festivalname ? `<button onclick="editfestival('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.festivalname ? `<button onclick="deletefestival('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              ${order.partyname ? `<button onclick="editparty('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>`:''}
              ${order.partyname ? `<button onclick="deleteparty('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>`:''}
              
          </div>
          <div style="margin-left:200px">
            ${new Date(order.createdAt).toLocaleDateString()} <br>
            ${new Date(order.createdAt).toLocaleTimeString()}
          </div>
          <hr>`;
        }).join('');
      }
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch user details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}



// Populate the form with the existing order details
function populateForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('title').value = order.title;
  document.getElementById('bridename').value = order.bridename;
  document.getElementById('groomName').value = order.groomname;
  document.getElementById('date').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('times').value = order.times;
  document.getElementById('venue').value = order.venue;
  document.getElementById('additionalinformation').value = order.additionalinformation;
  document.getElementById('mobileno').value = order.mobileno;
  document.getElementById('noofcard').value = order.noofcard;
  document.getElementById('inputcardno').value = order.inputcardno;

  document.getElementById('box1').style.display = 'block';
}
//brithday edit populate
function brithForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('titles').value = order.title;
  document.getElementById('brithdayname').value = order.brithdayname;
  document.getElementById('dates').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('timess').value = order.times;
  document.getElementById('venues').value = order.venue;
  document.getElementById('additionalinformations').value = order.additionalinformation;
  document.getElementById('mobilenos').value = order.mobileno;
  document.getElementById('noofcards').value = order.noofcard;
  document.getElementById('inputcardnos').value = order.inputcardno;

  document.getElementById('box2').style.display = 'block';
}
//house edit populate
function houseForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('titleh').value = order.title;
  document.getElementById('housename').value = order.housename;
  document.getElementById('dateh').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('timesh').value = order.times;
  document.getElementById('venueh').value = order.venue;
  document.getElementById('additionalinformationh').value = order.additionalinformation;
  document.getElementById('mobilenoh').value = order.mobileno;
  document.getElementById('noofcardsh').value = order.noofcard;
  document.getElementById('inputcardnoh').value = order.inputcardno;

  document.getElementById('box3').style.display = 'block';
}
//babyshower edit poplate
function babyshowerForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('titleb').value = order.title;
  document.getElementById('babyshowername').value = order.babyshowername;
  document.getElementById('dateb').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('timesb').value = order.times;
  document.getElementById('venueb').value = order.venue;
  document.getElementById('additionalinformationb').value = order.additionalinformation;
  document.getElementById('mobilenob').value = order.mobileno;
  document.getElementById('noofcardsb').value = order.noofcard;
  document.getElementById('inputcardnob').value = order.inputcardno;

  document.getElementById('box4').style.display = 'block';
}
//festival edit poplate
function festivalForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('titlef').value = order.title;
  document.getElementById('festivalname').value = order.festivalname;
  document.getElementById('datef').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('timesf').value = order.times;
  document.getElementById('venuef').value = order.venue;
  document.getElementById('additionalinformationf').value = order.additionalinformation;
  document.getElementById('mobilenof').value = order.mobileno;
  document.getElementById('noofcardsf').value = order.noofcard;
  document.getElementById('inputcardnof').value = order.inputcardno;

  document.getElementById('box5').style.display = 'block';
}
//party edit poplulate
function partyForm(order) {
  document.getElementById('orderId').value = order._id;
  document.getElementById('titlep').value = order.title;
  document.getElementById('partyname').value = order.partyname;
  document.getElementById('datep').value = order.date.split('T')[0]; // Adjusted date format
  document.getElementById('timesp').value = order.times;
  document.getElementById('venuep').value = order.venue;
  document.getElementById('additionalinformationp').value = order.additionalinformation;
  document.getElementById('mobilenop').value = order.mobileno;
  document.getElementById('noofcardsp').value = order.noofcard;
  document.getElementById('inputcardnop').value = order.inputcardno;

  document.getElementById('box6').style.display = 'block';
}
// Edit an order
async function editbrith(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/brithdayorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      brithForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//editing weddorder
async function editOrder(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/weddorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      console.log('Order data received:', order);
      populateForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//edit house order
async function edithouse(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/houseorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      console.log('Order data received:', order);
      houseForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//edit babyshower order
async function editbabyshower(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/babyshowerorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      console.log('Order data received:', order);
      babyshowerForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
} 
//edit festival order
async function editfestival(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/festivalorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      console.log('Order data received:', order);
      festivalForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
} 
//edit party order
async function editparty(orderId) {
  const token = localStorage.getItem('token');

  try {
    console.log('Fetching order data for ID:', orderId);
    const response = await fetch(`/api/auth/partyorder/${orderId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      const order = await response.json();
      console.log('Order data received:', order);
      partyForm(order);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to fetch order details. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
} 


// Add an event listener to handle the form submission
document.getElementById('weddorderForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('title').value,
    bridename: document.getElementById('bridename').value,
    groomname: document.getElementById('groomName').value,
    date: document.getElementById('date').value,
    times: document.getElementById('times').value,
    venue: document.getElementById('venue').value,
    additionalinformation: document.getElementById('additionalinformation').value,
    mobileno: document.getElementById('mobileno').value,
    noofcard: document.getElementById('noofcard').value,
    inputcardno: document.getElementById('inputcardno').value
  };

  try {
    const response = await fetch(`/api/auth/weddorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box1').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});

//add event listener for brithday order from 
document.getElementById('brithdayform').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('titles').value,
    brithdayname: document.getElementById('brithdayname').value,
    date: document.getElementById('dates').value,
    times: document.getElementById('timess').value,
    venue: document.getElementById('venues').value,
    additionalinformation: document.getElementById('additionalinformations').value,
    mobileno: document.getElementById('mobilenos').value,
    noofcard: document.getElementById('noofcards').value,
    inputcardno: document.getElementById('inputcardnos').value
  };

  try {
    const response = await fetch(`/api/auth/brithdayorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box2').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});


//add event listener for house order from 
document.getElementById('houseform').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('titleh').value,
    housename: document.getElementById('housename').value,
    date: document.getElementById('dateh').value,
    times: document.getElementById('timesh').value,
    venue: document.getElementById('venueh').value,
    additionalinformation: document.getElementById('additionalinformationh').value,
    mobileno: document.getElementById('mobilenoh').value,
    noofcard: document.getElementById('noofcardsh').value,
    inputcardno: document.getElementById('inputcardnoh').value
  };

  try {
    const response = await fetch(`/api/auth/houseorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box3').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});

//add event listener fro babyshower order
document.getElementById('babyshowerform').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('titleb').value,
    babyshowername: document.getElementById('babyshowername').value,
    date: document.getElementById('dateb').value,
    times: document.getElementById('timesb').value,
    venue: document.getElementById('venueb').value,
    additionalinformation: document.getElementById('additionalinformationb').value,
    mobileno: document.getElementById('mobilenob').value,
    noofcard: document.getElementById('noofcardsb').value,
    inputcardno: document.getElementById('inputcardnob').value
  };

  try {
    const response = await fetch(`/api/auth/babyshowerorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box4').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});
//festival popluate from
document.getElementById('festivalform').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('titlef').value,
    festivalname: document.getElementById('festivalname').value,
    date: document.getElementById('datef').value,
    times: document.getElementById('timesf').value,
    venue: document.getElementById('venuef').value,
    additionalinformation: document.getElementById('additionalinformationf').value,
    mobileno: document.getElementById('mobilenof').value,
    noofcard: document.getElementById('noofcardsf').value,
    inputcardno: document.getElementById('inputcardnof').value
  };

  try {
    const response = await fetch(`/api/auth/festivalorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box5').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});
//party to get from 
//festival popluate from
document.getElementById('partyform').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const orderId = document.getElementById('orderId').value;
  const token = localStorage.getItem('token');

  const orderData = {
    title: document.getElementById('titlep').value,
    festivalname: document.getElementById('partyname').value,
    date: document.getElementById('datep').value,
    times: document.getElementById('timesp').value,
    venue: document.getElementById('venuep').value,
    additionalinformation: document.getElementById('additionalinformationp').value,
    mobileno: document.getElementById('mobilenop').value,
    noofcard: document.getElementById('noofcardsp').value,
    inputcardno: document.getElementById('inputcardnop').value
  };

  try {
    const response = await fetch(`/api/auth/partyorder/${orderId}`, {
      method: 'PUT', // Use PUT or PATCH for updates
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      alert('Order updated successfully.');
      document.getElementById('box6').style.display = 'none';
      getUserDetails(); // Refresh the order details on the page
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to update the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
});
// Delete an order
async function deleteOrder(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/weddorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}

//delete Brithday card order 
async function deletebrith(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/brithdayorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//delete house
async function deletehouse(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/houseorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//delete babyshower order
async function deletebabyshower(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/babyshowerorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//delete festival order
async function deletefestival(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/festivalorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
//DELETE PARTY FORM
async function deleteparty(orderId) {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`/api/auth/partyorder/${orderId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    });

    if (response.ok) {
      alert('Order deleted successfully.');
      getUserDetails();
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      alert('Failed to delete the order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}

getUserDetails();
// admin_dashboard.js or similar
async function getAllOrders() {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('/api/admin/orders', {
      method: 'GET',
      headers: {
        'x-auth-token': token,
      },
    });

    if (response.ok) {
      const orders = await response.json();
      // Display orders in the admin dashboard
      displayOrders(orders);
    } else {
      const errorText = await response.text();
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}
function displayOrders(orders) {
  const ordersDiv = document.getElementById('orders');
  ordersDiv.innerHTML = orders.map(order => {
    const groomOrDefaultName = order.groomname || 'N/A';
    
    return `
      <div>
        <table border="2" width="100%">
          ${order.title ? `<tr><th>Order Title:</th><th>${order.title}</th></tr>` : ''}
          ${order.bridename ? `<tr><th>Bride Name:</th><th>${order.bridename}</th></tr>` : ''}
          ${order.housename ? `<tr><th>House Name:</th><th>${order.housename}</th></tr>` : ''}
          ${order.babyshowername ? `<tr><th>Baby Shower Name:</th><th>${order.babyshowername}</th></tr>` : ''}
          ${order.festivalname ? `<tr><th>Festival Name:</th><th>${order.festivalname}</th></tr>` : ''}
          ${order.partyname ? `<tr><th>Party Name:</th><th>${order.partyname}</th></tr>` : ''}
          ${(order.bridename === '' || order.brithdayname) ? `<tr><th>Name:</th><th>${order.brithdayname}</th></tr>` : ''}
          ${order.groomname ? `<tr><th>Groom Name:</th><th>${groomOrDefaultName}</th></tr>` : ''}
          ${order.venue ? `<tr><th>Venue:</th><th>${order.venue}</th></tr>` : ''}
          ${order.date ? `<tr><th>Date:</th><th>${order.date.split('T')[0]}</th></tr>` : ''}
          ${order.times ? `<tr><th>Time:</th><th>${order.times}</th></tr>` : ''}
          ${order.additionalinformation ? `<tr><th>Additional Information:</th><th>${order.additionalinformation}</th></tr>` : ''}
          ${order.mobileno ? `<tr><th>Phone No:</th><th>${order.mobileno}</th></tr>` : ''}
          ${order.noofcard ? `<tr><th>No Of Cards:</th><th>${order.noofcard}</th></tr>` : ''}
          ${order.inputcardno ? `<tr><th>Cards NO:</th><th>${order.inputcardno}</th></tr>` : ''}
        </table>
        ${order.bridename ? `<button onclick="editOrder('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.bridename ? `<button onclick="deleteOrder('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
        ${order.brithdayname ? `<button onclick="editbrith('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.brithdayname ? `<button onclick="deletebrith('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
        ${order.housename ? `<button onclick="edithouse('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.housename ? `<button onclick="deletehouse('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
        ${order.babyshowername ? `<button onclick="editbabyshower('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.babyshowername ? `<button onclick="deletebabyshower('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
        ${order.festivalname ? `<button onclick="editfestival('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.festivalname ? `<button onclick="deletefestival('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
        ${order.partyname ? `<button onclick="editparty('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Edit</button>` : ''}
        ${order.partyname ? `<button onclick="deleteparty('${order._id}')" style="padding:5px;background-color:#d9edf7;color:#79a3a1;margin:5px;border-radius:10px">Delete</button>` : ''}
      </div>
      <div style="margin-left:200px">
        ${new Date(order.createdAt).toLocaleDateString()} <br>
        ${new Date(order.createdAt).toLocaleTimeString()}
      </div>
      <hr>`;
  }).join('');
}

// Call getAllOrders() when the admin dashboard loads
getAllOrders();