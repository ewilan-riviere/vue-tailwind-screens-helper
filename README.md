# **Vue Tailwind Screens**

[![](https://img.shields.io/npm/v/vue-tailwind-screens.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/vue-tailwind-screens)
[![](https://img.shields.io/github/license/ewilan-riviere/vuepress-theme-useweb.svg?style=flat-square&color=f05032&logo=git&logoColor=ffffff)](https://github.com/ewilan-riviere/vue-tailwind-screens/blob/master/LICENSE)

[![node.js](https://img.shields.io/static/v1?label=Node.js&message=v11.15&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en/)
[![vue.js](https://img.shields.io/static/v1?label=Vue.js&message=v2.6&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)

Display a header to code blocks in markdown for example with color of language and option for file path. It's for guides about plugins or frameworks.

![vue-tailwind-screens](./lib/assets/vue-tailwind-screens-example.jpg)

## **Documentation**

Install it with Yarn or NPM

```bash
yarn add -D vue-tailwind-screens
```

**OR**

```bash
npm i vue-tailwind-screens --save-dev
```

Import it, ES6 way, in `main.js` / `app.js` file

```js
import TailwindScreens from 'vue-tailwind-screens'

Vue.use(TailwindScreens)
```

### *Usage*

Use it in a `.vue` file

```vue
<template>
  <div>
    <tailwind-screens />
  </div>
</template>
```

### *API*

| Props        | Type    | Default | Describe                                                                   |
|--------------|---------|---------|----------------------------------------------------------------------------|
| ext          | String  | ''      | Extension of file, display it on header and get correct color if available |
| path         | String  | ''      | Path of the file, useful if it's guide for a framework                     |
| hasMargin    | Boolean | true    | To get margin top and bottom                               |
| notReachable | Boolean | false   | To apply a layer to prevent user to get code                               |

## **License**

**MIT** &copy; [**@ewilan-riviere**](https://github.com/ewilan-riviere)
