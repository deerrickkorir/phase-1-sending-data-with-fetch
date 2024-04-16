const userData = {
  name: "John Doe",
  email: "john@example.com"
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(userData)
};

fetch('http://localhost:3000/users', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
    // Do something with the response data, if needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  
