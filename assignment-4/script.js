/*
Solution of assignment 4:
Expected output:
Hello Matthew
Good Bye John
Hello Stephen
Hello Emmanuel
Goodbye Joseph
Hello Reynolds
Goodbye Joshua
Hello Kate
Hello Osei
Good Bye Janet
*/

(function() {
    var names = ["Matthew", "John", "Stephen", "Emmanuel", "Joseph", "Reynolds", "Joshua", "Kate", "Osei", "Janet"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeGreeter.speak(names[i]);
        } else {
            helloGreeter.speak(names[i]);
        }
    }
})();
