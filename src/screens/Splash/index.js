import { View, StatusBar } from 'react-native';
import { useEffect } from 'react';
import * as NavigationService from '../../common/NavigationService';
import Logo from '../../components/Splash/Logo';
import styles from './styles';

const Splash = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            NavigationService.reset();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#1C1E22"
            />
            <Logo />
        </View>
    );
};

export default Splash;
