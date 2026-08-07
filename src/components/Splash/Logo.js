import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../screens/Splash/styles';

const Logo = () => (
    <View style={styles.outerRing}>
        <View style={styles.glowRing}>
            <View style={styles.logoCircle}>
                <Text style={styles.logoText}>in</Text>
            </View>
        </View>
    </View>
);

export default Logo;
