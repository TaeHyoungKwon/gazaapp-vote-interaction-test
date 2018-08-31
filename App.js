/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
})

type Props = {}
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
      number: 5
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState(prevState => {
              return { isSelected: !prevState.isSelected }
            })
          }}
        >
          <View
            style={[
              styles.mainBox,
              this.state.isSelected
                ? { backgroundColor: "yellow" }
                : { backgroundColor: "#ededed" }
            ]}
          >
            <View style={styles.leftPart}>
              {this.state.isSelected ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("./check.png")}
                />
              ) : null}

              <Text style={{ marginLeft: 10, fontSize: 20 }}>가즈아~</Text>
            </View>
            <View style={styles.rightPart}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./people.png")}
              />
              {this.state.isSelected ? (
                <Text style={{ marginLeft: 3, fontSize: 20 }}>
                  {this.state.number + 1}
                </Text>
              ) : (
                <Text style={{ marginLeft: 3, fontSize: 20 }}>
                  {this.state.number}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  mainBox: {
    width: "80%",
    flexDirection: "row",
    borderWidth: 1,
    padding: 10
  },
  leftPart: {
    flex: 1,
    flexDirection: "row"
  },
  rightPart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
})
