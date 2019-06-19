import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

class SurveyDifficultyContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>
            What's your level of
            {"\n"}
            financial knowledge?
          </Text>
        </View>

        <View style={styles.beginnerContainer}>
          <View style={styles.triangleShadowYellow} />

          <Image
            style={styles.treePic}
            source={require("../../../assets/images/illustrations/PNG/sprout.png")}
          />
          <TouchableOpacity style={styles.advancedButton}>
            <Text style={styles.buttonColor}>Beginner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.advancedContainer}>
          <View style={styles.triangleShadowBlue} />

          <Image
            style={styles.treePic}
            source={require("../../../assets/images/illustrations/PNG/Tree_oranges.png")}
          />
          <TouchableOpacity style={styles.advancedButton}>
            <Text style={styles.buttonColor}>Advanced</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SurveyDifficultyContainer;