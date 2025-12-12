// Get elements

// Toggle between clicks
function myFunction() {
  const x = document.getElementById("troy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const insightsLink = document.getElementById("insightsLink");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");

  insightsLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});
