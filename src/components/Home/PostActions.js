import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Home/styles';

const PostActions = () => (
    <View style={styles.actionBar}>
        {[
            { icon: 'thumbs-up', label: 'Beğendim' },
            { icon: 'message-circle', label: 'Yorum Yap' },
            { icon: 'repeat', label: 'Yeniden yayınla' },
            { icon: 'send', label: 'Gönder' },
        ].map((action) => (
            <TouchableOpacity key={action.label} style={styles.actionButton}>
                <Feather name={action.icon} size={18} color={COLORS.textSecondary} />
                <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

export default PostActions;
