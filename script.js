
var selectedRow = null;

// Alert Message Show
function showAlert(Message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(Message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(()=> document.querySelector(".alert").remove(),3000);
}

// All clear Fields

function clearFields(){
    document.querySelector("#firstName").value =""
    document.querySelector("#lastName").value =""
    document.querySelector("#rollNumber").value =""
}

// Add data to the Entryes

document.querySelector("#student-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNumber = document.querySelector("#rollNumber").value;

    // Validation fileds if Empty or Not!

    if(firstName=="" || lastName=="" || rollNumber==""){
        showAlert("Please fill in the field", "danger");1
    }
    else{
        if(selectedRow==null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNumber}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNumber;
            selectedRow =null;
            showAlert("Student Infor Edited", "info");
        }
        clearFields();
    }
});

// Edit Data

document.querySelector("#student-list").addEventListener("click", (e)=>{
    target = e.target
    if(target.classlist.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#fistName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNumber").value = selectedRow.children[2].textContent;

    }

});

// This is a delete button // filed data permanaterly deleted

document.querySelector("#student-list").addEventListener("click", (e)=>{

    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student data Deleted", "danger");
    }
});