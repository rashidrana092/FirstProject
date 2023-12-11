import {View, Text, StyleSheet, Button,Modal, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiDataWithList = () => {

    const [data, setData] = useState([]);
    const [showModal,setShowModal]=useState(false);
    const [selectedUser,setSelectedUser]=useState(undefined);
    const [openDialog,setOpenDialog]=useState(false);

  const getAPIData = async () => {

    const url = "http://192.168.236.74:3000/users";

    let result = await fetch(url);

    result = await result.json();

    if (result) {
      setData(result);
    }
  }

  const deleteUser= async (id)=>{
     //console.warn(`${url}/${id}`);
    const url = "http://192.168.236.74:3000/users";
    let result=await fetch(`${url}/${id}`,{
        method: "delete"
    });
    result=await result.json();
    if(result){
        console.warn("data deleted");
        getAPIData();
    }

  }

  const updateUser=(data)=>{
   // setShowModal(true)
    setOpenDialog(true)
    setSelectedUser(data)
  }


  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Name
          </Text>
        </View>

        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Age
          </Text>
        </View>

        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Operations
          </Text>
        </View>
      </View>

      {
      data.length?
       data.map((item) => 
            <View style={styles.dataWrapper}>
            <View style={{flex: 1}}>
              <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>

              <View style={{flex: 1}}>
                <Button title="Delete" onPress={()=>deleteUser(item.id)}/>
              </View>

              <View style={{flex: 1}}>
                <Button title="Update"
                onPress={()=>updateUser(item)}
                 />
              </View>
            </View>
          )
        : null}

          <Modal visible={openDialog} transparent={true}>
            <UpdateModel setOpenDialog={setOpenDialog} selectedUser={selectedUser} 
            getAPIData={getAPIData}
            />

          </Modal>




        {/* <Modal visible={openDialog} transparent={true}>

            <UserModal  
             setShowModal={setShowModal}
             selectedUser={selectedUser}
            />
        </Modal> */}


    </View>
  ); 
};

const UpdateModel=(props)=>{

  console.warn(props.selectedUser)
  const [name,setName]=useState(undefined);
  const [age,setAge]=useState(undefined);
  const [email,setEmail]=useState(undefined);
          
    useEffect(()=>{
      if(props.selectedUser){
        setName(props.selectedUser.name);
        setEmail(props.selectedUser.email);
        setAge(props.selectedUser.age.toString());
        

      }

    },[props.selectedUser])  // this will run if a user is selected

    const updateUser2= async ()=>{
      console.warn(props.selectedUser.id,name,age,email);
      const url2="http://192.168.236.74:3000/users";
      const id=props.selectedUser.id;

      let result2=await fetch(`${url2}/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name,age,email})
      });
      result2=await result2.json();
      if(result2){
        console.warn(result2);
        props.getAPIData();
        props.setOpenDialog(false);
      }

    }
  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>{props.selectedUser.name}</Text>
        <TextInput style={styles.input}
         onChangeText={(text)=>setName(text)}
         value={name}/>
                  <TextInput style={styles.input} 
                  value={age}
                  onChangeText={(text)=>setAge(text)}

                  />
                  <TextInput style={styles.input} value={email}
                           onChangeText={(text)=>setEmail(text)}

                  />
      <View style={{marginBottom: 10}}
      >
        <Button 
         title='Update'
         onPress={updateUser2}
        />
        </View>

        <Button 
        title='Close'
        onPress={()=>props.setOpenDialog(false)}
        />
         
      </View>
    </View>
  )
}

const UserModal=(props)=>{
 //   console.warn(props.selectedUser)
  const [name,setName]=useState(undefined);
  const [age,setAge]=useState(undefined);
  const [email,setEmail]=useState(undefined);
          
    useEffect(()=>{
      if(props.selectedUser){
        setName(props.selectedUser.name);
        setEmail(props.selectedUser.email);
        setAge(props.selectedUser.age.toString());
        

      }

    },[props.selectedUser])  // this will run if a user is selected
    
    return(
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput style={styles.input} value={name}
                  placeholder='Enter Name'
                  onChangeText={(text)=>setName(text)}
                  />
                  <TextInput style={styles.input} value={age}
                  placeholder='Enter Age'
                  onChangeText={(text)=>setAge(text)}/>
                  <TextInput style={styles.input} value={email}
                  placeholder='Enter Email'
                  onChangeText={(text)=>setEmail(text)}/>

                  <View style={{marginBottom: 10}}>
                  <Button color="midnightblue" 
                    title='Update'
                    onPress={()=>props.setOpenDialog(false)}
                    />

                    </View>           
                    <Button color="midnightblue" 
                    title='Close'
                    onPress={()=>props.setOpenDialog(false)} />
   
                </View>
            </View>
    )
}
export default ApiDataWithList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightsteelblue',
    margin: 5,
    padding: 7,
  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.70,
    elevation: 5

  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 300,
    marginBottom: 10
  }
});
