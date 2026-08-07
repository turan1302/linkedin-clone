import { StyleSheet } from 'react-native';

const LOGO_SIZE = 80;
const GLOW_SIZE = 124;
const OUTER_SIZE = 132;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1E22',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerRing: {
        width: OUTER_SIZE,
        height: OUTER_SIZE,
        borderRadius: OUTER_SIZE / 2,
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    glowRing: {
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        borderRadius: GLOW_SIZE / 2,
        backgroundColor: 'rgba(88, 42, 68, 0.55)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoCircle: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        borderRadius: LOGO_SIZE / 2,
        backgroundColor: '#0A66C2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 38,
        fontWeight: '700',
        letterSpacing: -1.5,
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
});
