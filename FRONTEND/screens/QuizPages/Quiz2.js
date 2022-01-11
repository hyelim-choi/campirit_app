import React, { useRef, useState, useEffect} from 'react';
import { 
  StyleSheet,
  ImageBackground,
  Image,
  Text, 
  View, 
  Pressable,   
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  Alert,} from 'react-native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

  export default function Quiz2({navigation, ansList, setansList}) {
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);
    const [chosen3, setChosen3] = useState(false);

    const Bus = useRef(new Animated.Value(-6)).current 
    useEffect(() => {
      Animated.timing(
        Bus,{
          toValue: 9,
          duration: 1000,
          useNativeDriver: true,}
      ).start();
    }, [Bus])

    const CanNEXT = () =>{
      let num = 0;
  
      chosen1==true ? (num += 1) : null;
      chosen2==true ? (num += 1) : null;
      chosen3==true ? (num += 1) : null;
  
      num == 1 ? NEXT() : OnemoreTime();
    }   
  
    const OnemoreTime = () => {
      Alert.alert(
        '',
        '한 가지만 선택해주세요',
        [{text: '다시 고르기', onPress: () => null}],
      )
    }

    const NEXT =()=>{
      navigation.navigate('Quiz3')

      chosen1 ? setansList({ ...ansList, A2: "여성" }) : null
      chosen2 ? setansList({ ...ansList, A2: "남성" }) : null
      chosen3 ? setansList({ ...ansList, A2: "해당 없음" }) : null
    }

    const [loaded] = useFonts({
      YiSunShin_B: require('../../assets/fonts/이순신돋움체B.ttf'),
      Roboto:require('../../assets/fonts/Roboto.ttf'),
    });
    if (!loaded) {
      return null;
    }

    return (
        <View style={styles.container}>
{/* /////////////////////////////////<<<< Header : 파란물결 >>>>>////////////////////////////////////// */}
          <View style={styles.header}>
            <ImageBackground  
              style={styles.headerWave}
              source={require("../../assets/images/Quiz/headerWave.png")} 
              resizeMode="cover">
            <Text style={styles.headerText}>
              당신에 관해 간단한 질문에 응답해주세요.
            </Text>
            </ImageBackground>
          </View>
{/* ////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>///////////////////////////////////////// */}
          <View style={styles.body}>
            <Text style={styles.ansState}>{ansList.A1}{"\n"}</Text>
            <Text style={styles.quizText}>2. 당신의 성별은 무엇인가요?</Text>
            <View style={styles.answers}>
              <View style={styles.ans}>
                  <Text style={{...styles.btn_Ans, backgroundColor: chosen1 ? "#FF9899" : "white"}}> </Text>
                  <Pressable
                    onPress={()=>{setChosen1(prev => !prev)}}
                    hitSlop={{top: 5, bottom:50,}}>
                    <Text style={styles.btn_ansText}>여성</Text>
                  </Pressable>
              </View>
              <View style={styles.ans}>
                  <Text style={{...styles.btn_Ans, backgroundColor: chosen2 ? "#FF9899" : "white"}}> </Text>
                  <Pressable
                    onPress={()=>{setChosen2(prev => !prev)}}
                    hitSlop={{top: 5, bottom:50,}}>
                    <Text style={styles.btn_ansText}>남성</Text> 
                  </Pressable>
              </View>
              <View style={styles.ans}>
                  <Text style={{...styles.btn_Ans, backgroundColor: chosen3 ? "#FF9899" : "white"}}> </Text>
                  <Pressable
                    onPress={()=>{setChosen3(prev => !prev)}}
                    hitSlop={{top: 5, bottom:50,}}>
                    <Text style={styles.btn_ansText}>해당 없음</Text> 
                  </Pressable>
              </View>
            </View>
            <Pressable style={styles.btn_Next} onPress={CanNEXT}>
              <Text style={styles.btn_nextText}>NEXT</Text>
            </Pressable>
          </View>
 {/* //////////////////////////<<<< Footer : 자동차 >>>>>/////////////////////////////////////////// */}
          <View style = {styles.footer}>
            <View style = {styles.process}>
            <Animated.Image
                source={require("../../assets/images/Quiz/movingCar.png")}
                style={[styles.movingCar, {
                  transform: [{ translateX: Bus }]
                }]}/>
              <Text style = {styles.processText}>5%</Text>
            </View>
            <Image
              source={require("../../assets/images/Quiz/Line.png")}/>
          </View>
          <StatusBar backgroundColor='#213063'></StatusBar>
        </View>
    );
}


const styles = StyleSheet.create({
    ///////////////////////////////<<<< Container : 최상위 박스 >>>>>//////////////////////////////////////  
  container: {
    flex: 1,
  },
  ///////////////////////////////<<<< Header : 파란물결 >>>>>//////////////////////////////////////
  header:{
    flex: 0.75,
    marginTop:StatusBarHeight,
    backgroundColor:"white",

    alignItems: "center",
  },
  headerWave:{
    width: windowWidth,
    height: 197,

    justifyContent: "center",
  },
  headerText:{
    color:"white",
    fontWeight:"400",
    fontSize:15,
    fontFamily:'YiSunShin_B',

    marginBottom:windowHeight*9/32/3,
    marginLeft :windowWidth/40,
  },
  ////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>/////////////////////////////////////////
  body:{
    flex: 2,
    backgroundColor:"white",

    alignItems:'center',
    justifyContent: "center",
  },
  ansState:{
    color:"#C4C4C4",
    fontWeight:"400",
    fontSize:18,
    fontFamily:"YiSunShin_B",
    height:25,
  
    marginLeft :-windowWidth/1.5,
  },
  quizText:{
    // backgroundColor:"gray",
    fontWeight:"700",
    fontSize:20,
    fontFamily:"Roboto",

    marginBottom: windowHeight*5/8/17,
    marginLeft :-windowWidth/4,
  },
  answers:{
    // backgroundColor:"blue",

    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: "space-evenly",
    alignSelf:"stretch",
  },
  ans:{
    // backgroundColor:"white",

    flexDirection: "row",
  },
  btn_Ans:{
    borderRadius:35,
    width:20,
    height:20,
    borderColor: "#FF9899",
    borderWidth: 2,

    marginRight:6,
    marginTop:3,
  },
  btn_ansText:{
    fontWeight:"400",
    fontSize:14,
    fontFamily:"Roboto",
  },
  btn_Next:{
    backgroundColor: "#FFD300",
    width:windowWidth/1.8,
    height:windowHeight*5/8/12,
    borderRadius:13,

    marginTop:windowHeight/3.7,
    marginBottom:-windowHeight/25,

    justifyContent:"center",
    alignItems:"center",
  },
  btn_nextText:{
    color:"white",
    fontWeight:"400",
    fontSize:12,
    fontFamily:'YiSunShin_B',
  },
  //////////////////////////<<<< Footer : 자동차 >>>>>///////////////////////////////////////////
  footer:{
    flex: 0.18,
    backgroundColor:"white",
  },
  process:{
    // backgroundColor:"blue",

    flexDirection:"row",
    justifyContent:"flex-end",
  },
  movingCar:{
    marginBottom:-3,
    marginRight:windowWidth-110,
  },
  processText:{
    alignSelf:"flex-end",
    marginBottom:3,
    marginRight:5,

    color:"#497860",
    fontWeight:"400",
    fontSize:12,
    fontFamily:'YiSunShin_B',
  },
});