



import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';



class ClockComponent extends Component {


    constructor(props) {
        super(props);
    }


    showOrHideClockForBlink() {

        const {
            mmTextStyle,
            ssTextStyle,
            colonTextStyle
        } = styles;
        const {
            blink
        } = this.props;

        if (blink) {
            return(
            
                <>
                    <Text style = {{...mmTextStyle, ...{color: this.props.clockTextColor }}}>
                        {this.props.countdownMM}
                    </Text>

                    <Text style =  {{...colonTextStyle, ...{color: this.props.clockTextColor }}}>
                        :
                    </Text>

                    <Text style =  {{...ssTextStyle, ...{color: this.props.clockTextColor }}}>
                        {this.props.countdownSS}
                    </Text>
                </>
            )
        }
    }

    render() {

        const {
            height,
            width
        } = Dimensions.get('screen');

        const {
            mainContainer,
            infoText,
            clockContainer,
          
        } = styles;
        return(
            <View style = {mainContainer}>

               <View>
                <Text style = {infoText}>
                        {this.props.infoText}
                </Text>
               </View>

                <View style = {clockContainer}>

                    <View style = {{flex: 6, flexDirection: 'row', justifyContent: 'center'}}>
                        {this.showOrHideClockForBlink()}
                    </View>

                    <TouchableOpacity
                        onPress = {() => this.props.playOrPauseFunction()}
                        style = {{flex: 1}}
                        >

                    <AntDesign
                        name = {this.props.iconName}
                        color = "#cb2d3e"
                        size = {height * 0.065}
                        />

                    </TouchableOpacity>
                   
                </View>

            </View>
        );
    }
}

export default ClockComponent;


const {
    height,
    width
} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center'
    },
    infoText: {
        color: '#cb2d3e',
        fontSize: height * 0.03,
        paddingTop: height * 0.055,
        fontFamily: "Montserrat-LightItalic",
        textAlign: 'center'
    },
    clockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: height * 0.2,
        width: width * 0.9
    },
    mmTextStyle: {
        fontSize: height * 0.15,
        fontFamily: "Montserrat-Medium" ,
       
    },
    ssTextStyle: {
        fontSize: height * 0.15,
        fontFamily: "Montserrat-Medium" ,
      
    },
    colonTextStyle: {
        fontSize: height * 0.15,
        fontFamily: "Montserrat-Medium",
        paddingBottom: height * 0.025,
      
    }
})