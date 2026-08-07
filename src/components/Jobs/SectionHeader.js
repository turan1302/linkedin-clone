import { View, Text } from 'react-native';
import styles from '../../screens/Jobs/styles';
import { APPLIED_JOB } from '../../datas/Jobs/appliedJob';

const SectionHeader = () => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
            3 gün önce başvurduğunuz iş ilanına benzer
        </Text>
        <Text style={styles.sectionSubtitle}>
            {APPLIED_JOB.title} - {APPLIED_JOB.company}
        </Text>
    </View>
);

export default SectionHeader;
