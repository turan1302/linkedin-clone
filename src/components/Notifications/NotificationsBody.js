import { FlatList } from 'react-native';
import NotificationItem from './NotificationItem';
import styles from '../../screens/Notifications/styles';
import { NOTIFICATIONS } from '../../datas/Notifications/notifications';

const NotificationsBody = () => (
    <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
    />
);

export default NotificationsBody;
