// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

//   document.addEventListener("DOMContentLoaded", function() {
//       const text = document.getElementById('text').text.textContent = "This is really cool!"
//   })

// The correct p tage is showing in the console log.
// document.addEventListener("DOMContentLoaded", function() {
//     console.log(document.querySelector('p'))
// })


// Console log output confirms that the p element successfully saved to the 'text' variable.
// document.addEventListener("DOMContentLoaded", function() {
//     const text = document.getElementById('text');
//     console.log(text)
// })

// Console log output confirms that textContent successfully changed the message.
// document.addEventListener("DOMContentLoaded", function() {
//     const text = document.getElementById('text');
//     console.log(text.textContent = "This is really cool!")
// })

// replace the text with "This is really cool!"
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('text');
    text.textContent = "This is really cool!"
})