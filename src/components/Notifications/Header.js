import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/Notifications/styles';

const Header = () => (
    <View style={styles.topBar}>
        <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>TK</Text>
        </View>
        <View style={styles.searchBar}>
            <Feather name="search" size={16} color={COLORS.textMuted} />
            <Text style={styles.searchPlaceholder}>Arama Yap</Text>
        </View>
        <View style={styles.headerIcons}>
            <Feather name="settings" size={22} color={COLORS.textSecondary} />
            <MaterialCommunityIcons
                name="message-processing-outline"
                size={22}
                color={COLORS.textSecondary}
            />
        </View>
    </View>
);

export default Header;
