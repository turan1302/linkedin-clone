import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../screens/Jobs/styles';

const SearchSection = () => (
    <View style={styles.searchSection}>
        <View style={styles.illustration}>
            <View style={styles.illustrationDesk}>
                <Text style={styles.illustrationEmoji}>💼</Text>
            </View>
        </View>
        <Text style={styles.searchTitle}>İş ilanlarını arayın</Text>
        <Text style={styles.searchDescription}>
            Bir arama başlatın ve arama kriterlerinize uyan fırsatları paylaşalım
        </Text>
        <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Şimdi arayın</Text>
        </TouchableOpacity>
    </View>
);

export default SearchSection;
