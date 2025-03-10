
interface THEMES {
    id: string,
    selector: string,
    name: string
    primaryColor: string | null,
    primaryColorOp30: string | null,
    primaryColorOp50: string | null,
    secondaryColor: string | null,
    textColor: string | null
    bg: string | null
}


function ThemeMapper(arg: THEMES) {
    return `:root{ 
  --primary-color: ${arg.primaryColor};
  --primary-color-op-30 : ${arg.primaryColorOp30};
  --primary-color-op-50 : ${arg.primaryColorOp50};
  --secondary-color: ${arg.secondaryColor};
  --text-color : ${arg.textColor};
  --bg :  ${arg.bg};
}`
}

const queryStyleThemeActive = () => {
    const stlElm = document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'style')

    for (let stlElmKey of stlElm) {

        if (stlElmKey.hasAttribute('state-app-theme')) {
            return stlElmKey
        }
    }
}

function Creator() {
    const root = document.createElement("style")
    root.setAttribute('state-app-theme', 'default')
    return root
}

function maker(theme: THEMES) {
    let nodeElement = queryStyleThemeActive()
    if (!nodeElement) {
        nodeElement = Creator()
    }
    nodeElement.innerText = ThemeMapper(theme)
    document.head.append(nodeElement)
}
function loader(themejson) {
    return;

    let themObj = JSON.parse(localStorage.getItem('APP_NAME'))
    if (!themObj) {
        const strg = { "theme": { id: "thdf002", name: "default", selector: "default" } }
        localStorage.setItem('APP_NAME', JSON.stringify(strg))
        maker(themejson['default'])
    } else {
        let themeKey = themObj['theme']
        if (themeKey) {
            maker(themejson[themeKey.selector])
        }
    }
}
function switchTheme(theme: THEMES) {
    let themObj = JSON.parse(localStorage.getItem('APP_NAME'))
    if (!themObj) {
        const strg = { "theme": { id: theme.id, name: theme.name, selector: theme.selector } }
        localStorage.setItem('APP_NAME', JSON.stringify(strg))
        document.getElementById(theme.id).style.setProperty('background-color', 'green')
        document.getElementById(theme.id).style.setProperty('color', 'white')
        document.getElementById(theme.id).innerText = 'Active'
    } else {
        let themeKey = themObj['theme']
        if (themeKey) {
            if (themeKey['id'] != theme.id) {
                themObj["theme"] = { id: theme.id, name: theme.name, selector: theme.selector }
                localStorage.setItem('APP_NAME', JSON.stringify(themObj))
                document.getElementById(themeKey['id']).style.setProperty('background-color', 'green')
                document.getElementById(themeKey['id']).style.setProperty('color', 'white')
                document.getElementById(themeKey['id']).style.setProperty('color', 'black')
                document.getElementById(themeKey['id']).style.setProperty('background-color', 'transparent')
                document.getElementById(themeKey['id']).innerText = 'Activate'
                document.getElementById(theme.id).innerText = 'Active'
                document.getElementById(theme.id).style.setProperty('background-color', 'green')
                document.getElementById(theme.id).style.setProperty('color', 'white')
            }

        }
    }
    maker(theme)
}
function getElmentActive() {
    let themdt = JSON.parse(localStorage.getItem('APP_NAME'))
    console.log(document.getElementById(themdt.theme.id))
    if (document.getElementById(themdt.theme.id)) {
        document.getElementById(themdt.theme.id).innerText = 'Active'
        document.getElementById(themdt.theme.id).className += ' bg-green-500 text-white'
    }

}

const Theme = { maker, Creator, ThemeMapper, queryStyleThemeActive, loader, switchTheme, getElmentActive }
export default Theme;