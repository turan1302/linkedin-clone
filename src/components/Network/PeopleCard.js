import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Network/styles';

const PeopleCard = ({ person }) => (
    <View style={styles.peopleCard}>
        <View style={styles.peopleCardBanner}>
            <TouchableOpacity style={styles.peopleCardClose}>
                <Feather name="x" size={16} color={COLORS.textSecondary} />
            </TouchableOpacity>
        </View>
        <View style={styles.peopleCardBody}>
            <View style={styles.peopleAvatar}>
                <Text style={styles.peopleAvatarText}>{person.initials}</Text>
            </View>
            <Text style={styles.peopleName}>{person.name}</Text>
            <Text style={styles.peopleHeadline} numberOfLines={2}>
                {person.headline}
            </Text>
            <View style={styles.mutualRow}>
                <View style={styles.mutualAvatars}>
                    <View style={styles.mutualAvatar} />
                    <View style={[styles.mutualAvatar, styles.mutualAvatarOverlap]} />
                </View>
                <Text style={styles.mutualText} numberOfLines={1}>
                    {person.mutual}
                </Text>
            </View>
            <TouchableOpacity style={styles.connectButton}>
                <Text style={styles.connectButtonText}>Bağlantı kur</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default PeopleCard;
