//Convert the temperature
function convertTemp() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  if (celsiusInput.value !== "") {
    const c = parseFloat(celsiusInput.value);
    const f = (c * 9) / 5 + 32;
    fahrenheitInput.value = f.toFixed(2);
  } else if (fahrenheitInput.value !== "") {
    const f = parseFloat(fahrenheitInput.value);
    const c = ((f - 32) * 5) / 9;
    celsiusInput.value = c.toFixed(2);
  } else {
    alert("Please enter a value in one of the fields");
  }
}

//Reset the input fields
function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}

//Clear the opposite input while typing
function setupAutoClear() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.addEventListener("input", () => {
    fahrenheitInput.value = "";
  });

  fahrenheitInput.addEventListener("input", () => {
    celsiusInput.value = "";
  });
}

//Call auto-clear setup on load
window.onload = setupAutoClear;
