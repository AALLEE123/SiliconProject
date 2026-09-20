console.log('Börja med att sätta ugnen på 175 grader (eller 160 grader om du använder varmluft) och smörj samt bröa en rund form med löstagbar kant (gärna med ströbröd eller kokosflingor). Smält smöret i en kastrull och ta den sedan från plattan. Rör ner strösocker och ägg direkt i det smälta smöret och rör om försiktigt, du ska inte vispa, eftersom det kan göra kakan pösig i stället för härligt kladdig. Blanda sedan i vetemjöl, kakao, vaniljsocker och salt, och rör till en jämn och slät smet. Häll smeten i din form och grädda mitt i ugnen i ungefär 15 minuter. Kakan ska ha stelnat lite i kanterna men fortfarande kännas väldigt mjuk och vobblig i mitten när du tar ut den; den sätter sig mer när den svalnar. Låt den gärna stå i kylskåpet ett tag efter att den har svalnat helt, då blir den extra god och kladdig.')

const darkmodeSwitch = document.querySelector('#darkmode__switch')
const hasDarkmode = localStorage.getItem('darkmode')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')
const page5 = document.querySelector('.page5')
const pageaf = document.querySelector('.pageaf')
const paget = document.querySelector('.paget')

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkmode()
    } else {
        disableDarkmode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkmode()
} else if(hasDarkmode === 'off') {
    disableDarkmode()
} 




darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkmode()
        localStorage.setItem('darkmode','on')
    } else {
        disableDarkmode()
        localStorage.setItem('darkmode','off')
    }
})



function enableDarkmode() {
    darkmodeSwitch.checked = true
    page1.classList.add('dark')
    page2.classList.add('dark')
    page3.classList.add('dark')
    pageaf.classList.add('dark')
    page4.classList.add('dark')
    page5.classList.add('dark')
}
function disableDarkmode() {
    darkmodeSwitch.checked = false
    page1.classList.remove('dark')
    page2.classList.remove('dark')
    page3.classList.remove('dark')
    pageaf.classList.remove('dark')
    page4.classList.remove('dark')
    page5.classList.remove('dark')
}