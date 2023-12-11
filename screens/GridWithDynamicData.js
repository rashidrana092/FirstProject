import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const users = [
    {
      id: 1,
      name: 'FAREED',
    },
    {
      id: 2,
      name: 'MUBARAK',
    },
    {
      id: 3,
      name: 'RIZWAN',
    },
    {
      id: 4,
      name: 'rashid',
    },
  ];

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {users.map((item) => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    backgroundColor: 'midnightblue',
    margin: 5,
    padding: 5,
    width: 150,
    height: 100,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
