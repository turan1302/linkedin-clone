import { View, TextInput } from 'react-native';
import styles, { COLORS } from '../../screens/CreatePost/styles';

const Body = ({ postText, onChangeText }) => (
    <View style={styles.inputArea}>
        <TextInput
            style={styles.textInput}
            placeholder="Düşüncelerinizi paylaşın..."
            placeholderTextColor={COLORS.textMuted}
            multiline
            autoFocus
            value={postText}
            onChangeText={onChangeText}
        />
    </View>
);

export default Body;
