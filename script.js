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
