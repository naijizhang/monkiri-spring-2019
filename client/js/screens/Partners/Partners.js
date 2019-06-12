import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";
import PartnersCard from "../../components/PartnersCard";
import PartnersCardExpand from "../../components/PartnersCardExpand";
import { styles } from "./styles";

const Partners = ({ InitailData }) => {
  const [Partners, setPartners] = useState(InitailData);

  const handleToggle = id => {
    LayoutAnimation.easeInEaseOut();
    const Toggle = Partners.map(data =>
      data.id === id ? { ...data, isOpen: !data.isOpen } : data
    );
    setPartners(Toggle);
  };
  return (
    <ScrollView>
      <View style={styles.PartnersContainer}>
        {Partners.map(data => (
          <TouchableOpacity
            style={styles.PartnersCard}
            onPress={() => handleToggle(data.id)}
          >
            <PartnersCard data={data} />
            <PartnersCardExpand isOpen={data.isOpen} data={data} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Partners;
