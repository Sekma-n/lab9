// Get elements
const alertButton = document.getElementById("entrybutton");
const textInput = document.getElementById("entryinput");
const outputText = document.getElementById("textoutput");

// Add event listener to the Alert Me button
alertButton.addEventListener("click", function() {
  // Get text from input
  const userText = textInput.value.trim();

  // Prevent empty alerts
  if (!userText) {
    alert("Please enter a message first!");
    return;
  }

  // Show alert box with your name and text
  alert("Sekang Segotso: " + userText);

  // Change h2 text to match input
  outputText.textContent = userText;

  // Add visual feedback to button
  alertButton.style.backgroundColor = "#ec008a";
  alertButton.style.color = "#fff";
  alertButton.textContent = "Sent!";

  // Disable the button temporarily
  alertButton.disabled = true;
  alertButton.style.opacity = "0.7";

  // Reset after 2 seconds
  setTimeout(() => {
    alertButton.disabled = false;
    alertButton.style.backgroundColor = "";
    alertButton.style.color = "";
    alertButton.style.opacity = "1";
    alertButton.textContent = "Alert Me";
  }, 2000);
});
