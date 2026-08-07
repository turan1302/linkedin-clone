import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Network/styles';
import { INVITATION_DATA } from '../../datas/Network/invitationData';

const Header = () => (
    <View style={styles.topBar}>
        <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>{INVITATION_DATA.profileInitials}</Text>
        </View>
        <View style={styles.searchBar}>
            <Feather name="search" size={16} color={COLORS.textMuted} />
            <Text style={styles.searchPlaceholder}>Arama Yap</Text>
        </View>
        <Feather name="message-circle" size={22} color={COLORS.textSecondary} />
    </View>
);

export default Header;
