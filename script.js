document.getElementById("year").textContent=new Date().getFullYear();

const membershipSelect=document.getElementById("membership-interest");
document.querySelectorAll(".plan-cta").forEach(button=>{
  button.addEventListener("click",()=>{
    if(membershipSelect){
      membershipSelect.value=button.dataset.plan || "";
      membershipSelect.dispatchEvent(new Event("change"));
    }
  });
});

document.getElementById("waitlist").addEventListener("submit",(e)=>{
  e.preventDefault();
  const plan=membershipSelect?.value || "Not selected";
  document.getElementById("form-message").textContent="WAITLIST FORM DEMO — "+plan+" selected. We'll connect this form to a real signup database before promotion.";
});

// Athlete carousel
(() => {
  const carousel=document.querySelector(".athlete-carousel");
  if(!carousel) return;
  const slides=[...carousel.querySelectorAll(".athlete-slide")];
  const dotsWrap=carousel.querySelector(".athlete-dots");
  const prev=carousel.querySelector(".athlete-prev");
  const next=carousel.querySelector(".athlete-next");
  let current=0, timer;
  slides.forEach((_,i)=>{
    const dot=document.createElement("button");
    dot.className="athlete-dot"+(i===0?" active":"");
    dot.type="button"; dot.setAttribute("aria-label","Show athlete "+(i+1));
    dot.addEventListener("click",()=>show(i,true)); dotsWrap.appendChild(dot);
  });
  const dots=[...dotsWrap.children];
  if(slides.length===1) carousel.classList.add("single-slide");
  function show(i,user=false){
    if(slides.length<2) return;
    current=(i+slides.length)%slides.length;
    slides.forEach((s,n)=>s.classList.toggle("active",n===current));
    dots.forEach((d,n)=>d.classList.toggle("active",n===current));
    if(user) restart();
  }
  prev.addEventListener("click",()=>show(current-1,true));
  next.addEventListener("click",()=>show(current+1,true));
  function restart(){clearInterval(timer);if(slides.length>1)timer=setInterval(()=>show(current+1),4000)}
  restart();
})();


// Membership and pass selection
(() => {
  const options=[...document.querySelectorAll(".selectable-option")];
  if(!options.length) return;
  options.forEach(card=>{
    card.addEventListener("click",(e)=>{
      if(e.target.closest("a,button")) return;
      const group=card.closest(".membership-cards,.prepaid-cards,.pass-cards");
      if(!group) return;
      group.querySelectorAll(".selectable-option").forEach(item=>item.classList.remove("selected"));
      card.classList.add("selected");
    });
  });
})();
