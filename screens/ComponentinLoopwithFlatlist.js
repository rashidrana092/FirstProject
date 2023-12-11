import { Text, View, StyleSheet, FlatList, StatusBar } from 'react-native';

export default function App() {
  const users = [
    {
      id: 1,
      name: 'FAREED',
      email: 'fareed@gmail.com',
    },
    {
      id: 2,
      name: 'MUBARAK',
      email: 'mubarak@gmail.com',
    },
    {
      id: 3,
      name: 'RIZWAN',
      email: 'rizwan@gmail.com',
    },
    {
      id: 4,
      name: 'rashid',
      email: 'rashid@gmail.com',
    },
  ];

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Component in Loop with Flatlist
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
}

const UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'midnightblue',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: 'coral',
  },
});
