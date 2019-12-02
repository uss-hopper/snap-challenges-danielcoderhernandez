
//const list = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];

// var list = document.getElementsByClassName("list");
// list = Array.prototype.map(list,
// 	element=>
// 		({
// 			1: element
// 		}));


const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];

	names.map(name => {
		let newName = document.createElement("p");
		newName.innerText = "Name - " + name;
		document.getElementById("names").appendChild(newName)
	});