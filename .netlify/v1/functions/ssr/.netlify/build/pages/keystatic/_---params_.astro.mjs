import { c as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/SkyLab/Mobilab/Mobilab-Website/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_5a2d826d28340399ed1232a3a3058bea/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "E:/SkyLab/Mobilab/Mobilab-Website/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_5a2d826d28340399ed1232a3a3058bea/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_5a2d826d28340399ed1232a3a3058bea/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
