import { useState} from 'react'
import { 
  View,
  Text,
  TestInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';


import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
import { TextInput } from 'react-native-gesture-handler';

const jobTypes = ["Full Time", "Part Time", "Internship", "Contractor", "Start-up", "Remote"];

const Welcome = () => {
  const router = useRouter();
  const [activejobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activejobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push('/search/${item}')
              }}
            >
              <Text style={styles.tabText(activejobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome