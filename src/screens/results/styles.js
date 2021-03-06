import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'column',
  },
  horizontal:{
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:24,
    marginBottom:5
  },
  button: {
    margin:10,
    marginBottom:0,
    padding: 25,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderColor: '#3897f0', 
    borderWidth: 1, 
    backgroundColor: '#3897f0', 
    borderRadius: 5,
    color: '#fff',
    margin:10
  },
  buttontitle:{
    textAlign:'center',
    fontWeight: 'bold', 
    color: '#fff', 
    fontSize: 24
  },
  item:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  }
});

