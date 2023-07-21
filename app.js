
let unlist = document.querySelector("ul")
let form = document.querySelector('.form')

//adding a todo
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const NewGoal = e.target.goal.value

    const li = document.createElement('li');

    const p = document.createElement('p');
    p.setAttribute('class','inline')

    p.textContent = NewGoal;

    textInput = document.createElement('input')
    textInput.setAttribute('type', 'text');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const updateBtn = document.createElement('button');

    editBtn.setAttribute('type','button')
    editBtn.setAttribute('class','edit-btn')
    
    deleteBtn.setAttribute('type','button')
    deleteBtn.setAttribute('class','delete-btn')

    const editIcon = document.createElement('i')
    const deleteIcon = document.createElement('i')
    const UpdateIcon = document.createElement('i')

    editIcon.setAttribute("class",'fa-solid fa-pen-to-square')
    deleteIcon.setAttribute('class',' bx bxs-trash-alt')
    
    editBtn.appendChild(editIcon)
    deleteBtn.appendChild(deleteIcon)
    UpdateIcon.setAttribute('class', 'fa-sharp fa-solid fa-check');

    updateBtn.appendChild(UpdateIcon);

    li.appendChild(p);
    li.appendChild(textInput);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);
    unlist.appendChild(li);

    textInput.style.display = 'none';
    updateBtn.style.display = 'none';
SavaData();

//completed function
p.addEventListener("click",()=>{
    p.classList.toggle('complete')

})

//delete  function
deleteBtn.addEventListener("click",()=>{
    li.style.display="none";

})

 //edit function
    editBtn.addEventListener('click',()=>{
        textInput.setAttribute('class','textinput')
        updateBtn.setAttribute('class','updatebtn')
        textInput.style.display = "inline-block";
        updateBtn.style.display = "inline-block";
        p.style.display = 'none';
        deleteBtn.style.display = "none";
        editBtn.style.display = 'none';
    
       

    })
//update function 
updateBtn.addEventListener('click',()=>{
    p.style.display = "inline-block";
    p.textContent = textInput.value
    textInput.style.display = 'none';
    updateBtn.style.display = 'none';
    editBtn.style.display = "inline-block";
    deleteBtn.style.display= "inline-block";

})
})

function SavaData(){
    localStorage.setItem("data",unlist.innerHTML)
}
