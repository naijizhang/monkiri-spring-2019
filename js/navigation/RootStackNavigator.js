import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
export default createAppContainer(
  createStackNavigator(
    { Layout: NavigationLayout },
    {
      headerMode: "none"
    }
  )
);
