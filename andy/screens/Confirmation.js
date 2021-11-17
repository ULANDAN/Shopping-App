import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Confirmation ({navigation}) {

    return (
       <View
          style={{
            backgroundColor: "white",
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>We appreciate you you for purchasing</Text>
          <Text style={{ fontSize: 20, color: "grey" }}>Please click/press the button below</Text>
          <TouchableOpacity
             onPress={() => {
               navigation.navigate("Products");
             }}
             style={{
               padding: 15,
               paddingHorizontal: 80,
               marginTop: 10,
               alignItems: "center",
               borderRadius: 10,
               flexDirection: "row",
               backgroundColor: "black",
             }}>
             <Text style={{ paddingLeft: 10, color: "white" }}>Back</Text>
          </TouchableOpacity>
       </View>
    );
}