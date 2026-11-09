function clickOMatic() {
    alert('Hello!');
}

window.onload = function() {
    ScrollReveal().reveal('.site', {delay: 1000});
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        clickOMatic();
    });

};