

import  React, {Component} from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';



class SpeedButton extends Component {

    render () {

        const {
            speedButton,
            speedButtonText
        } = styles;
        return (
            <TouchableOpacity

                onPress = {() => this.props.alterSpeed(this.props.text)}
                >
                 <LinearGradient
                      start={{x: 1, y: 1}} end={{x: 0, y: 0}}
                      style= {speedButton}
                      colors={[this.props.colorOne, this.props.colorTwo]}
                      >
                          <Text style = {{...speedButtonText, ...{color: this.props.textColor}}}>
                              {this.props.text}
                          </Text>

                    </LinearGradient>
            </TouchableOpacity>
        );
    }
}


export default SpeedButton;


const {
    height,
    width
} = Dimensions.get('screen');


const styles = StyleSheet.create({
    speedButtonText: {
        fontSize: moderateScale(15.833),
        fontFamily: "Montserrat-Light"
    },
    speedButton: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.0125,
        borderRadius: width * 0.1,
        alignItems:'center',
        justifyContent: 'center'
    }
});