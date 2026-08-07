import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { COLORS } from '../../screens/Home/styles';
import { formatSocialProof } from './utils';
import VideoContent from './VideoContent';
import EngagementRow from './EngagementRow';
import PostActions from './PostActions';

const PostCard = ({ item }) => {
    const socialProofText = formatSocialProof(item.socialProof);

    return (
        <View style={styles.postCard}>
            {socialProofText ? (
                <View style={styles.socialProofRow}>
                    <View style={styles.socialProofLeft}>
                        <View style={styles.socialProofAvatars}>
                            {item.socialProof.users.slice(0, 2).map((user, index) => (
                                <View
                                    key={user}
                                    style={[
                                        styles.socialProofAvatar,
                                        index > 0 && styles.socialProofAvatarOverlap,
                                    ]}
                                >
                                    <Text style={{ color: '#FFF', fontSize: 7, fontWeight: '700' }}>
                                        {user.charAt(0)}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Text style={styles.socialProofText} numberOfLines={2}>
                            {socialProofText}
                        </Text>
                    </View>
                    <View style={styles.postActionsTop}>
                        <Feather name="more-horizontal" size={18} color={COLORS.textSecondary} />
                        <Feather name="x" size={18} color={COLORS.textSecondary} />
                    </View>
                </View>
            ) : null}

            <View style={styles.authorRow}>
                <View
                    style={[
                        styles.avatar,
                        item.author.avatarColor && { backgroundColor: item.author.avatarColor },
                    ]}
                >
                    <Text
                        style={[
                            styles.avatarText,
                            item.author.avatarColor && { color: '#FFFFFF' },
                        ]}
                    >
                        {item.author.initials}
                    </Text>
                </View>
                <View style={styles.authorInfo}>
                    <View style={styles.authorNameRow}>
                        <Text style={styles.authorName}>{item.author.name}</Text>
                        {!item.isSponsored ? (
                            <TouchableOpacity>
                                <Text style={styles.followText}>• Takip Et</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                    <Text style={styles.authorMeta}>
                        {item.author.followers} takipçi
                        {item.author.time ? ` • ${item.author.time}` : ''}
                        {item.author.isPublic ? ' • ' : ''}
                        {item.author.isPublic ? (
                            <Feather name="globe" size={11} color={COLORS.textSecondary} />
                        ) : null}
                    </Text>
                    {item.author.badge ? (
                        <Text style={styles.badgeText}>{item.author.badge}</Text>
                    ) : null}
                </View>
                {!socialProofText ? (
                    <View style={styles.postActionsTop}>
                        <Feather name="more-horizontal" size={18} color={COLORS.textSecondary} />
                        <Feather name="x" size={18} color={COLORS.textSecondary} />
                    </View>
                ) : null}
            </View>

            {item.content.caption ? (
                <Text style={styles.caption}>{item.content.caption}</Text>
            ) : null}

            {item.content.type === 'video' ? <VideoContent content={item.content} /> : null}

            {item.content.type === 'image' ? (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.imagePlaceholderText}>Görsel içerik</Text>
                </View>
            ) : null}

            {item.content.type === 'text' ? (
                <Text style={styles.caption}>
                    {item.content.text}
                    <Text style={styles.moreText}> daha fazla</Text>
                </Text>
            ) : null}

            <EngagementRow engagement={item.engagement} />
            <PostActions />
        </View>
    );
};

export default PostCard;
