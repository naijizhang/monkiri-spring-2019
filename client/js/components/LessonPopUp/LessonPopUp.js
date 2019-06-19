import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class LessonPopUp extends Component {
  state = {
    isModalVisible: true
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { topic, openPopUp } = this.props;
    const { isModalVisible } = this.state;
    return (
      <Modal isVisible={openPopUp === isModalVisible}>
        <View style={styles.root}>
          <View
            style={[
              {
                backgroundColor:
                  topic && topic.background ? topic.background : "#bbb"
              },
              styles.iconContainer
            ]}
          >
            <Image
              style={styles.icon}
              source={topic && topic.icon ? topic.icon : null}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {topic && topic.name ? topic.name : null}
              </Text>
            </View>
            <Text style={styles.description}>
              {topic && topic.description
                ? topic.description
                : "There is no description for this lesson."}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.addButtonContainer, styles.burronShadow]}
              onPress={this.toggleModal}
            >
              <Text style={styles.addButtonText}>Add to lessons</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.quizButtonContainer, styles.burronShadow]}
              onPress={this.toggleModal}
            >
              <Text style={styles.quizButtonText}>Test your knowledge</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={this.toggleModal}
          >
            <Ionicons size={25} style={styles.closeIcon} name="ios-close" />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
