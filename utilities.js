function clickOMatic() {
    alert('Hello!');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        clickOMatic();
    });
};

ScrollReveal().reveal('.site');