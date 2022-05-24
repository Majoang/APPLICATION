import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { EvilIcons,Ionicons,Entypo,SimpleLineIcons,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { useState  } from 'react';
import Facebookposter from './Facebookposter';

export default function App() {
  const [poster,setposter] = useState('');
  const [list, setList] = useState([])

  function transform(banannna) {
    return <Facebookposter poster={banannna.poster}  />
  }

  function addPost(){
    setList([{poster:poster}, ...list])
    setposter('')
   
  }

  return (
    <View style={styles.container}> 

        <Image
                      style={styles.profile}
                      source={require('./profile.jpg')}/>

            <Text style={{fontStyle:'normal',fontSize:18}}>SELLO MAJOANG</Text>
            <Text style={{fontSize:10}}>
            <EvilIcons name="location" size={35} color="black" />MASERU moshoeshoe II
            </Text>
            <Text style={{fontSize:10}}>GOD IS LOVE</Text>
      <View style={{flexDirection:'row',width:'90%', justifyContent:'space-between'}}>
        <View>

          <View style={{marginLeft:15}}>
          <TouchableOpacity>
             <Ionicons name="add-circle-outline" size={24} color="black"  />
         </TouchableOpacity>
         </View>
             <Text>addstory</Text>
             </View>
          
        <View>
        <View style={{marginLeft:19}}>
         <TouchableOpacity>
           <Entypo name="add-user" size={24} color="black" />
         </TouchableOpacity>
         </View>
            <Text>addfriend</Text>
            </View>
        <View>
        <TouchableOpacity>
       <SimpleLineIcons name="user-follow" size={24} color="black" />
       
             <Text>follow</Text>
             </TouchableOpacity>  
             </View>

          <View> 
         <TouchableOpacity>
         <MaterialIcons name="more" size={24} color="black" />
          <Text>more</Text>
          </TouchableOpacity>

            </View>

    </View>
       
      <View style={styles.inputFields}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:9}}>WRITE YOUR POST HERE</Text>
         </View>         
        <View style={{alignItems:'center'}}>
        <FontAwesome name="arrow-down" size={15} color="black" />
        </View>
        <TextInput style={styles.input} value={poster} onChangeText={setposter}/>
        
          
        </View>
        <TouchableOpacity onPress={addPost}>
        <View style={{width:30,height:30,backgroundColor:'#29B6F6',marginBottom:10}}>
        <View style={{marginLeft:3}}>
        <Ionicons name="send-outline" size={24} color="black" />
        </View>
        </View>
        </TouchableOpacity>
        
      

      {list.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#CFD8DC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  },
  inputFields: {
        padding: 10,
    
  },
  input: {
    borderWidth: 3,
    borderStyle:'solid',
    width:350,
    height:100,
    marginLeft:5
  },
  profile:
  {
    width:80,
    height:80,
    borderRadius:20,
    alignContent:'flex-start',
    marginTop:50
  }
});
