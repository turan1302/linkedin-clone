import { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Notifications/Header';
import FilterBar from '../../components/Notifications/FilterBar';
import NotificationsBody from '../../components/Notifications/NotificationsBody';
import styles, { COLORS } from './styles';

const Notifications = () => {
    const [activeFilter, setActiveFilter] = useState('Tümü');

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <Header />
            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <NotificationsBody />
        </SafeAreaView>
    );
};

export default Notifications;
