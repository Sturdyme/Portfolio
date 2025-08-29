const hireForm = document.getElementById("loginForm");
hireForm.addEventListener("submit", (e) => {
	
		const name = document.getElementById("name-input").value;
		const email = document.getElementById("email-input").value;
		const date = document.getElementById("date-input").value;
		const message = document.getElementById("text-area").value;
		if(name && email && date && message) {
			localStorage.setItem('isLoggedIn', 'true');
			localStorage.setItem('userName', name);
			window.location.href = "index.html";
		} else {
			alert("Please fill in all fields.");
		}
});