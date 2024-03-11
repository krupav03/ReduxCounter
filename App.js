import React, { Component } from 'react'
import { Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import UIComponent from './UIComponent'
export default function App () {
    return (
      <Provider store={store}>
        <UIComponent/>
      </Provider>
     
    )
}
