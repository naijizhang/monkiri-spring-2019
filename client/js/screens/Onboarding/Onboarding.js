import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import { OnboardingData } from "../../helpers/onboarding";
import OnboardingIntro from "../../components/OnboardingIntro";
import OnboardingAuth from "../../components/OnboardingAuth";
console.log(OnboardingData);

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Swiper
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}
      >
        {/* {OnboardingData.map(data => (
          <OnboardingIntro key={data.id} introData={data} />
        ))} */}
        <OnboardingIntro introData={OnboardingData[0]} />
        <OnboardingIntro introData={OnboardingData[1]} />
        <OnboardingAuth navigation={navigation} />
      </Swiper>
    </View>
  );
};

export default Onboarding;
