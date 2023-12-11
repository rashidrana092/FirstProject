import { Text, View, StyleSheet, StatusBar, SectionList } from 'react-native';

export default function App() {
  const users = [
    {
      id: 1,
      name: 'FAREED',
      data: ['C#', 'JS', 'C++'],
    },
    {
      id: 2,
      name: 'MUBARAK',
      data: ['Java', 'React JS', 'C'],
    },
    {
      id: 3,
      name: 'RIZWAN',
      data: ['HTML', 'CSS', 'Javascript'],
    },
    {
      id: 4,
      name: 'rashid',
      data: ['React Native', 'C#.NET', 'PHP'],
    },
  ];

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        Section List{' '}
      </Text>
      <SectionList
        sections={users}
         renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
            {name}
          </Text>
        )}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, marginLeft: 20 }}>{item} </Text>
        )}
       
      />
    </View>
  );
}
