import { c as createComponent, d as createAstro, m as maybeRenderHead, j as renderScript, f as addAttribute, r as renderTemplate, u as unescapeHTML, l as renderHead, i as renderComponent, n as renderSlot } from './astro/server__ufz4yoa.mjs';
import 'piccolore';
/* empty css                        */
import { createReader } from '@keystatic/core/reader';
import { k as keystaticConfig } from './keystatic.config_Byj7vTvr.mjs';
import 'clsx';

const reader = createReader(process.cwd(), keystaticConfig);
async function getGeneralData() {
  const data = await reader.singletons.general.read();
  if (!data) {
    console.warn("Keystatic: General data not found at src/content/general.json");
  }
  return data;
}
async function getEducationData() {
  const section = await reader.singletons.educationSection.read();
  const items = await reader.collections.education.all();
  return {
    ...section,
    items: items.map((item) => ({ ...item.entry, id: item.slug })).reverse()
  };
}
async function getProjectsData() {
  const section = await reader.singletons.projectsSection.read();
  const items = await reader.collections.projects.all();
  return {
    ...section,
    items: items.map((item) => ({ ...item.entry, id: item.slug })).reverse()
  };
}
async function getCompetitionsData() {
  const section = await reader.singletons.competitionsSection.read();
  const items = await reader.collections.competitions.all();
  return {
    ...section,
    items: items.map((item) => ({ ...item.entry, id: item.slug })).reverse()
  };
}
async function getBlogData() {
  const section = await reader.singletons.blogSection.read();
  const items = await reader.collections.blog.all();
  return {
    ...section,
    items: await Promise.all(items.map(async (item) => {
      const { content, ...rest } = item.entry;
      return {
        ...rest,
        id: item.slug,
        content: typeof content === "function" ? await content() : content
      };
    }))
  };
}
async function getTeamData() {
  const section = await reader.singletons.teamSection.read();
  const members = await reader.collections.team.all();
  return {
    ...section,
    members: members.map((item) => ({ ...item.entry }))
  };
}
async function getAllContent() {
  const general = await getGeneralData();
  const education = await getEducationData();
  const projects = await getProjectsData();
  const competitions = await getCompetitionsData();
  const blog = await getBlogData();
  const team = await getTeamData();
  return {
    ...general,
    education,
    projects,
    competitions,
    blog,
    team
  };
}

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteTitle } = Astro2.props;
  const links = [
    { href: "/#about", label: "Hakk\u0131m\u0131zda" },
    { href: "/#education", label: "E\u011Fitimler" },
    { href: "/#projects", label: "Projeler" },
    { href: "/#competitions", label: "Ba\u015Far\u0131lar" },
    { href: "/#team", label: "Ekip" },
    { href: "/#blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" id="main-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <img src="/mobilablogo.svg" alt="MOBILAB Logo" width="120" height="32" data-astro-cid-3ef6ksr2> </a> <nav class="nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")} class="nav-link" data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} </ul> </nav> <a href="/#contact" class="btn-contact" data-astro-cid-3ef6ksr2>İletişim</a> </div> </header> ${renderScript($$result, "E:/SkyLab/Mobilab/Mobilab-Website/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/components/Header.astro", void 0);

const $$BottomNavbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Ana Sayfa", icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>' },
    { href: "/#projects", label: "Projeler", icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>' },
    { href: "/#education", label: "E\u011Fitim", icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>' },
    { href: "/#team", label: "Ekip", icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>' }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="mobile-nav" data-astro-cid-v4aujzbx> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="nav-item" data-astro-cid-v4aujzbx> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v4aujzbx>${unescapeHTML(link.icon)}</svg> <span data-astro-cid-v4aujzbx>${link.label}</span> </a>`)} </nav> `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/components/BottomNavbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const content = await getGeneralData();
  const metaDescr = content?.meta?.description || "MOBILAB - Mobil Uygulama Geli\u015Ftirme Ekibi";
  return renderTemplate`<html lang="tr" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(metaDescr, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#007AFF" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0A84FF" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/svg+xml" href="/mobilabfavicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || content?.meta?.title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "siteTitle": content?.meta?.title, "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "BottomNavbar", $$BottomNavbar, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getCompetitionsData as a, getEducationData as b, getProjectsData as c, getTeamData as d, getAllContent as e, getBlogData as g };
