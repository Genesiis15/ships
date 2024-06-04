import React from 'react'
import Constants from 'expo-constants'
import {Alert, Text, View, Button} from 'react-native'
import RepositoryList from './RepositoryList.jsx'

import Test from './Test.jsx'
const Main = () =>{
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
           <Test/>
        </View>
    )
}

export default Main