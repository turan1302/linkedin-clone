export const FEED_POSTS = [
    {
        id: '1',
        socialProof: {
            users: ['ali veli'],
            othersCount: 1,
        },
        author: {
            name: 'ahmet mehmet',
            initials: 'SM',
            followers: '1.234',
            time: '2 saat',
            isPublic: true,
        },
        content: {
            type: 'video',
            overlayText: 'test içerik',
            caption: 'Bu bir test gönderisidir. Gerçek bir kişi veya marka değildir.',
            subtitle: 'Örnek altyazı metni burada görünecek.',
        },
        engagement: {
            reactions: 42,
            comments: 3,
            reposts: 1,
        },
    },
    {
        id: '2',
        author: {
            name: 'ali veli',
            initials: 'AV',
            followers: '567',
            time: '5 saat',
            isPublic: true,
            avatarColor: '#5B2C6F',
        },
        content: {
            type: 'text',
            text: 'Merhaba, bu sadece deneme amaçlı bir paylaşımdır. Lorem ipsum test metni.',
        },
        engagement: {
            reactions: 18,
            comments: 2,
            reposts: 0,
        },
    },
    {
        id: '3',
        socialProof: {
            users: ['ahmet mehmet', 'ali veli'],
            othersCount: 0,
        },
        author: {
            name: 'test kullanıcı',
            initials: 'TK',
            followers: '89',
            time: '1 gün',
            isPublic: false,
            avatarColor: '#0A66C2',
        },
        content: {
            type: 'image',
            caption: 'Test kullanıcı tarafından paylaşılan örnek görsel içerik.',
            imageColor: '#2F3B46',
        },
        engagement: {
            reactions: 7,
            comments: 1,
            reposts: 0,
        },
    },
];
