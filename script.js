// Store the subjects for both batches
const subjectsBatch1 = ["Calculus and Linear Algebra", "EGD", "EEE", "English", "Physics"];
const subjectsBatch2 = ["Calculus and Linear Algebra", "PPS", "Chemistry", "Language", "PoE", "Biology"];

// Select elements from the DOM
const courseSelect = document.getElementById('courseSelect');
const batchSelect = document.getElementById('batchSelect');
const subjectsContainer = document.getElementById('subjectsContainer');
const subjectsList = document.getElementById('subjectsList');

// Handle course selection change
courseSelect.addEventListener('change', function () {
    if (this.value === "CSE") {
        batchSelect.disabled = false;  // Enable the batch select when course is chosen
    } else {
        batchSelect.disabled = true;
        subjectsContainer.style.display = 'none'; // Hide subjects if no valid course
    }
});

// Handle batch selection change
batchSelect.addEventListener('change', function () {
    // Clear previous subjects
    subjectsList.innerHTML = '';

    let selectedSubjects = [];
    if (this.value === 'batch1') {
        selectedSubjects = subjectsBatch1;
    } else if (this.value === 'batch2') {
        selectedSubjects = subjectsBatch2;
    }

    // Display subjects
    selectedSubjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject');
        subjectDiv.innerHTML = `
            <span>${subject}</span>
            <ul class="task-list" id="taskList-${subject}"></ul>
            <button onclick="addTask('${subject}')">Add Task</button>
        `;
        subjectsList.appendChild(subjectDiv);
    });

    // Show the subjects container
    subjectsContainer.style.display = 'block';
});

// Function to add task
function addTask(subject) {
    const taskList = document.getElementById(`taskList-${subject}`);
    
    // Check if there are already 3 tasks
    if (taskList.children.length >= 3) {
        alert("You can only add up to 3 tasks per subject.");
        return;
    }
    
    // Prompt user to enter a task
    const task = prompt("Enter your task:");
    if (task && task.trim() !== "") {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
    }
}
