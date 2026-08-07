import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/CreatePost/styles';
import { TEST_USER } from '../../datas/CreatePost/testUser';

const Header = ({ canPost, onClose }) => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>

        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{TEST_USER.initials}</Text>
        </View>

        <TouchableOpacity style={styles.audienceButton}>
            <Text style={styles.audienceText}>Herhangi biri</Text>
            <Feather name="chevron-down" size={16} color={COLORS.textPrimary} />
        </TouchableOpacity>

        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.scheduleButton}>
                <Feather name="clock" size={22} color={COLORS.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.postButton,
                    canPost ? styles.postButtonActive : styles.postButtonDisabled,
                ]}
                disabled={!canPost}
            >
                <Text
                    style={[
                        styles.postButtonText,
                        canPost
                            ? styles.postButtonTextActive
                            : styles.postButtonTextDisabled,
                    ]}
                >
                    Postala
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

export const useCreatePostClose = () => {
    const navigation = useNavigation();

    return () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate('HomeNavigator');
        }
    };
};

export default Header;
