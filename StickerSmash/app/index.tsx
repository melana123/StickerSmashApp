import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={style.text}>Home.</Text>
    </View>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#25292e',
    justifyContent: "center",
    alingItems:"center",
  },
  text: {
    color:'#fff',
  }
})
