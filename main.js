var createTableForm = document.querySelector(".createTable");
var nameInput = document.querySelector("#name");
var descriptionInput = document.querySelector("#Email"); 
var priceInput = document.querySelector("#Password"); 

var users = [];
createTableForm.onsubmit = function (e) {  
    e.preventDefault(); 

    var user = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
    };

    users.push(user);

    console.log(users);
    PrintData();
};
function PrintData(){
    var data = ``;
    for (var i = 0; i < users.length; i++) {
        data += `<tr>
        <th>${users[i].name}</th>
        <th>${users[i].description}</th>
        <th>${users[i].price}</th>
        </tr>
        `;
    }
    document.querySelector("tbody").innerHTML=data;
}
