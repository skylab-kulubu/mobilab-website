import { getCollection, getEntry } from 'astro:content';

export async function getGeneralData() {
    const entry = await getEntry('general', 'general');
    return entry?.data || null;
}

export async function getEducationData() {
    const general = await getEntry('general', 'general');
    const section = {
        sectionTitle: general?.data?.educationSection?.sectionTitle,
        description: general?.data?.educationSection?.description
    };
    const items = await getCollection('education');
    return {
        ...section,
        items: items.map(item => ({ ...item.data, id: item.id })).reverse(),
    };
}

export async function getProjectsData() {
    const general = await getEntry('general', 'general');
    const section = {
        sectionTitle: general?.data?.projectsSection?.sectionTitle,
        description: general?.data?.projectsSection?.description
    };
    const items = await getCollection('projects');
    return {
        ...section,
        items: items.map(item => ({ ...item.data, id: item.id })).reverse(),
    };
}

export async function getCompetitionsData() {
    const general = await getEntry('general', 'general');
    const section = {
        sectionTitle: general?.data?.competitionsSection?.sectionTitle,
        description: general?.data?.competitionsSection?.description
    };
    const items = await getCollection('competitions');
    return {
        ...section,
        items: items.map(item => ({ ...item.data, id: item.id })).reverse(),
    };
}

export async function getBlogData() {
    const general = await getEntry('general', 'general');
    const section = {
        sectionTitle: general?.data?.blogSection?.sectionTitle,
        description: general?.data?.blogSection?.description
    };
    const items = await getCollection('blog');
    return {
        ...section,
        items: items.map(item => ({ ...item.data, id: item.id })).reverse(),
    };
}

export async function getTeamData() {
    const general = await getEntry('general', 'general');
    const section = {
        sectionTitle: general?.data?.teamSection?.sectionTitle,
        description: general?.data?.teamSection?.description
    };
    const members = await getCollection('team');
    return {
        ...section,
        members: members.map(item => ({ ...item.data, id: item.id })),
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
