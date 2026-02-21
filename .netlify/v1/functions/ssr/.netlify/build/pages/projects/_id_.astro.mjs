import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { c as getProjectsData, $ as $$Layout } from '../../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const projectsData = await getProjectsData();
  const project = projectsData.items.find((p) => p.id === id);
  if (!project) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.title} - Projeler`, "data-astro-cid-xh7mzcst": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="project-detail section-padding" data-astro-cid-xh7mzcst> <div class="container" data-astro-cid-xh7mzcst> <a href="/#projects" class="back-link" data-astro-cid-xh7mzcst>&larr; Geri Dön</a> <div class="header-content animate-fade-in" data-astro-cid-xh7mzcst> <span class="category" data-astro-cid-xh7mzcst>${project.category}</span> <h1 data-astro-cid-xh7mzcst>${project.title}</h1> <p class="summary" data-astro-cid-xh7mzcst>${project.summary}</p> </div> <div class="featured-image glass-card animate-fade-in"${addAttribute(`background-image: url('${project.image}');`, "style")} data-astro-cid-xh7mzcst></div> <div class="content user-content animate-fade-in" data-astro-cid-xh7mzcst> <p data-astro-cid-xh7mzcst>${project.fullDescription || project.summary}</p> <!-- Additional content could be added here from JSON if structure allows --> </div> </div> </article> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/projects/[id].astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
