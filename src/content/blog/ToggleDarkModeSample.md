---
title: 笔记#01 | 简单实现网站夜间模式切换
date: 2024-02-05
category: '笔记'
tags:
    - 'web'
    - '样例'
---

```html
<html data-darkmode='light'>
<!-- ... -->
<button id="dark-switch">
    <i id="moon-icon"></i>
    <i id="sun-icon"></i>
</button>
<!-- ... -->
</html>
```

```css
/*
    利用高优先级选择器 [data-darkmode='dark']
    覆盖原有样式来实现两个 icon 的显示隐藏
    * Use the high priority of selector [data-darkmode='dark']
      to overwrite the original style to implement icon switching.

    以下两组样式表选择器优先级分别是：
    1. #sun-icon | 优先级 1.0.0 | display none
    2. [data-darkmode='dark'] #moon-icon | 优先级 1.1.0 | display none
        当根标签 data-darkmode='dark' 时覆盖 3 -> #moon-icon | 优先级 1.0.0 | display block

    3. #moon-icon | 优先级 1.0.0 | display block
    4. [data-darkmode='dark'] #sun-icon | 优先级 1.1.0 | display block
        当根标签 data-darkmode='dark' 时覆盖 1 -> #sun-icon | 优先级 1.0.0 | display none
*/

#sun-icon,
[data-darkmode='dark'] #moon-icon {
    display: none;
}

#moon-icon,
[data-darkmode='dark'] #sun-icon {
    display: block;
}
```

```js
const defaultTheme = 'light' // 'light' | 'dark'
// 获取浏览器 localStorage 存储的 theme 值
const currentTheme = localStorage.getItem('theme')

const getPreferTheme = () => {
    // 如果浏览器 localStorage 存储存在 theme 值就返回本地值
    if (currentTheme) return currentTheme
    // 否则返回默认值
    if (defaultTheme) return defaultTheme
    // 或者返回用户设备的模式值
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

let themeValue = getPreferTheme()

const setPreferTheme = () => {
    localStorage.setItem('theme', themeValue)
    reflectPreference()
}

const reflectPreference = () => {
    // 设置根标签 data-darkmode 的值
    document.documentElement.dataset.darkmode = themeValue
    const body = document.body
    if (body) {
        const computedStyles = window.getComputedStyle(body)
        const bgColor = computedStyles.backgroundColor
        // 设置 body 的背景颜色到使用 theme-color 的 meta 标签
        document.querySelector('meta[name="theme-color"]').setAttribute('content', bgColor)
    }
}

// 阻塞页面渲染，提前设置好 data-darkmode 值避免首屏加载闪烁
reflectPreference()

// 同步自系统的夜间模式
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
    themeValue = isDark ? 'dark' : 'light'
    setPreferTheme()
})

// 页面已加载完成……

const darkSwitch = document.getElementById('dark-switch')

darkSwitch.addEventListener('click', () => {
        // 节流，避免快速切换造成错乱
        darkSwitch.disabled = true
        if (darkSwitch.disabled) return

        // 设置 data-darkmode 值并存入 localStorage 的 theme 字段
        dataset.darkmode = dataset.darkmode === 'light' ? 'dark' : 'light'
        globalThis.localStorage.setItem('theme', dataset.darkmode)

        // 200ms 的禁止切换
        setTimeout(() => {
            darkSwitch.disabled = false
        }, 200)
    })
```
