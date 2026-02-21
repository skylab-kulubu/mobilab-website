import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dy5VY9g4.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/backup.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/api/login.astro.mjs');
const _page5 = () => import('./pages/api/save.astro.mjs');
const _page6 = () => import('./pages/blog/_id_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/competitions.astro.mjs');
const _page9 = () => import('./pages/education/_id_.astro.mjs');
const _page10 = () => import('./pages/education.astro.mjs');
const _page11 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page12 = () => import('./pages/projects/_id_.astro.mjs');
const _page13 = () => import('./pages/projects.astro.mjs');
const _page14 = () => import('./pages/team.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.11_@netlify+blob_e85bf9547e35272afae5868b148f1f59/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/index.astro", _page1],
    ["src/pages/api/backup.ts", _page2],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@key_5a2d826d28340399ed1232a3a3058bea/node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/api/login.ts", _page4],
    ["src/pages/api/save.ts", _page5],
    ["src/pages/blog/[id].astro", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/competitions/index.astro", _page8],
    ["src/pages/education/[id].astro", _page9],
    ["src/pages/education/index.astro", _page10],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@key_5a2d826d28340399ed1232a3a3058bea/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page11],
    ["src/pages/projects/[id].astro", _page12],
    ["src/pages/projects/index.astro", _page13],
    ["src/pages/team/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d8d909d3-a405-4347-a306-bd2f79c98017"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
