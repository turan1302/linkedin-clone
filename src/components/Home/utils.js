export const formatSocialProof = (socialProof) => {
    if (!socialProof) {
        return null;
    }

    const { users, othersCount } = socialProof;

    if (othersCount > 0) {
        return `${users.join(', ')} ve ${othersCount} diğer bağlantı bunu beğendi`;
    }

    if (users.length > 1) {
        return `${users.slice(0, -1).join(', ')} ve ${users[users.length - 1]} bunu beğendi`;
    }

    return `${users[0]} bunu beğendi`;
};
