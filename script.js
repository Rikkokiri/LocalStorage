$(document).ready(function () {
  addListeners();
  tabSwap();
  showPassword();
  greetUser();
  convertToJson();
  displaySerialiser();
});

function addListeners() {
  /* show/hide the localstorage tab */
  $('.consolePrint >h2').click(function () {
    $('#consoleTable').toggle('slide');
  });

  /* Handles register */
  $('#userInfoForm').submit(function (e) {
    e.preventDefault();

    let str = $('form').serialize();
    localStorage.setItem('serializedData', str);

    let firstName = $('#firstname').val();
    let lastName = $('#lastname').val();
    let emailAdd = $('#email').val();
    let passw = $('#password').val();

    if (
      firstName !== '' &&
      lastName !== '' &&
      emailAdd !== '' &&
      passw !== ''
    ) {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', emailAdd);
      localStorage.setItem('password', passw);

      // Redirect user
      window.location.replace('settings.html');

      /* $('#consoleTable')
        .find('tbody:last-child')
        .append(
          `<tr><td>First Name:</td><td>${firstName}</td><tr>` +
            `<tr><td>Last Name:</td><td>${lastName}</td><tr>` +
            `<tr><td>Email:</td><td>${emailAdd}</td><tr>` +
            `<tr><td>Password:</td><td>${passw}</td><tr>`
        ); */
    }
  });

  // Handles login
  $('#userLoginForm').submit(function (e) {
    e.preventDefault();
    let username = $('#emailLogin').val();
    let pwd = $('#passwordLogin').val();

    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('password');

    if (username !== email && pwd !== pass) {
      alert('Wrong email or password! Enter username and password again');
    } else {
      window.location.replace('settings.html');
    }
    console.log(username, pwd, email, pass);
  });

  // Button for clearing local storage
  $('#clear').click(function (event) {
    let clearConfirmed = confirm("Are you sure you want to clear data in the local storage?")
    
    if (clearConfirmed) {
      localStorage.clear();
      console.log('Local storage cleared');
      window.location.replace('index.html');
    }
  });

  // Handle firstname in admin form submission
  $('#userInfFirstName').submit(function (event) {
    // Store user's name in local storage
    let fNameVal = $('#fName').val();
    if (fNameVal !== '') {
      localStorage.setItem('firstName', fNameVal);
    }
    console.log(fNameVal);
  });

  // Handle lastname in admin form submission
  $('#userInfLastName').submit(function (event) {
    // Store user's name in local storage
    let lNameVal = $('#lName').val();
    if (lNameVal !== '') {
      localStorage.setItem('lastName', lNameVal);
    }
    console.log(lNameVal);
  });

  // Handle email in admin form submission
  $('#userInfNewEmail').submit(function (event) {
    // Store user's name in local storage
    let newEmailVal = $('#newEmail').val();
    if (newEmailVal !== '') {
      localStorage.setItem('email', newEmailVal);
    }
    console.log(newEmailVal);
  });

  // Handle Password in admin form submission
  $('#userInfNewPassword').submit(function (event) {
    // Store user's name in local storage
    let newPassVal = $('#newPass').val();
    if (newPassVal !== '') {
      localStorage.setItem('password', newPassVal);
    }
    console.log(newPassVal);
  });
}

/* Handles the tab change in main index page */
function tabSwap() {
  $('.tab a').click(function (e) {
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);
  });
}

/* Displaying the *** hidden password in the input field. */
function showPassword() {
  $('.togglePassword').click(function () {
    $(this).toggleClass('fa-eye fa-eye-slash');

    var input = $('#password, #passwordLogin');
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
}

/* 
Greets user once logged in and returns to stranger, 
if localstorage is cleared, to register again.
*/

function greetUser() {
  const storedName = localStorage.getItem('firstName');
  const name = storedName ? storedName : 'stranger';
  const greeting = `Hello ${name}!`;

  $('#greeting').text(greeting);

  if (name === 'stranger') {
    $('#hidable-form').prop('open', 'true');
    $('#hidable-form summary').text(
      "Tell me so we don't need to be strangers anymore :)"
    );
  } else {
    $('#hidable-form').prop('open', '');
    // $('#hidable-form summary').text('Wrong first name? Reintroduce yourself!');
  }
}

/* Handles the localstorage log prints in the page. */
function getConsoleLog() {
  let firstName = localStorage.getItem('firstName');
  let lastName = localStorage.getItem('lastName');
  let emailAdd = localStorage.getItem('email');
  let passw = localStorage.getItem('password');

  $('#consoleTable')
    .find('tbody:last-child')
    .append(
      `<tr><td>First Name:</td><td>${firstName}</td><tr>` +
        `<tr><td>Last Name:</td><td>${lastName}</td><tr>` +
        `<tr><td>Email:</td><td>${emailAdd}</td><tr>` +
        `<tr><td>Password:</td><td>${passw}</td><tr>`
    );
}

function convertToJson() {
  $('#showJsonFormat').click(function () {
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let emailAdd = localStorage.getItem('email');
    let passw = localStorage.getItem('password');

    let obj = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${emailAdd}`,
      password: `${passw}`,
    };

    let convertedJson = JSON.stringify(obj, undefined, 2);
    $('#results').text(convertedJson);
  });
}

function displaySerialiser() {
  $('#showSerialiseFormat').click(function () {
    let str = localStorage.getItem('serializedData');
    console.log(str);
    $('#strResults').text(str);
  });
}

window.addEventListener("load", function () {
    //Parse User Agent
    var userBrowser = bowser.getParser(navigator.userAgent).getResult();

    //Browser information for logging
    /*console.log(userBrowser.browser.name);
    console.log(userBrowser.browser.version);
    console.log(userBrowser.engine);*/
    
    //Save User's browser information in an object
    var browserInfo = {
        Name: userBrowser.browser.name,
        Version: userBrowser.browser.version,
        Engine: userBrowser.engine
    };

    //Convert object to string for storage
    var browserInfoStr = JSON.stringify(browserInfo);

    //Store User's browser information in localStorage
    localStorage.setItem("Browser", browserInfoStr);

    //OS information for logging
    /*console.log(userBrowser.os.name);
    console.log(userBrowser.os.version);
    console.log(userBrowser.os.versionName);*/

    //Save User's OS information in an object
    var osInfo = {
        Name: userBrowser.os.name,
        Version: userBrowser.os.version,
        Engine: userBrowser.os.versionName
    };

    //Convert object to string for storage
    var osInfoStr = JSON.stringify(osInfo);

    //Store User's OS information in localStorage
    localStorage.setItem("OS", osInfoStr);

    //Platform
    console.log(userBrowser.platform.type);
    localStorage.setItem("Platform", userBrowser.platform.type);
});
