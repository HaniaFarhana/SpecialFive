let counter = 0;

function selection(p, name) {
  if (counter >= 5) {
    return alert("you can not add more than five");
  }
  const li = document.createElement("li");
  li.innerText = name;
  document.getElementById("list").appendChild(li);
  p.setAttribute("disabled", "true");
  p.classList.add("bg-secondary");
  p.innerText = "selected";
  counter++;
}

document.getElementById("calculate").addEventListener("click", function () {
  if (counter === 0) {
    return alert("please select players");
  } else if (parseInt(document.getElementById("expense").value) === 0) {
    return alert("please select players");
  } else if (document.getElementById("expense").value === "") {
    return alert("please enter value");
  }
  document.getElementById("totalExpense").innerText =
    parseInt(document.getElementById("expense").value) * counter;
});

document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {
    document.getElementById("calculate").click();
    if (parseInt(document.getElementById("totalExpense").innerText) === 0) {
      return alert("please select players");
    } else if (document.getElementById("manager").value === "") {
      return alert("please enter manager value");
    } else if (document.getElementById("coach").value === "") {
      return alert("please enter coach value");
    }
    document.getElementById("totalCalculate").innerText =
      parseInt(document.getElementById("totalExpense").innerText) +
      parseInt(document.getElementById("manager").value) +
      parseInt(document.getElementById("coach").value);
  });
