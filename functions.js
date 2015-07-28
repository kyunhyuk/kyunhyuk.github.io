
//project 1, req. 2-A
function pluralizer(noun){
	if(noun[noun.length-1] == "s")
		return noun + "es";
	else if (noun[noun.length-1] == "y")
		return noun.slice(0, noun.length - 1) + "ies";
	else 
		return noun + "s";

};
//project 1, req. 2-B
var countDivBy3 = function(n){
	return parseInt(n/3);
};

//project 1, req. 2-C
var reverseWords = function(sentence) {
	return sentence.split(" ").reverse().join(" ");}

//project 1, req. 2-D

var isVowel = function(ch)
//ch = ch.toLowerCase();
{var vowels = /[aeiouy]/i;
return vowels.test(ch);

};

//project 1, req. 2-E

var isConsonant = function(ch)
//ch = ch.toLowerCase();
{var consonants = /[aeiouy]/i;
return isAlpha(ch) && consonants.test(ch)
};

//project 1, req. 2-F

var countVowelPrefixWords = function(sentence) {
    var count = 0;
    var wordArray = sentence.split(" ");
    for(var i = 0; i < wordArray.length; i++) {
        if("aeiouy".indexOf(wordArray[i][0]) >= 0 && "aeiouy".indexOf(wordArray[i][1]) >= 0) {
            count += 1;
        }
    };
    return count;
}