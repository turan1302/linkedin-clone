import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/Network/styles';
import { PROFILE_VIEWERS } from '../../datas/Network/profileViewers';

const PremiumViewersSection = () => (
    <View style={styles.section}>
        <View style={styles.premiumCard}>
            <View style={styles.premiumHeader}>
                <View style={styles.premiumTitleRow}>
                    <MaterialCommunityIcons name="crown" size={16} color={COLORS.premium} />
                    <Text style={styles.premiumBadge}>Premium</Text>
                    <Text style={styles.premiumTitle}>Profilinizi görüntüleyen kişiler</Text>
                </View>
                <Feather name="x" size={18} color={COLORS.textSecondary} />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
            >
                {PROFILE_VIEWERS.map((viewer) => (
                    <View key={viewer.id} style={styles.viewerCard}>
                        <View style={styles.viewerAvatar} />
                        <Text style={styles.viewerTitle} numberOfLines={2}>
                            {viewer.title}
                        </Text>
                        <TouchableOpacity style={styles.outlineButton}>
                            <Text style={styles.outlineButtonText}>Profili görüntüle</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
);

export default PremiumViewersSection;
