// JavaScript for handling attendance marking

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".attendance-checkbox");
    const submitButton = document.getElementById("submit-attendance");

    submitButton.addEventListener("click", function () {
        const presentStudents = [];
        checkboxes.forEach((checkbox) => {
            const studentId = checkbox.getAttribute("data-student-id");
            if (checkbox.checked) {
                presentStudents.push(studentId);
            }
        });

        // You can now send the data to the server for recording attendance
        // For simplicity, we'll just log it to the console here
        console.log("Present Students: ", presentStudents);
    });
});
