const panels = document.querySelectorAll(".panel");

console.log(panels);
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add('active');
    })
});
//removeActiveClass
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}