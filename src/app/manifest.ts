import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ViveReach Protocol',
        short_name: 'ViveReach',
        description: 'Secure VC Funding for Startups. Access 50,000+ Investors.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#d9ff00',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
