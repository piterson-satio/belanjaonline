import activeStateMobile from './activeStateMobile'
import WPViewportFix from './windowsPhoneViewportFix'
import objectFitPolyfill from './objectFitPolyfill'
import formValidation from './formValidation'
import carousel from './carousel'

const App = {
    activeStateMobile,
    WPViewportFix,
    objectFitPolyfill,
    formValidation,
    carousel
}

for (let fn in App) {
    if(fn[0] !== '_')
        App[fn]()
}

window.Site = App

export default App
