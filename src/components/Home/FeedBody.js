import { FlatList } from 'react-native';
import PostCard from './PostCard';
import styles from '../../screens/Home/styles';
import { FEED_POSTS } from '../../datas/Home/feedPosts';

const FeedBody = () => (
    <FlatList
        data={FEED_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
    />
);

export default FeedBody;
