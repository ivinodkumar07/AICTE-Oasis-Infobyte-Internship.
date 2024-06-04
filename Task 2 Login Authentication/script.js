document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signinForm");
    const registerForm = document.getElementById("registerForm");
    const registerLink = document.getElementById("registerLink");
    const signinLink = document.getElementById("signinLink");
    const registerContainer = document.getElementById("registerContainer");
    const securePage = document.getElementById("securePage");
    const logoutBtn = document.getElementById("logoutBtn");
    const signinError = document.getElementById("signinError");
    const registerError = document.getElementById("registerError");
  
    registerLink.addEventListener("click", function (e) {
      e.preventDefault();
      registerContainer.classList.remove("hidden");
      signinForm.classList.add("hidden");
      signinError.textContent = "";
    });
  
    signinLink.addEventListener("click", function (e) {
      e.preventDefault();
      signinForm.classList.remove("hidden");
      registerContainer.classList.add("hidden");
      registerError.textContent = "";
    });
  
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      // You need to implement actual authentication logic here, for demonstration purposes, let's assume correct credentials
      if (username === "user" && password === "password") {
        signinError.textContent = "";
        signinForm.reset();
        signinForm.classList.add("hidden");
        securePage.classList.remove("hidden");
      } else {
        signinError.textContent = "Invalid username or password";
      }
    });
  
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const Username = document.getElementById("Username").value;
      const newPassword = document.getElementById("newPassword").value;
      // You need to implement actual registration logic here, for demonstration purposes, let's assume successful registration
      registerError.textContent = "";
      registerForm.reset();
      registerContainer.classList.add("hidden");
      signinForm.classList.remove("hidden");
      signinLink.click(); // Switch back to signin view
    });
  
    logoutBtn.addEventListener("click", function () {
      securePage.classList.add("hidden");
      signinForm.classList.remove("hidden");
    });
  });
  