function tryLogin() {
	// grab the form
	let loginForm = document.loginForm;
	// grab the values of the inputs of the form
	let username = loginForm.username.value;
	let password = loginForm.password.value;
	
	// create JS object w/ values, it will eventually turn into JSON to send
	let loginInfoJSObject = {
			username: username,
			password: password,
	}
	// start AJAX request
	let xhr = new XMLHttpRequest();
	
	// create ready state change function to perform
	xhr.onreadystatechange = function() {
		if((this.readyState ===4) && (this.status === 200)) {
			sessionStorage.setItem('currentUser', this.responseText);
			window.location = "http://localhost:8080/Project1/employee/project1-employee.html";// location of succesful login window redirect
		}
		if(this.readyState === 4 && this.status === 204) {	// http status no content
			// alert is probably more elegant than a page redirect... but if have time look into creating a modal perhaps???
			alert("Login has Failed \nUsername or Password is incorrect");
		}
	};
	
	// open xhr request to the <url-pattern> of loginpage's mapping
	xhr.open("POST", "http://localhost:8080/Project1/login");
	// send xhr JSON request of the JS object we created earlier
	xhr.send(JSON.stringify(loginInfoJSObject));
	
}