const defaultTheme = 'light'
const currentTheme = localStorage.getItem('theme')
const getPreferTheme = () => {
    if (currentTheme) return currentTheme
    if (defaultTheme) return defaultTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
let themeValue = getPreferTheme()
const reflectPreference = () => {
    document.documentElement.dataset.darkmode = themeValue
    const body = document.body
    if (body) {
        const computedStyles = window.getComputedStyle(body)
        const bgColor = computedStyles.backgroundColor
        document.querySelector('meta[name="theme-color"]').setAttribute('content', bgColor)
    }
}
reflectPreference()
window.addEventListener('load', () => {
    const darkSwitch = document.getElementById('dark-switch')
    darkSwitch.setAttribute('aria-label', `dark mode ${themeValue === 'dark' ? 'on' : 'off'}`)
})
