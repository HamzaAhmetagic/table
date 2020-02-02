let dataTable = document.querySelector("#data-table");

let xml = new XMLHttpRequest();
xml.open("get","https://jsonplaceholder.typicode.com/users");
xml.onreadystatechange = function(){
	if (xml.readyState == 4 && xml.status == 200) {
		createTable(JSON.parse(xml.responseText))
	}
}
xml.send()

function createTable(data){
	console.log(data)
	let text = "";
	for (var i = 0; i < data.length; i++) {
		text += `
		<tr>
		<td>${data[i].id}</td>
		<td>${data[i].name}</td>
		<td>${data[i].username}</td>
		<td>${data[i].email}</td>
		<td>${data[i].phone}</td>
		<td>${data[i].website}</td>
		</tr>
		`
	}
	dataTable.innerHTML = text;
}