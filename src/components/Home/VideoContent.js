import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Home/styles';

const VideoContent = ({ content }) => (
    <View style={styles.videoContainer}>
        <Text style={styles.videoOverlayText}>{content.overlayText}</Text>
        {content.subtitle ? (
            <View style={styles.subtitleBox}>
                <Text style={styles.subtitleText}>{content.subtitle}</Text>
            </View>
        ) : null}
        <View style={styles.videoControls}>
            <View style={styles.videoControlButton}>
                <Text style={styles.videoControlText}>CC</Text>
            </View>
            <View style={styles.videoControlButton}>
                <Feather name="volume-x" size={12} color={COLORS.textPrimary} />
            </View>
        </View>
    </View>
);

export default VideoContent;
