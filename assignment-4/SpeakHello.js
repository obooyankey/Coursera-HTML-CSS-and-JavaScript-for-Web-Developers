(function(window) {
    var helloGreeter = new Object();
    var speakWord = "Hello";
    helloGreeter.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloGreeter = helloGreeter;
})(window);
