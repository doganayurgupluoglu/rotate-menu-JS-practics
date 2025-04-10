const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const content = document.getElementById("content")
const li = document.querySelectorAll("li")
openBtn.addEventListener("click", () => {
   openBtn.style.transform = "rotate(-90deg)";
   closeBtn.style.transform = "rotate(0deg)"
   content.style.transform ="rotate(-20deg)"
   
   li.forEach((li) => {
     li.style.transform = "translateX(0%)"
   })
})

closeBtn.addEventListener("click", () => {
   openBtn.style.transform = "rotate(0deg)";
   closeBtn.style.transform = "rotate(90deg)"
   content.style.transform ="rotate(0deg)"
   
   li.forEach((item, i) => {
  let transformX;
  if (i === 0) transformX = "-100%";
  if (i === 1) transformX = "-155%";
  if (i === 2) transformX = "-200%";
  item.style.transform = `translateX(${transformX})`;
});

})