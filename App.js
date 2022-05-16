import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon } from "@rneui/themed";

const players = [
  { id: 0, name: 'Marvin', kills: 25, place: 1, oldPlace: 2 },
  { id: 1, name: 'Nico', kills: 17, place: 2, oldPlace: 1 },
  { id: 2, name: 'Philipp', kills: 13, place: 3, oldPlace: 4},
  { id: 3, name: 'Christof', kills: 10, place: 4, oldPlace: 3}
].sort((a,b) => (a.place >b.place) ? 1 : -1);


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tableWrapper}>
        <Text style={styles.sectionTitle}>First place: </Text>
        <Text style={styles.sectionFirstPlaceTitle}>Nico </Text>
        <View style={styles.spacer}>
          <Text style={{ color: 'white', fontSize: 1 }}>spacer</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <FlatList style={{ display: 'flex' }} data={players} renderItem={({ item }) =>
            <View style={styles.playerTableContainer} key={item.id}>
              <View style={styles.playerContainer}>
                <View style={styles.circle}></View>
                <Text style={styles.player}>{item.name}</Text>
              </View>
              <View style={styles.playerContainer}>
                <Icon style={{top: 2.5}}
                  size={10}
                  containerStyle={{width: 10, height: 10}}
                  name={item.place < item.oldPlace ? 'arrow-up-right' : 'arrow-down-right'}
                  type='feather'
                  color='white'
                />
                <View style={styles.killsWrapper}>
                  <Text style={styles.player}>{item.kills} Kills</Text>
                </View>
              </View>
            </View>}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <Text style={{ color: 'white', marginRight: 2 }}>Overviews</Text>
          <Icon style={[styles.angleIcon, { transform: [{ rotate: '180deg' }] }]}
            name='angle-down'
            type='font-awesome'
            color='white'
            onPress={() => console.log('test')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  angleIcon: {
    bottom: 2.5,
    marginLeft: 2
  },
  tableWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#252427',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  sectionFirstPlaceTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 50,
    color: '#EEEEEE',
    marginBottom: 10,
  },
  spacer: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  playerTableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  killsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 45,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    marginTop: 1.5,
    borderRadius: 5,
    marginRight: 2,
  },
  player: {
    paddingBottom: 10,
    color: 'white',
  }
});
