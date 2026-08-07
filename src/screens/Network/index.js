import { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Network/Header';
import TabBar from '../../components/Network/TabBar';
import NetworkBody from '../../components/Network/NetworkBody';
import styles, { COLORS } from './styles';

const Network = () => {
    const [activeTab, setActiveTab] = useState('grow');

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <Header />
            <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
            <NetworkBody />
        </SafeAreaView>
    );
};

export default Network;
