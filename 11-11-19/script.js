function findRemove() {
	//grab the original text
	let txt = document.getElementById("find-remove").innerHTML;

	//grab the words to find/replace
	let findWord = document.getElementById("textFind").value;

	//create a new regex object to use to search for findWord
	//include the g & i modifiers: g is for global i is for case insensitive
	//following is reg expression

	let re = new RegExp(findWord, "company");

	//find and remove words in the original text using the regex we created
	let newText = txt.replace(re, removeText);

	//output the new text to page

	}