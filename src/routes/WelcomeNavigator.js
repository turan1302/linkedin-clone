import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Platform, Text, StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import Network from '../screens/Network';
import PostNavigator from './PostNavigator';
import NotificationNavigator from './NotificationNavigator';
import JobsNavigator from './JobsNavigator';

const Tab = createBottomTabNavigator();

const TAB_COLOR_ACTIVE = '#FFFFFF';
const TAB_COLOR_INACTIVE = '#A8A8A8';
const TAB_LABEL_ACTIVE = '#FFFFFF';
const TAB_BAR_BG = '#1D2226';

const TAB_CONFIG = {
    HomeNavigator: { label: 'Ana Sayfa', icon: 'home', iconFamily: 'feather' },
    Network: { label: 'Profesyonel Ağım', icon: 'users', iconFamily: 'feather' },
    CreatePost: { label: 'Yayınla', icon: 'plus', iconFamily: 'feather', isSpecial: true },
    Notifications: { label: 'Bildirimler', icon: 'bell', iconFamily: 'feather' },
    Jobs: { label: 'İş İlanları', icon: 'briefcase', iconFamily: 'feather' },
};

const PlaceholderTab = ({ title }) => (
    <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>{title}</Text>
    </View>
);

const CreatePostTab = () => <PostNavigator />;
const NotificationsTab = () => <NotificationNavigator />;
const JobsTab = () => <JobsNavigator />;

const renderTabIcon = (tabConfig, color) => {
    if (tabConfig?.isSpecial) {
        return (
            <View
                style={{
                    width: 24,
                    height: 24,
                    borderWidth: 1.5,
                    borderColor: color,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Feather name="plus" size={16} color={color} />
            </View>
        );
    }

    const iconName = tabConfig?.icon ?? 'circle';
    const size = 22;

    if (tabConfig?.iconFamily === 'material') {
        return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
    }

    return <Feather name={iconName} size={size} color={color} />;
};

const WelcomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = ['Menu', 'CreatePost'];
                const tabConfig = TAB_CONFIG[route.name];

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR_ACTIVE,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: focused ? '700' : '500',
                                color: focused ? TAB_LABEL_ACTIVE : TAB_COLOR_INACTIVE,
                                marginTop: 2,
                            }}
                            numberOfLines={1}
                        >
                            {tabConfig?.label}
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? TAB_COLOR_ACTIVE : TAB_COLOR_INACTIVE;

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {renderTabIcon(tabConfig, color)}
                            </View>
                        );
                    },
                    tabBarStyle: tabBarHidden.includes(routeName)
                        ? { display: 'none' }
                        : {
                            backgroundColor: TAB_BAR_BG,
                            borderTopWidth: StyleSheet.hairlineWidth,
                            borderTopColor: '#38434F',
                            height: Platform.OS === 'ios' ? 88 : 68,
                            paddingTop: 8,
                            paddingBottom: Platform.OS === 'ios' ? 26 : 10,
                            elevation: 0,
                        },
                    tabBarItemStyle: {
                        paddingVertical: 2,
                    },
                };
            }}
        >
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
            <Tab.Screen name="Network" component={Network} />
            <Tab.Screen name="CreatePost" component={CreatePostTab} />
            <Tab.Screen name="Notifications" component={NotificationsTab} />
            <Tab.Screen name="Jobs" component={JobsTab} />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;
