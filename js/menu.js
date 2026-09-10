document.addEventListener("DOMContentLoaded", () => {
    /*const selectBox = document.querySelector(".select-box")
    const options = document.querySelector(".options")
    const selected = document.querySelector(".selected")
    const hiddenInput = document.querySelector("#selected-value")
    const optionsElements = document.querySelectorAll(".option")*/
    
    const selectBox = document.querySelector(".select_box")
    const options = document.querySelector(".options")
    const optionsElements = document.querySelectorAll(".option")

    selectBox.addEventListener("click", function() {
        selectBox.classList.toggle("active")
    })

    optionsElements.forEach(option => {
        option.addEventListener('click', function() {   
            /*selected.textContent = this.textContent
            hiddenInput.value = this.DataTransferItem.value */       
            selectBox.classList.remove("active")
        })
    })

    document.addEventListener('click', function(event) {
        if (!selectBox.contains(event.target) && !options.contains(event.target)) {
            selectBox.classList.remove("active")
        }
    })
})