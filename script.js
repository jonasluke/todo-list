const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function that handles adding tasks through user input
function addTask() {
    if (inputBox.value === '') {
        alert("You gotta do SOMEthing");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Function saves data to local storage so refreshing doesn't reset information.
// If cache is cleared, this will reset all data though.
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Function retrieves data from local storage and populates task list if information is present.
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Invokes the showTask() function to set/get data.
showTask();

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);