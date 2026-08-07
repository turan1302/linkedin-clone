import { View, Text, ScrollView } from 'react-native';
import styles from '../../screens/Network/styles';
import { SUGGESTED_PEOPLE } from '../../datas/Network/suggestedPeople';
import { INVITATION_DATA } from '../../datas/Network/invitationData';
import PeopleCard from './PeopleCard';

const SuggestedPeopleSection = () => (
    <View style={styles.section}>
        <Text style={styles.peopleSectionTitle}>
            {INVITATION_DATA.peopleSectionTitle}
        </Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
        >
            {SUGGESTED_PEOPLE.map((person) => (
                <PeopleCard key={person.id} person={person} />
            ))}
        </ScrollView>
    </View>
);

export default SuggestedPeopleSection;
