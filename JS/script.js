document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[username] && users[username].password === password) {
      document.getElementById('login-message').textContent = 'User registered.we will send you an email within 72hrs!';
      localStorage.setItem('currentUser', JSON.stringify(users[username]));
    } else {
      // Check if the username already exists
      if (users[username]) {
        document.getElementById('login-message').textContent = 'User already exists. Please choose a different username.';
      } else {
        // Add the new user to the list
        users[username] = { password: password };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(users[username]));
        document.getElementById('login-message').textContent = 'User registered.we will send you an email within 72hrs!';
        
        // Display all usernames and passwords in local storage
        console.log('All Users:');
        Object.keys(users).forEach(key => {
          console.log('Phone:', key, 'Password:', users[key].password);
        });
      }
    }
  });
  
  // Initialize local storage if it's empty
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
  }