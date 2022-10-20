# Nuxt 3, TS, Pinia - Boilerplate

Repository - [GitHub](https://github.com/OziOcb/Nuxt3-TS-Pinia-Boilerplate)

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

&nbsp;
# My Notes

## TypeScript

- types/interfaces for elements used inside <head>
https://github.com/harlan-zw/zhead/tree/main/packages/schema/src

- Type checking on Dev is set to true, if you need to turn it off (for performance reasons) go to the `.nuxt.config.ts` file and set `typescript.typeCheck` to `false`

&nbsp;
## Icons
- This boilerplate comes with the `nuxt-icon` packaged - [github](https://github.com/nuxt-modules/icon)
- All icons that are available when using `nuxt-icon` package - [icones.js.org](https://icones.js.org/collection/ci)

### Usage 👌

**Props:**
- `name` (required): icon name, emoji or global component name
- `size`: icon size (default: `1em`)

#### Iconify dataset

You can use any name from the https://icones.js.org collection:

```html
<Icon name="uil:github" />
```

#### Emoji

```html
<Icon name="🚀" />
```

#### Vue component

```html
<Icon name="NuxtIcon" />
```

Note that `NuxtIcon` needs to be inside `components/global/` folder (see [example](./playground/components/global/NuxtIcon.vue)).


&nbsp;
## Pinia
- This boilerplate uses `Pinia` as a state management solution
- It auto-imports the `defineStore()`. This means you no longer have to manually import these from pinia whenever your defining your stores
- Also, it auto-imports every file that's inside `@/stores/`
```js
// stores/counter.ts
export const useCounterStore = defineStore('counter', {
  //         ^^^^^^^^^^^^^^^
  // ...
})
```

```js
// someComponent.vue
import { useCounterStore } from '@/stores/counter' // this line can be omitted thanks to auto-import!
const countStore = useCounterStore()
```

&nbsp;
## .ENV
- To see how to work with `environment variables`, read this - [nuxt docs](https://v3.nuxtjs.org/getting-started/configuration)