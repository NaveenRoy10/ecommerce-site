$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });

  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchModal(fromId, toId) {
    closeModal(fromId);
    openModal(toId);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Form submission handling
document.getElementById('signInForm').onsubmit = function(e) {
    e.preventDefault();
    // Add your sign in logic here
    alert('Sign In Submitted!');
    closeModal('signInModal');
}

document.getElementById('signUpForm').onsubmit = function(e) {
    e.preventDefault();
    // Add your sign up logic here
    alert('Sign Up Submitted!');
    closeModal('signUpModal');
}