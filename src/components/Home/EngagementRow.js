import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/Home/styles';

const EngagementRow = ({ engagement }) => (
    <View style={styles.engagementRow}>
        <View style={styles.reactionsLeft}>
            <View style={styles.reactionIcons}>
                <View style={[styles.reactionIcon, { backgroundColor: COLORS.reactionBlue }]}>
                    <Feather name="thumbs-up" size={10} color="#FFFFFF" />
                </View>
                <View style={[styles.reactionIcon, { backgroundColor: COLORS.reactionGreen }]}>
                    <MaterialCommunityIcons name="lightbulb-on" size={10} color="#FFFFFF" />
                </View>
                <View style={[styles.reactionIcon, { backgroundColor: COLORS.reactionRed }]}>
                    <Feather name="heart" size={10} color="#FFFFFF" />
                </View>
            </View>
            <Text style={styles.reactionCount}>{engagement.reactions}</Text>
        </View>
        <Text style={styles.engagementMeta}>
            {engagement.comments} yorum • {engagement.reposts} yeniden yayınlama
        </Text>
    </View>
);

export default EngagementRow;
