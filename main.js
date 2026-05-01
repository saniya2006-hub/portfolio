function showMessage() {
    const result = document.getElementById("result");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    result.innerHTML = `✨ ${greeting} Hello Saniya! ✨`;
    
    // Chota sa color change effect
    result.style.color = "#28a745";
}
