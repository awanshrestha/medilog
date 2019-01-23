let linkContainer = document.getElementById("dash-nav");
let links = linkContainer.getElementsByClassName("nav-link");

for (let link of links) {
  link.addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
