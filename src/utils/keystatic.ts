import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getGeneralData() {
    const data = await reader.singletons.general.read();
    if (!data) {
        console.warn('Keystatic: General data not found at src/content/general.json');
    }
    return data;
}

export async function getEducationData() {
    const section = await reader.singletons.educationSection.read();
    const items = await reader.collections.education.all();
    return {
        ...section,
        items: items.map(item => ({ ...item.entry, id: item.slug })).reverse(),
    };
}

export async function getProjectsData() {
    const section = await reader.singletons.projectsSection.read();
    const items = await reader.collections.projects.all();
    return {
        ...section,
        items: items.map(item => ({ ...item.entry, id: item.slug })).reverse(),
    };
}

export async function getCompetitionsData() {
    const section = await reader.singletons.competitionsSection.read();
    const items = await reader.collections.competitions.all();
    return {
        ...section,
        items: items.map(item => ({ ...item.entry, id: item.slug })).reverse(),
    };
}

export async function getBlogData() {
    const section = await reader.singletons.blogSection.read();
    const items = await reader.collections.blog.all();
    return {
        ...section,
        items: await Promise.all(items.map(async item => {
            const { content, ...rest } = item.entry;
            // Markdoc content needs to be handled if used, but for now we just return the raw entry
            return {
                ...rest,
                id: item.slug,
                content: typeof content === 'function' ? await content() : content
            };
        })),
    };
}

export async function getTeamData() {
    const section = await reader.singletons.teamSection.read();
    const members = await reader.collections.team.all();
    return {
        ...section,
        members: members.map(item => ({ ...item.entry })),
    };
}

export async function getAllContent() {
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
        team,
    };
}
