function showPage(page){

    const pages = document.querySelectorAll('.page');

    pages.forEach(p => {
        p.style.display = "none";
        p.classList.add("hidden");
    });

    const active = document.getElementById(page);

    active.style.display = "block";
    active.classList.remove("hidden");
}
