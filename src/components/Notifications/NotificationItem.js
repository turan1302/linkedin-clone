import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Notifications/styles';

const NotificationItem = ({ item }) => (
    <View
        style={[
            styles.notificationItem,
            item.isUnread && styles.notificationItemUnread,
        ]}
    >
        {item.isUnread ? (
            <View style={styles.unreadDot} />
        ) : (
            <View style={styles.unreadDotPlaceholder} />
        )}

        {item.isRound ? (
            <View style={styles.avatarWrapper}>
                <View
                    style={[
                        styles.notificationAvatar,
                        styles.notificationAvatarRound,
                        { backgroundColor: item.avatarColor },
                    ]}
                >
                    <Text style={styles.avatarText}>{item.initials}</Text>
                </View>
                {item.isOnline ? <View style={styles.onlineDot} /> : null}
            </View>
        ) : (
            <View
                style={[
                    styles.notificationAvatar,
                    { backgroundColor: item.avatarColor },
                ]}
            >
                <Text style={styles.avatarText}>{item.initials}</Text>
            </View>
        )}

        <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>
                <Text style={styles.notificationName}>{item.author}</Text>
                {' '}
                {item.message}
            </Text>
            {item.meta ? (
                <Text style={styles.notificationMeta}>{item.meta}</Text>
            ) : null}
            {item.preview ? (
                <View style={styles.previewBox}>
                    <Text style={styles.previewText} numberOfLines={2}>
                        {item.preview}
                    </Text>
                </View>
            ) : null}
        </View>

        <View style={styles.notificationRight}>
            <Text style={styles.notificationTime}>{item.time}</Text>
            <Feather name="more-vertical" size={18} color={COLORS.textMuted} />
        </View>
    </View>
);

export default NotificationItem;
