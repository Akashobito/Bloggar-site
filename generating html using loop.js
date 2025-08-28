import { clientDetails } from "./Clients details.js";

// console.log(clientDetails[0]);

let html = '';

clientDetails.forEach(function(value) {
  const client = value;
  // console.log(value);
  html += 
  ` <tr>
    <td class="id">${client.id}</td>
    <td>${client.name}</td>
    <td class="mobile">${client.mobileNumber}</td>
    <td>${client.dob}</td>
    <td>${client.city}</td>
    <td>${client.email}</td>
  </tr>` 
})
console.log(html); 

const tableElement = document.querySelector('.js-table');
tableElement.innerHTML += html; 

