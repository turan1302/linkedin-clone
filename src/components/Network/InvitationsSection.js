import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/Network/styles';
import { INVITATION_DATA } from '../../datas/Network/invitationData';
import SectionHeader from './SectionHeader';

const InvitationsSection = () => (
    <View style={styles.section}>
        <SectionHeader title="Davetiyeler" />
        <View style={styles.invitationRow}>
            <View style={styles.invitationIcon}>
                <MaterialCommunityIcons name="email-outline" size={20} color={COLORS.textSecondary} />
            </View>
            <Text style={styles.invitationText}>{INVITATION_DATA.selectedText}</Text>
        </View>
        <View style={styles.patchCard}>
            <View style={styles.patchIcon}>
                <Text style={styles.patchIconText}>🧩</Text>
            </View>
            <View style={styles.patchContent}>
                <Text style={styles.patchTitle}>{INVITATION_DATA.patchTitle}</Text>
                <Text style={styles.patchSubtitle}>{INVITATION_DATA.patchSubtitle}</Text>
            </View>
            <TouchableOpacity style={styles.outlineButton}>
                <Text style={styles.outlineButtonText}>Çöz</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default InvitationsSection;
