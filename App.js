import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text }
  from 'native-base'
import Constants from 'expo-constants';
import { Icon } from 'native-base'
import Axios from 'axios'
//import { NavBar } from './Navbar'
//import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {

  const clickMenu = () => {
    Alert.alert("OK!")
  }

  const [tuit, setTuit] = useState("hola")

  const traer = async () => {
    const axios = await Axios.post('https://maslabook.herokuapp.com/api/bot',        
      {password:'maslabookaaaaaaaaaa1234567890'}
    )
    const data = await axios.data
    //Alert.alert(data)
    setTuit(data)
  }

  useEffect(()=> {
    setTuit("hola qué tal");
    
  }, [])

  return (
    <>
    <Container>
      <Header style={{backgroundColor:'gray'}}>
        
        <Left>
          <Button transparent onPress={()=>clickMenu()}>
            <Icon name='menu' />
          </Button>
        </Left>
        
        <Body>
          <Title>Header</Title>
        </Body>
        
        <Right />
      </Header>

      <View style={styles.container}>
        <Text> Open up App.js to start working on your app!! </Text>

        <Button full onPress={()=>traer()}>
          <Text>
            Traer otro
          </Text>
        </Button>

        {tuit &&
          <View style={{maxWidth:'80%'}}>
           <Text> {tuit} </Text>
          </View>
        }
        
        <StatusBar style="auto" />
      </View>

      <Footer style={{backgroundColor:'gray'}}>
        <FooterTab>
          <Button full onPress={()=>Alert.alert("Click on Footer")}>
            <Text>Footer 1234</Text>
          </Button>
        </FooterTab>
      </Footer>

    </Container>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  }
})

