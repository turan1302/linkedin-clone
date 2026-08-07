import { ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from '../../screens/Notifications/styles';
import { FILTERS } from '../../datas/Notifications/filters';

const FilterBar = ({ activeFilter, onFilterChange }) => (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
    >
        {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
                <TouchableOpacity
                    key={filter}
                    style={[styles.filterChip, isActive && styles.filterChipActive]}
                    onPress={() => onFilterChange(filter)}
                >
                    <Text
                        style={[
                            styles.filterChipText,
                            isActive && styles.filterChipTextActive,
                        ]}
                    >
                        {filter}
                    </Text>
                </TouchableOpacity>
            );
        })}
    </ScrollView>
);

export default FilterBar;
