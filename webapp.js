let nb = document.getElementById("nettoBedrag");
let bb = document.getElementById("brutoBedragEntry").value;

function nettoBerekenen() {
  console.log(nb);
  console.log(bb);
  nb.innerText = bb * 0.8;
}

nb.addEventListener("click", nettoBerekenen);
