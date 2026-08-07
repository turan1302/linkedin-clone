import { View, ScrollView } from 'react-native';
import styles from '../../screens/Network/styles';
import InvitationsSection from './InvitationsSection';
import SectionHeader from './SectionHeader';
import PremiumViewersSection from './PremiumViewersSection';
import SuggestedPeopleSection from './SuggestedPeopleSection';

const NetworkBody = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <InvitationsSection />
        <View style={styles.section}>
            <SectionHeader title="Ağımı yönet" />
        </View>
        <PremiumViewersSection />
        <SuggestedPeopleSection />
    </ScrollView>
);

export default NetworkBody;
