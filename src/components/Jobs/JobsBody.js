import { ScrollView, TouchableOpacity, Text } from 'react-native';
import SectionHeader from './SectionHeader';
import JobCard from './JobCard';
import SearchSection from './SearchSection';
import styles from '../../screens/Jobs/styles';
import { JOB_LISTINGS } from '../../datas/Jobs/jobListings';

const JobsBody = () => (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
    >
        <SectionHeader />
        {JOB_LISTINGS.map((job) => (
            <JobCard key={job.id} job={job} />
        ))}
        <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>Tümünü gör →</Text>
        </TouchableOpacity>
        <SearchSection />
    </ScrollView>
);

export default JobsBody;
