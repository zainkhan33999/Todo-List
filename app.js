
    const unlist = document.querySelector("ul");
    const form = document.querySelector('.form');

    // Load data from local storage
    if (localStorage.getItem("data")) {
        unlist.innerHTML = localStorage.getItem("data");
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const NewGoal = e.target.goal.value;

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.setAttribute('class', 'inline');
        p.textContent = NewGoal;

        const textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');
        textInput.style.display = 'none';

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const updateBtn = document.createElement('button');

        editBtn.setAttribute('type', 'button');
        editBtn.setAttribute('class', 'edit-btn');

        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('class', 'delete-btn');

        updateBtn.setAttribute('class', 'updatebtn');

        const editIcon = document.createElement('i');
        const deleteIcon = document.createElement('i');
        const updateIcon = document.createElement('i');

        editIcon.setAttribute('class', 'fa-solid fa-pen-to-square');
        deleteIcon.setAttribute('class', 'fas fa-trash');
        updateIcon.setAttribute('class', 'fas fa-check');

        editBtn.appendChild(editIcon);
        deleteBtn.appendChild(deleteIcon);
        updateBtn.appendChild(updateIcon);
updateBtn.style.display = 'none'
        // Completed function
        p.addEventListener("click", () => {
            p.classList.toggle('complete');
            saveData();
        });

        // Delete function
        deleteBtn.addEventListener("click", () => {
            li.style.display = "none";
            saveData();
        });

        // Edit function
        editBtn.addEventListener('click', () => {
            textInput.style.display = "inline-block";
            updateBtn.style.display = "inline-block";
            p.style.display = 'none';
            deleteBtn.style.display = "none";
            editBtn.style.display = 'none';
        });

        // Update function 
        updateBtn.addEventListener('click', () => {
            p.style.display = "inline-block";
            p.textContent = textInput.value;
            textInput.style.display = 'none';
            updateBtn.style.display = 'none';
            editBtn.style.display = "inline-block";
            deleteBtn.style.display = "inline-block";
            saveData();
        });

        // Append elements to the li
        li.appendChild(p);
        li.appendChild(textInput);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        li.appendChild(updateBtn);

        unlist.appendChild(li);

        // Save data to local storage
        saveData();

        // Reset form input
        e.target.goal.value = '';
    });

    function saveData() {
        localStorage.setItem("data", unlist.innerHTML);
    }
