const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
function validateForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;

	if (name === "" || email === "" || phone === "" || message === "") {
		alert("Please fill in all required fields.");
		return false; // Prevent form submission
	}
	return true; // Allow form submission
}