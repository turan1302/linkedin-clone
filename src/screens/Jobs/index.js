import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobsBody from '../../components/Jobs/JobsBody';
import styles, { COLORS } from './styles';

const Jobs = () => (
    <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
        <JobsBody />
    </SafeAreaView>
);

export default Jobs;
