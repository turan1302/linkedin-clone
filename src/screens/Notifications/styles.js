import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#000000',
    unreadBg: '#1A2633',
    card: '#1B1F23',
    border: '#38434F',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B7BF',
    textMuted: '#8A9199',
    unreadDot: '#70B5F9',
    filterActiveBg: '#057642',
    filterActiveText: '#000000',
    previewBg: '#2A2F35',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        gap: 10,
    },
    profileAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileAvatarText: {
        color: COLORS.textPrimary,
        fontSize: 12,
        fontWeight: '700',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        gap: 8,
    },
    searchPlaceholder: {
        color: COLORS.textMuted,
        fontSize: 14,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    filterRow: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 8,
    },
    filterChip: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginRight: 8,
    },
    filterChipActive: {
        backgroundColor: COLORS.filterActiveBg,
        borderColor: COLORS.filterActiveBg,
    },
    filterChipText: {
        color: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: '600',
    },
    filterChipTextActive: {
        color: COLORS.filterActiveText,
    },
    listContent: {
        paddingBottom: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingRight: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.border,
    },
    notificationItemUnread: {
        backgroundColor: COLORS.unreadBg,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.unreadDot,
        marginLeft: 8,
        marginRight: 4,
        marginTop: 20,
    },
    unreadDotPlaceholder: {
        width: 8,
        marginLeft: 8,
        marginRight: 4,
    },
    notificationAvatar: {
        width: 48,
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    notificationAvatarRound: {
        borderRadius: 24,
    },
    avatarText: {
        color: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: '700',
    },
    notificationContent: {
        flex: 1,
        paddingRight: 8,
    },
    notificationText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        lineHeight: 20,
    },
    notificationName: {
        color: COLORS.textPrimary,
        fontWeight: '700',
    },
    notificationMeta: {
        color: COLORS.textMuted,
        fontSize: 12,
        marginTop: 6,
    },
    previewBox: {
        backgroundColor: COLORS.previewBg,
        borderRadius: 4,
        padding: 10,
        marginTop: 8,
    },
    previewText: {
        color: COLORS.textSecondary,
        fontSize: 13,
        lineHeight: 18,
    },
    notificationRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        minHeight: 48,
    },
    notificationTime: {
        color: COLORS.textMuted,
        fontSize: 12,
    },
    onlineDot: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#057642',
        borderWidth: 2,
        borderColor: COLORS.background,
    },
    avatarWrapper: {
        position: 'relative',
        marginRight: 12,
    },
});
