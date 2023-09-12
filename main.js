let box =
document.querySelector(".box");
let observer =
new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translatex(0)";
        }
    })
})
       

        observer.observe(box)