import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Network/styles';

const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Feather name="chevron-right" size={20} color={COLORS.textSecondary} />
    </View>
);

export default SectionHeader;
