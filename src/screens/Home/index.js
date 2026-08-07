import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedBody from '../../components/Home/FeedBody';
import styles, { COLORS } from './styles';

const Home = () => (
    <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
        <FeedBody />
    </SafeAreaView>
);

export default Home;
