import React from 'react';
import Link from 'next/link';

const sections = [
    {
        title: 'About',
        description: 'Learn more about Bustop TV, our mission, and our story.',
        href: '/about',
    },
    {
        title: 'Awards',
        description: 'Discover the awards and recognition Bustop TV has received.',
        href: '/awards',
    },
    {
        title: 'Clients',
        description: 'See some of the amazing clients and partners we have worked with.',
        href: '/clients',
    },
    {
        title: 'Contact',
        description: 'Get in touch with the Bustop TV team for inquiries or collaborations.',
        href: '/contact',
    },
    {
        title: 'News',
        description: 'Stay updated with the latest news and updates from Bustop TV.',
        href: 'https://bustop.tv',
        external: true,
    },
    {
        title: 'Programs',
        description: 'Explore our diverse range of programs and shows.',
        href: '/programs',
    },
    {
        title: 'Projects',
        description: 'Check out our featured projects and creative work.',
        href: '/projects',
    },
];

const SectionsOverview: React.FC = () => (
    <section style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '48px 0', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        {sections.map((section) => (
            <div
                key={section.href}
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                    padding: 32,
                    width: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <h2 style={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: '1.5rem', color: '#E30613', marginBottom: 12 }}>{section.title}</h2>
                <p style={{ fontFamily: 'Josefin Sans', fontSize: '1.05rem', marginBottom: 24 }}>{section.description}</p>
                <Link
                    href={section.href}
                    style={{
                        background: '#E30613',
                        color: '#fff',
                        padding: '8px 20px',
                        borderRadius: 24,
                        fontFamily: 'Josefin Sans',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'background 0.2s',
                    }}
                >
                    Visit {section.title}
                </Link>
            </div>
        ))}
    </section>
);

export default SectionsOverview; 