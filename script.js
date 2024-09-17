// Handle switching
function showSection(sectionId) {
    document.getElementById("register").style.display = "none";
    document.getElementById("viewStudents").style.display = "none";

    // Show section
    document.getElementById(sectionId).style.display = "block";
}

//modal with student details
function showStudentDetails(name, address, phone, email, image) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalAddress").innerText = address;
    document.getElementById("modalPhone").innerText = phone;
    document.getElementById("modalEmail").innerText = email;
    document.getElementById("img").src = `data:image/*;base64,${image}`;
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
            addStudent();
            loadtable();
            // Clear
            document.getElementById("registrationForm").reset();
        } else {
            alert("Please fill out all fields");
        }
    });

function addStudent() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const profilePicture = document.getElementById("profilePicture").files[0];

    const formData = new FormData();
    formData.append(
        "student",
        new Blob(
            [
                JSON.stringify({
                    name: name,
                    address: address,
                    phone: phone,
                    email: email,
                    password: password,
                }),
            ],
            { type: "application/json" }
        )
    );
    formData.append("image", profilePicture);
    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
    };
    fetch("http://localhost:8080/student/addstudent", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.error("Error:", error));
}

//////////////
async function loadtable() {
    let stdTable = document.getElementById("studentTableBody");

    let body = ``;

    const studentList = await fetch("http://localhost:8080/student/all").then(
        (res) => res.json()
    );

    studentList.forEach((element) => {
        body += `
      <tr   
        onclick="showStudentDetails('${element.name}', '${element.address}', '${element.phone}', '${element.email}','${element.image}')"
      >
        <td>${element.name}</td>
        <td>${element.address}</td>
        <td>${element.phone}</td> 
        <td>${element.email}</td>
      </tr>`;
    });

    stdTable.innerHTML = body;
}
loadtable();
