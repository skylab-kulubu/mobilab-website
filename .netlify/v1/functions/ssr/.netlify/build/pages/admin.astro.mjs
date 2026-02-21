import { c as createComponent, d as createAstro } from '../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/keystatic");
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/admin/index.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
