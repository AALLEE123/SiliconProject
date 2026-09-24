/* Gjorde med AI för att testa */
const darkmodeSwitch = document.querySelector('#darkmode__switch')
const page = document.querySelector('.page1')

if (!darkmodeSwitch || !page) {
    console.warn('Darkmode switch or page not found')
} else {
    const savedTheme = localStorage.getItem('darkmode')

    const applyTheme = (isDark) => {
        page.classList.toggle('dark', isDark)
        darkmodeSwitch.checked = isDark
        localStorage.setItem('darkmode', isDark ? 'on' : 'off')
    }

    if (savedTheme === null) {
        applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
    } else {
        applyTheme(savedTheme === 'on')
    }

    darkmodeSwitch.addEventListener('change', () => {
        applyTheme(darkmodeSwitch.checked)
    })
}