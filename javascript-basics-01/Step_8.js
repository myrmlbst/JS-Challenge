document.getElementById("validate").onclick = function() {
  const age= document.getElementById("age").value;

  if (age < 18) {
    alert("You are under 18");
  } else alert("You are over 18");
}