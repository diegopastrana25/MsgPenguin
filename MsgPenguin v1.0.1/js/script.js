window.addEventListener("load", function () {
    const phoneInput = document.getElementById("phone");
    const countrySelect = document.getElementById("country");
  
  
    phoneInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  
    countrySelect.addEventListener("change", function () {
      localStorage.setItem("lastCountryCode", this.value);
    });
  
  
    const saved = localStorage.getItem("lastCountryCode");
    if (saved) {
      countrySelect.value = saved;
    }
  });
  
  function sendMessage() {
    const number = document.getElementById("phone").value.trim();
    const code = document.getElementById("country").value;
  
    if (number && code) {
      const fullNumber = code + number;
      window.location.href = "whatsapp://send?phone=" + fullNumber;
      document.getElementById("phone").value = "";
    }
  }
  