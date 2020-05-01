

import React, {Component} from'react';

import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import SpeedButton from './reusableComponents/SpeedButton';


class ClockFooterComponent extends Component {

    render() {

        const {
            mainContainer
        } = styles;
        return(
            <View style = {mainContainer}>

                <SpeedButton
                    colorOne = "#cb2d3e"
                    colorTwo = "#ef473a"
                    text = "1x"
                    textColor = "white"
                    alterSpeed = {this.props.alterSpeed}
                    />

               
                <SpeedButton
                    colorOne = "#cb2d3e"
                    colorTwo = "#ef473a"
                    text = "1.5x"
                    textColor = "white"
                    alterSpeed = {this.props.alterSpeed}
                    />
               

               <SpeedButton
                    colorOne = "#cb2d3e"
                    colorTwo = "#ef473a"
                    text = "2x"
                    textColor = "white"
                    alterSpeed = {this.props.alterSpeed}
                    />
            </View>
        );
    }
}


export default ClockFooterComponent;

const {
    height,
    width
} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})