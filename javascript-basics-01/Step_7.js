document.getElementById("validate").onclick = function() {
  const shoeSize = document.getElementById("shoe_size").value;
  const birthYear = document.getElementById("year").value;

  const updatedValue = (((shoeSize * 2) + 5) * 50) - birthYear + 1766;
  alert("The updated value is: " + updatedValue);
}