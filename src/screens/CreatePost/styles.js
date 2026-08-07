import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#1C2226',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B7BF',
    textMuted: '#8A9199',
    buttonDisabledBg: '#4A4F55',
    buttonDisabledText: '#8A9199',
    buttonActiveBg: '#70B5F9',
    buttonActiveText: '#1C2226',
    avatarBg: '#38434F',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 10,
    },
    closeButton: {
        padding: 4,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.avatarBg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: COLORS.textPrimary,
        fontSize: 13,
        fontWeight: '700',
    },
    audienceButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flex: 1,
    },
    audienceText: {
        color: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: '600',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    scheduleButton: {
        padding: 4,
    },
    postButton: {
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        minWidth: 72,
        alignItems: 'center',
    },
    postButtonDisabled: {
        backgroundColor: COLORS.buttonDisabledBg,
    },
    postButtonActive: {
        backgroundColor: COLORS.buttonActiveBg,
    },
    postButtonText: {
        fontSize: 14,
        fontWeight: '700',
    },
    postButtonTextDisabled: {
        color: COLORS.buttonDisabledText,
    },
    postButtonTextActive: {
        color: COLORS.buttonActiveText,
    },
    inputArea: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    textInput: {
        flex: 1,
        color: COLORS.textPrimary,
        fontSize: 18,
        lineHeight: 26,
        textAlignVertical: 'top',
        padding: 0,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 20,
    },
    bottomIconButton: {
        padding: 4,
    },
});
