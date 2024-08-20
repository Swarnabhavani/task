// Get the modal
var modal = document.getElementById("enquiryModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open the modal when the page loads
window.onload = function() {
    modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission and redirect
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Save data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('education', education);
    localStorage.setItem('gender', gender);
    localStorage.setItem('address', address);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);

    // Redirect to display.html
    window.location.href = 'display.html';
});
