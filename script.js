$(document).ready(function () {
  addListeners();
  tabSwap();
  showPassword();
  greetUser();
});

function addListeners() {
  $('.consolePrint >h2').click(function () {
    $('#consoleTable').toggle('slide');
  });

  $('#userInfoForm').submit(function (e) {
    e.preventDefault();
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
      getConsoleLog();
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

  $('#userLoginForm').submit(function (e) {
    e.preventDefault();
    let username = $('#emailLogin').val();
    let pwd = $('#passwordLogin').val();

    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('password');

    if (username !== email && pwd !== pass) {
      alert('Wrong email or password! Enter username and password again');
    } else {
      window.location.replace('admin-index.html');
    }
    console.log(username, pwd, email, pass);
  });

  // Button for clearing local storage
  $('#clear').click(function (event) {
    localStorage.clear();
    console.log('Local storage cleared');
    window.location.replace('index.html');
  });

  // Handle form submission
  $('#userInfForm').submit(function (event) {
    // Store user's name in local storage
    let nameValue = $('#yourName').val();
    if (nameValue !== '') {
      localStorage.setItem('firstName', nameValue);
    }
    console.log(nameValue);

    // event.preventDefault()
  });
}

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

function showPassword() {
  $('.togglePassword').click(function () {
    $(this).toggleClass('fa-eye fa-eye-slash');

    var input = $('.password');
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
}

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
    $('#hidable-form summary').text('Wrong Info? Reintroduce yourself!');
  }
}

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
