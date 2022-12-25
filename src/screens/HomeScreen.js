import React, { useState } from 'react';
import { View,Text, SafeAreaView, ScrollView,FlatList } from 'react-native';
import { StyleSheet } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <>
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>
      <Card style={styles.cardContainer}>
    <Card.Content>
      <Title style={styles.cardtitle}>Islamabad Trip</Title>
      <Paragraph>Details</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions >
      <Button style={styles.bookNowbtn}>Add to Cart  </Button>
      <Button style={styles.bookNowbtn}>Book Now <Icon name="rocket" size={15} color="white" /></Button>
    </Card.Actions>
  </Card>
  <Button  onPress={() => setOpen(true)} style={styles.dateButton} > Pick Date </Button>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <FlatList
      horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  </ScrollView>

  
    
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    padding:10,
    margin:10,
    borderRadius:20
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  bookNowbtn:{
    backgroundColor:'pink',
    color:'white'
  },
  dateButton:{
    backgroundColor: '#C70039',
    borderWidth: 0,
    color: 'white',
    borderColor: '#C70039',
    height: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  
})
