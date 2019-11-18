
/**
const letterE = "Ensign Babyface! Your shields were failing, sir. This should be interesting. " +
	"Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this?" +
	" Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making" +
	" a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until " +
	"you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between" +
	" artistry and mere competence.";

const result = letterE.filter(word => word.length > 20);


console.log(result);

const letterE = "Ensign Babyface! Your shields were failing, sir. This should be interesting. " +
	"Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this?" +
	" Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making" +
	" a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until " +
	"you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between" +
	" artistry and mere competence.";
**/
/**
 * Filter array items based on search criteria (query)
 */

/**
const filterItems = (arr, query) => {
	return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};

console.log(filterItems(letterE, 'e')); // ['apple', 'grapes']
console.log(filterItems(letterE, 'e')); // ['banana', 'mango', 'orange']

Affectin
**/


const words = "Ensign Babyface! Your shields were failing, sir. This should be interesting. " +
"Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this?" +
" Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making" +
" a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until " +
"you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between" +
" artistry and mere competence.";

const newWords = words.split(' ').filter(word => word.toLowerCase()[0] != 'e').join('');

//console.log(newWords[3]);

console.log(newWords);
