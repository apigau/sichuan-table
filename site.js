(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Mailto interest form — builds a prefilled email, no backend
  var form = document.getElementById("interest-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.elements.namedItem("name") || {}).value || "";
      var email = (form.elements.namedItem("email") || {}).value || "";
      var guests = (form.elements.namedItem("guests") || {}).value || "";
      var dates = (form.elements.namedItem("dates") || {}).value || "";
      var message = (form.elements.namedItem("message") || {}).value || "";
      var subject = encodeURIComponent("Sichuan Table trip interest — " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Guests: " + guests + "\n" +
        "Preferred dates / month: " + dates + "\n\n" +
        "Message:\n" + message + "\n\n" +
        "(Sent from sichuantable booking interest form)"
      );
      window.location.href = "mailto:wenhongbiao10@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
