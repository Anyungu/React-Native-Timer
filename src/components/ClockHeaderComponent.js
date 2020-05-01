



import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



class ClockHeaderComponent extends Component {


    constructor(props) {
        super(props);
         this.onStartPress = this.onStartPress.bind(this);
    }


    
    //function to Start timer
    onStartPress() {
        this.props.onStartPress();
    }

    render() {

        const {
            mainContainer,
            countDownText,
            minunteTextInputContaner,
            startButton,
            minuteTextinputStyle,
            startButtonText
        } = styles;
        return(
            <View style = {mainContainer}>
                <Text style = {countDownText}>
                    CountDown:
                </Text>

                <View style = {minunteTextInputContaner}>
                    <TextInput
                        placeholder = "(Min)"
                        placeholderTextColor= "rgba(204, 50, 50, 0.56)"
                        style = {minuteTextinputStyle}
                        value = {this.props.minutes}
                        onChangeText = {value => this.props.onTypeMinutesPress(value)}
                        keyboardType = 'number-pad'
                        />
                </View>

                <TouchableOpacity
                    onPress = {this.onStartPress}
                    >
                    <LinearGradient
                      start={{x: 1, y: 1}} end={{x: 0, y: 0}}
                      style= {startButton}
                      colors={['#cb2d3e', '#ef473a']}
                      >
                          <Text style = {startButtonText}>
                              START
                          </Text>

                    </LinearGradient>
                </TouchableOpacity>

            </View>
        );
    }
}


export default ClockHeaderComponent;


const {
    height,
    width
} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    countDownText: {
        color: 'black',
        fontSize: height * 0.03
    },
    minunteTextInputContaner: {
        borderColor: '#ef473a',
        borderRadius: width * 0.005,
        borderWidth: width * 0.0015,
        width: width * 0.3
    },
    minuteTextinputStyle: {

        color: '#cb2d3e',
        fontSize: height * 0.03,
        paddingVertical: height * 0.0125,
        fontFamily: "Montserrat-Light"

    },
    startButton: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.0125,
        borderRadius: width * 0.1,
        alignItems:'center',
        justifyContent: 'center'
    },
    startButtonText: {
        fontSize: height * 0.03,
        color: 'white',
        fontFamily: "Montserrat-Light"
    }
})