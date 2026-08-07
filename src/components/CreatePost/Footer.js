import { View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/CreatePost/styles';

const Footer = () => (
    <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomIconButton}>
            <MaterialCommunityIcons
                name="image-outline"
                size={26}
                color={COLORS.textSecondary}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIconButton}>
            <Feather name="plus" size={26} color={COLORS.textSecondary} />
        </TouchableOpacity>
    </View>
);

export default Footer;
