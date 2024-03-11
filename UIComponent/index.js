import React, { Component } from 'react'
import { Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import { decrement, increment } from '../Redux/Actions'

import {connect} from "react-redux"

 function UIComponent ({count,increment,decrement}) {
    return (
        <SafeAreaView>
            <View style={{backgroundColor:'#67C6E3',height:60,width:150,borderRadius:40,justifyContent:'center',marginTop:200,marginLeft:120}}>
            <Text style={{alignSelf:'center',padding:15}}>Count :  {count}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
            <View style={{backgroundColor:'pink',height:45, width:60,margin:8,borderRadius:30}}>
                <TouchableOpacity onPress={increment}>
                <Text style={{alignSelf:'center',padding:8,fontSize:22}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'pink',height:45, width:60,margin:8,borderRadius:30}}>
                <TouchableOpacity onPress={decrement}>
                <Text style={{alignSelf:'center',padding:8,fontSize:22}}>-</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}

const mapStateProps = (state) => ({
    // converting state into a prop
    count : state.counter.count,
    // the above is the path ----> count is the initial state --> in combineReducer.js we are assigning that to counter in an object --> which tales the value 
    // we are extracting the count
})
// action- dispatch methods
//  we need to convert the action-dispatch methods into properties. The below object will carry out the increment and decrement
const mapDispatchToProps = {
    increment,
    decrement
  };

//   mapStateProps is the state and mapDispatchToProps has the methods --- these two need to be mapped with this component so we  used connect here.
  
export default connect(mapStateProps, mapDispatchToProps) (UIComponent)