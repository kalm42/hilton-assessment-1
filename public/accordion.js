var accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("accordion__title")) {
    target = target.parentElement;
  }

  if (target.classList.contains("accordion__trigger")) {
    var isExpanded = target.getAttribute("aria-expanded") === "true";
    var activeTrigger = accordion.querySelector('[aria-expanded="true"]');
    if (activeTrigger && activeTrigger !== target) {
      activeTrigger.setAttribute("aria-expanded", "false");
      document
        .getElementById(activeTrigger.getAttribute("aria-controls"))
        .setAttribute("hidden", "");
    }
    if (!isExpanded) {
      target.setAttribute("aria-expanded", "true");
      document
        .getElementById(target.getAttribute("aria-controls"))
        .removeAttribute("hidden");
    }
  }
});
