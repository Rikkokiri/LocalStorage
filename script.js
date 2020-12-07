$( document ).ready(function() {
    addListeners()
    greetUser()
});

function addListeners () {
    // Button for clearing local storage
    $("#clear").click(function( event) {
        localStorage.clear()
        console.log('Local storage cleared')

        greetUser()
    })

    // Handle form submission
    $("#userInfoForm").submit(function( event ) {
        // Store user's name in local storage
        let nameValue = $("#yourName").val();
        if(nameValue !== '') {
            localStorage.setItem('users-name', nameValue)
        }
        console.log(nameValue)

        // event.preventDefault()
    })
}

function greetUser () {
    const storedName = localStorage.getItem('users-name')
    const name = storedName ? storedName : 'stranger'
    const greeting = `Hello ${name}!`

    $( "#greeting" ).text(greeting)

    if (name === 'stranger') {
        $("#hidable-form").prop('open', 'true')
        $("#hidable-form summary").text("Tell me so we don't need to be strangers anymore :)")
    } else {
        $("#hidable-form").prop('open', '')
        $("#hidable-form summary").text("Wrong name? Reintroduce yourself!")
    }
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
