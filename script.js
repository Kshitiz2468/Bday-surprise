const passwordName = "Unicorn";
const displayName ="Katyayani"

/* ⭐ Password Preview */
function updatePasswordPreview(){

  const input =
  document.getElementById("nameInput").value;

  document.getElementById("passwordPreview")
  .innerText = "*".repeat(input.length);
}

/* 🔓 Unlock */
function checkName(){

  let input =
  document.getElementById("nameInput")
  .value
  .trim();

  if(
    input.toLowerCase() ===
    passwordName.toLowerCase()
  ){

    document.getElementById("lockScreen")
    .style.display = "none";

    showName(displayName);

  } else {

    document.getElementById("errorMsg")
    .style.display = "block";
  }
}

/* 💖 Name Animation */
function showName(name){

  let display =
  document.getElementById("nameDisplay");

  display.innerHTML = "";

  let text = `✨ ${name} ✨`;

  let i = 0;

  function type(){

    if(i < text.length){

      display.innerHTML += text[i++];

      setTimeout(type,80);
    }
  }

  type();

  const msg =
  document.createElement("p");

  msg.className =
  "mt-4 text-purple-200";

  document.querySelector(".glass-card")
  .appendChild(msg);

  const final =
  `𝓨𝓸𝓾𝓻 𝓪𝓻𝓮 𝓢𝓹𝓮𝓬𝓲𝓪𝓵 ${name} ,𝓚𝓮𝓮𝓹 𝓼𝓱𝓲𝓷𝓲𝓷𝓰 🪄 .`;

  let j = 0;

  function typeMsg(){

    if(j < final.length){

      msg.innerHTML += final[j++];

      setTimeout(typeMsg,25);
    }
  }

  setTimeout(typeMsg,800);
}

/* 🎉 Surprise Popup */
function celebrate(){

  const popup =
  document.getElementById("dreamPopup");

  popup.classList.remove("hidden");

  confetti({
    particleCount:80,
    spread:70
  });

  const holder =
  document.getElementById("popupStars");

  holder.innerHTML = "";

  for(let i=0;i<25;i++){

    const s =
    document.createElement("div");

    s.className = "popup-star";

    s.style.left =
    Math.random()*100 + "%";

    s.style.bottom =
    Math.random()*40 + "px";

    holder.appendChild(s);
  }
}

/* 🌠 Shooting Stars */
setInterval(()=>{

  let s =
  document.createElement("div");

  s.className = "shooting-star";

  s.style.top =
  Math.random()*50 + "%";

  s.style.left =
  Math.random()*100 + "%";

  document.body.appendChild(s);

  s.animate([
    {
      transform:
      "translate(0,0) rotate(45deg)",
      opacity:1
    },

    {
      transform:
      "translate(-600px,600px)",
      opacity:0
    }

  ],{
    duration:1500
  });

  setTimeout(
    ()=>s.remove(),
    1500
  );

},2000);

/* ✨ Random Stars */
for(let i=0;i<60;i++){

  let s =
  document.createElement("div");

  s.className = "bloom-star";

  s.style.top =
  Math.random()*100 + "%";

  s.style.left =
  Math.random()*100 + "%";

  document.body.appendChild(s);
}

/* 🌠 Cursor Trail */
if(window.innerWidth > 768){

  document.addEventListener(
    "mousemove",
    e=>{

      let t =
      document.createElement("div");

      t.className = "trail";

      t.style.left =
      e.clientX + "px";

      t.style.top =
      e.clientY + "px";

      document.body.appendChild(t);

      setTimeout(
        ()=>t.remove(),
        800
      );
  });
}

/* 🌌 3D Parallax */
let mx = 0;
let my = 0;
let cx = 0;
let cy = 0;

const moon =
document.querySelector(".moon");

const card =
document.querySelector(".glass-card");

const planet =
document.querySelector(".planet");

document.addEventListener(
  "mousemove",
  e=>{

    mx =
    (e.clientX / window.innerWidth - .5) * 2;

    my =
    (e.clientY / window.innerHeight - .5) * 2;
});

/* 🌌 Animation Loop */
function animate(){

  cx += (mx - cx) * 0.05;

  cy += (my - cy) * 0.05;

  if(window.innerWidth > 768){

    moon.style.transform =
    `translate(${cx * 20}px,${cy * 20}px) translateZ(60px)`;

    card.style.transform =
    `translate(${cx * 10}px,${cy * 10}px)
     rotateY(${cx * 5}deg)
     rotateX(${-cy * 5}deg)
     translateZ(50px)`;

    planet.style.transform =
    `translate(${cx * 25}px,${cy * 25}px)
     rotate(${Date.now() * 0.02}deg)
     translateZ(120px)`;

  } else {

    card.style.transform = "none";
  }

  requestAnimationFrame(animate);
}

animate();
