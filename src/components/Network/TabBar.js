import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../screens/Network/styles';

const TabBar = ({ activeTab, onTabChange }) => (
    <View style={styles.tabRow}>
        <TouchableOpacity
            style={[styles.tabItem, activeTab === 'grow' && styles.tabItemActive]}
            onPress={() => onTabChange('grow')}
        >
            <Text style={[styles.tabText, activeTab === 'grow' && styles.tabTextActive]}>
                Büyüt
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.tabItem, activeTab === 'news' && styles.tabItemActive]}
            onPress={() => onTabChange('news')}
        >
            <Text style={[styles.tabText, activeTab === 'news' && styles.tabTextActive]}>
                Ağınızdan haberler
            </Text>
        </TouchableOpacity>
    </View>
);

export default TabBar;
