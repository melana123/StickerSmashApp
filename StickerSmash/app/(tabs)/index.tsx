import { Link } from "expo-router";
import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={style.text}>Home</Text>
      <Link href="/about" style={StyleSheet.button}>
      </Link>
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
  },
  button: {
    fontSize:20,
    textDecorationLine: 'underline',
    color:'#fff'
  }
})
