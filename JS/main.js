const body = document.body; 
const mode = document.querySelector(".mode-btn");
const modeImg = document.querySelector(".mode-img");
mode.onclick = function()
{ 
    const source = modeImg.src;  
    if(source.includes("assets/Images/moon.png"))
    { 
        modeImg.src = "assets/Images/sun.png";
        body.classList.add("dark");
    }
    else { 
        modeImg.src = "assets/Images/moon.png";
        body.classList.remove("dark");
    }
}
const goUpButton = document.querySelector(".go-up-btn");
 
window.onscroll = function () {
if (window.scrollY > 500) 
{
    goUpButton.style.display = "block";
} else
    {
    goUpButton.style.display = "none";
    }
};

goUpButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
