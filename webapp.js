let nb = document.getElementById("nettoBedrag");

function nettoBerekenen() {  
  let bb = document.getElementById("brutoBedragEntry").value;
  console.log(nb);
  console.log(bb);
  nb.innerText = bb * 0.8;
}

nb.addEventListener("click", nettoBerekenen);
