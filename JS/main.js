const mode = document.querySelector(".img-mode")
const body = document.body; 
mode.onclick= function()
{ 
    const source = mode.src;
    
    if(source.includes("moon.png"))
    {
    mode.src = "assets/Images/sun.png"; 
    body.classList.add("dark-mode");
    } 
    else 
    { 
        mode.src = "assets/Images/moon.png";
        body.classList.remove("dark-mode");
    }
};
