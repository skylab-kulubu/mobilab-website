import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage:
        process.env.NODE_ENV === 'production'
            ? {
                kind: 'github',
                repo: 'erselk/Mobilab-Website',
            }
            : {
                kind: 'local',
            },
    singletons: {
        general: singleton({
            label: 'Genel Ayarlar',
            path: 'src/content/general',
            format: { data: 'json' },
            schema: {
                meta: fields.object({
                    title: fields.text({ label: 'Site Başlığı' }),
                    description: fields.text({ label: 'Site Açıklaması', multiline: true }),
                    brandColor: fields.text({ label: 'Marka Rengi (Hex)', defaultValue: '#007AFF' }),
                }),
                hero: fields.object({
                    topTag: fields.text({ label: 'Üst Etiket' }),
                    mainTitle: fields.text({ label: 'Ana Başlık' }),
                    description: fields.text({ label: 'Açıklama', multiline: true }),
                    ctaPrimary: fields.text({ label: 'Birincil Buton Metni' }),
                    ctaSecondary: fields.text({ label: 'İkincil Buton Metni' }),
                    stats: fields.array(
                        fields.object({
                            value: fields.text({ label: 'Değer (Örn: 40+)' }),
                            label: fields.text({ label: 'Etiket' }),
                        }),
                        {
                            label: 'İstatistikler',
                            itemLabel: props => props.fields.label.value,
                        }
                    ),
                }),
                about: fields.object({
                    title: fields.text({ label: 'Başlık' }),
                    subtitle: fields.text({ label: 'Alt Başlık' }),
                    content: fields.text({ label: 'İçerik', multiline: true }),
                    mission: fields.object({
                        title: fields.text({ label: 'Misyon Başlığı' }),
                        items: fields.array(fields.text({ label: 'Madde' }), {
                            label: 'Maddeler',
                            itemLabel: props => props.value,
                        }),
                    }),
                    codeSnippet: fields.object({
                        filename: fields.text({ label: 'Dosya Adı' }),
                        code: fields.text({ label: 'Kod', multiline: true }),
                    }),
                }),
                contact: fields.object({
                    sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                    description: fields.text({ label: 'Açıklama', multiline: true }),
                    email: fields.text({ label: 'E-posta' }),
                    location: fields.text({ label: 'Konum' }),
                    socials: fields.array(
                        fields.object({
                            platform: fields.text({ label: 'Platform' }),
                            url: fields.text({ label: 'URL' }),
                            handle: fields.text({ label: 'Kullanıcı Adı / Etiket' }),
                        }),
                        {
                            label: 'Sosyal Medya',
                            itemLabel: props => props.fields.platform.value,
                        }
                    ),
                }),
                footer: fields.object({
                    text: fields.text({ label: 'Alt Bilgi Metni' }),
                    tagline: fields.text({ label: 'Slogan' }),
                    address: fields.text({ label: 'Adres' }),
                }),
            },
        }),
        educationSection: singleton({
            label: 'Eğitim Bölümü',
            path: 'src/content/sections/education',
            format: { data: 'json' },
            schema: {
                sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
            }
        }),
        projectsSection: singleton({
            label: 'Projeler Bölümü',
            path: 'src/content/sections/projects',
            format: { data: 'json' },
            schema: {
                sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
            }
        }),
        competitionsSection: singleton({
            label: 'Başarılar Bölümü',
            path: 'src/content/sections/competitions',
            format: { data: 'json' },
            schema: {
                sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
            }
        }),
        blogSection: singleton({
            label: 'Blog Bölümü',
            path: 'src/content/sections/blog',
            format: { data: 'json' },
            schema: {
                sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
            }
        }),
        teamSection: singleton({
            label: 'Ekip Bölümü',
            path: 'src/content/sections/team',
            format: { data: 'json' },
            schema: {
                sectionTitle: fields.text({ label: 'Bölüm Başlığı' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
            }
        }),
    },
    collections: {
        education: collection({
            label: 'Eğitimler',
            slugField: 'title',
            path: 'src/content/education/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Başlık' } }),
                description: fields.text({ label: 'Kısa Açıklama' }),
                fullDescription: fields.text({ label: 'Tam Açıklama', multiline: true }),
                image: fields.image({
                    label: 'Görsel',
                    directory: 'public/images/education',
                    publicPath: '/images/education/',
                }),
            },
        }),
        projects: collection({
            label: 'Projeler',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Başlık' } }),
                category: fields.text({ label: 'Kategori' }),
                summary: fields.text({ label: 'Özet' }),
                fullDescription: fields.text({ label: 'Tam Açıklama', multiline: true }),
                image: fields.image({
                    label: 'Görsel',
                    directory: 'public/images/projects',
                    publicPath: '/images/projects/',
                }),
            },
        }),
        competitions: collection({
            label: 'Başarılar',
            slugField: 'title',
            path: 'src/content/competitions/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Başlık' } }),
                event: fields.text({ label: 'Etkinlik' }),
                date: fields.text({ label: 'Tarih' }),
                category: fields.text({ label: 'Kategori' }),
                status: fields.text({ label: 'Durum/Sıralama' }),
                description: fields.text({ label: 'Açıklama', multiline: true }),
                image: fields.image({
                    label: 'Görsel',
                    directory: 'public/images/competitions',
                    publicPath: '/images/competitions/',
                }),
            },
        }),
        blog: collection({
            label: 'Blog Yazıları',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Başlık' } }),
                date: fields.text({ label: 'Tarih' }),
                excerpt: fields.text({ label: 'Özet' }),
                content: fields.markdoc({
                    label: 'İçerik',
                    options: {
                        image: {
                            directory: 'public/images/blog',
                            publicPath: '/images/blog/',
                        },
                    },
                }),
                image: fields.image({
                    label: 'Kapak Görseli',
                    directory: 'public/images/blog',
                    publicPath: '/images/blog/',
                }),
            },
        }),
        team: collection({
            label: 'Ekip Üyeleri',
            slugField: 'name',
            path: 'src/content/team/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({ name: { label: 'Ad Soyad' } }),
                role: fields.text({ label: 'Rol' }),
                image: fields.image({
                    label: 'Görsel',
                    directory: 'public/images/team',
                    publicPath: '/images/team/',
                }),
            },
        }),
    },
});
