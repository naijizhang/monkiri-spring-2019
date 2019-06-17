import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import TopicItem from "../TopicItem";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: {}
    };
  }
  toggle(topic) {
    const currentSelected = this.state.selectedTopics;
    currentSelected[topic.name] = currentSelected[topic.name]
      ? !currentSelected[topic.name]
      : true;
    this.setState({ selectedTopics: { ...currentSelected } });
  }
  render() {
    const { topics, hasButton, navigation } = this.props;
    const { selectedTopics } = this.state;
    return (
      <View>
        <View style={styles.container}>
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={topic.name + index}
              style={styles.eachItem}
              onPress={() => this.toggle(topic)}
            >
              <TopicItem topic={topic} selected={selectedTopics[topic.name]} />
            </TouchableOpacity>
          ))}
        </View>
        {hasButton ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LESSON", { selectedTopics })}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};
export default withNavigation(TopicList);
