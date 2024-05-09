# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.


project-root/
├── src/
│   ├── assets/              # Static assets like images, fonts, etc.
│   ├── components/          # Reusable Vue components
│   ├── layouts/             # Layout components (if needed)
│   ├── plugins/             # Vue plugins
│   ├── router/              # Vue Router configuration
│   ├── store/               # Pinia store modules
│   ├── styles/              # Global styles (CSS, SCSS, etc.)
│   ├── utils/               # Utility functions, helpers, constants, etc.
│   ├── views/               # Top-level views or pages
│   ├── App.vue              # Root Vue component
│   └── main.js              # Vue application entry point
├── public/                  # Public assets
├── tests/                   # Test files (unit tests, e2e tests, etc.)
├── dist/                    # Build output (generated automatically)
├── node_modules/            # Dependencies (generated automatically)
├── vite.config.js           # Vite configuration file
├── package.json             # Project metadata and dependencies
└── README.md          