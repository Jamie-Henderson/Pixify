function darkMode () {
    // select body and toggle class-list for darkmode //

    var element = document.body;
    element.classList.toggle("dark-mode");

    // select button and check text to toggle between dark and light //

    var x = document.getElementById("dark-mode-btn");
    if (x.innerHTML === "Dark-Mode") {
        x.innerHTML = "Light-Mode";
    } else {
        x.innerHTML = "Dark-Mode";
    }

    // select inputted text and toggle class list //

    var y = document.getElementsByClassName("photoCard");
    y.classListList.toggle("dark-mode");
}