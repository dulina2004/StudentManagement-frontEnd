// Handle switching
function showSection(sectionId) {
    document.getElementById("register").style.display = "none";
    document.getElementById("viewStudents").style.display = "none";

    // Show section
    document.getElementById(sectionId).style.display = "block";
}

//modal with student details
function showStudentDetails(name, address, phone, email) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalAddress").innerText = address;
    document.getElementById("modalPhone").innerText = phone;
    document.getElementById("modalEmail").innerText = email;
    document.getElementById("studentModal").style.display = "block";
}

// Close
function closeModal() {
    document.getElementById("studentModal").style.display = "none";
}

document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const profilePicture =
            document.getElementById("profilePicture").files[0];

        // validation
        if (name && address && phone && email && password && profilePicture) {
            document.getElementById("successMessage").style.display = "block";

            console.log({
                name,
                address,
                phone,
                email,
                password,
                profilePicture,
            });

            // Clear
            document.getElementById("registrationForm").reset();
        } else {
            alert("Please fill out all fields");
        }
    });
