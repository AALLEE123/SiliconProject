/* Gjorde med AI för att testa */

document.addEventListener("DOMContentLoaded", () => {
    const selectBox = document.querySelector(".select__box")
    const options = document.querySelector(".options")
    const optionsElements = document.querySelectorAll(".option")

    if (!selectBox || !options) return

    selectBox.addEventListener("click", function() {
        selectBox.classList.toggle("active")
    })

    optionsElements.forEach(option => {
        option.addEventListener('click', function() {
            selectBox.classList.remove("active")
        })
    })

    document.addEventListener('click', function(event) {
        if (!selectBox.contains(event.target) && !options.contains(event.target)) {
            selectBox.classList.remove("active")
        }
    })
})