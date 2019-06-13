import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            height: 20
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 0 });
            }}
          >
            <Text>My Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 1 });
            }}
          >
            <Text>Library</Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.tabIndex == 0 ? <Text>test 1</Text> : <Text>test2</Text>}
        </View>
        <View style={styles.container}>
          <View style={[{ backgroundColor: "#99C355" }, styles.iconContainer]}>
            <Image
              style={{ width: 45, height: 45, resizeMode: "contain" }}
              source={require(`../../assets/images/IconsWhite/saving.png`)}
            />
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.name}>Saving</Text>
            <View />
          </View>
        </View>
        <View style={styles.container}>
          <View style={[{ backgroundColor: "#50A255" }, styles.iconContainer]}>
            <Image
              style={{ width: 45, height: 45, resizeMode: "contain" }}
              source={require(`../../assets/images/IconsWhite/budgeting.png`)}
            />
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.name}>Budgeting</Text>
            <View>
              
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LessonsContainer;
