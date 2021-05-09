const vowels = ["a", "e", "i", "o", "u"]
let result={};
function noOfVowels(str){
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            if(result[letter]==null){
                result[letter]=1;
            }
            else{
            result[letter]++;
            }
        }
    }
}
noOfVowels("Hey This is Skillsanta JS Training");
for (var key in result) {
    document.write( key.toUpperCase() +" : " + result[key] + "<br>");
}