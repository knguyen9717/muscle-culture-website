document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("waitlist").addEventListener("submit",(e)=>{
  e.preventDefault();
  document.getElementById("form-message").textContent="WAITLIST FORM DEMO — we'll connect this to a real signup system before launch.";
});