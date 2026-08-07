import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { COLORS } from '../../screens/Jobs/styles';

const JobCard = ({ job }) => (
    <View style={styles.jobCard}>
        <TouchableOpacity style={styles.dismissButton}>
            <Feather name="x" size={18} color={COLORS.textMuted} />
        </TouchableOpacity>

        <View style={[styles.companyLogo, { backgroundColor: job.logoColor }]}>
            <Text style={styles.logoText}>{job.initials}</Text>
        </View>

        <View style={styles.jobContent}>
            <View style={styles.jobTitleRow}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                {job.isVerified ? (
                    <MaterialCommunityIcons
                        name="check-decagram"
                        size={16}
                        color={COLORS.verified}
                    />
                ) : null}
            </View>
            <Text style={styles.companyName}>{job.company}</Text>
            <Text style={styles.jobLocation}>{job.location}</Text>

            <View style={styles.statusRow}>
                <MaterialCommunityIcons
                    name="clock-check-outline"
                    size={14}
                    color={COLORS.statusGreen}
                />
                <Text style={styles.statusText}>{job.status}</Text>
            </View>

            {job.connection ? (
                <View style={styles.connectionRow}>
                    <View style={styles.connectionAvatar}>
                        <Text style={styles.connectionAvatarText}>
                            {job.connection.initials}
                        </Text>
                    </View>
                    <Text style={styles.connectionText}>
                        1 bağlantı burada çalışıyor
                    </Text>
                </View>
            ) : null}

            <Text style={styles.jobMeta}>
                {job.meta}
                {job.hasEasyApply ? (
                    <MaterialCommunityIcons name="linkedin" size={11} color={COLORS.textMuted} />
                ) : null}
            </Text>
        </View>
    </View>
);

export default JobCard;
