import { useState } from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header, { useCreatePostClose } from '../../components/CreatePost/Header';
import Body from '../../components/CreatePost/Body';
import Footer from '../../components/CreatePost/Footer';
import styles, { COLORS } from './styles';

const CreatePost = () => {
    const [postText, setPostText] = useState('');
    const canPost = postText.trim().length > 0;
    const handleClose = useCreatePostClose();

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <Header canPost={canPost} onClose={handleClose} />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <Body postText={postText} onChangeText={setPostText} />
                <Footer />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CreatePost;
