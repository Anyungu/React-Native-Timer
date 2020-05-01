

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Keyboard
} from 'react-native';
import ClockHeaderComponent from './ClockHeaderComponent';
import ClockComponent from './ClockComponent';
import ClockFooterComponent from './ClockFooterComponent';
import Sound from 'react-native-sound';


class HomePage extends Component {


    constructor(props) {
        super(props);
        this.onTypeMinutesPress = this.onTypeMinutesPress.bind(this);
        this.onStartPress = this.onStartPress.bind(this);
        this.alterSpeed = this.alterSpeed.bind(this);
        this.playOrPauseFunction = this.playOrPauseFunction.bind(this);
        this.autoCountDown = this.autoCountDown.bind(this);
        this.blinkFunction = this.blinkFunction.bind(this);
        this.whoosh = new Sound('code_daniel.mp3', Sound.MAIN_BUNDLE);
    }
   

    state = {
        minutes: '',
        infoText: '',
        countdownMM: '00',
        countdownSS: '00',
        countdownMMHalf: '00',
        countdownSSHalf: '00',
        counting: false,
        pauseOrPlayIconName: 'playcircleo',
        currentSpeed: 1000,
        blink: true
    }


    blinkFunction() {
        this.blinkInterval = setInterval(
            ()=> {
                this.setState({
                    blink: !this.state.blink
                })
            },
            this.state.currentSpeed/2
        )
    }

  

    //set value for minutes
    onTypeMinutesPress(value) {

        this.setState({
            minutes: value
        })
    }

    //check if input is number below 100
    validateMinutes() {

        const {
            minutes
        } = this.state;

        if (Number.isInteger(Number(minutes)) && Number(minutes) > 0 && Number(minutes) < 100) {


            var rm = minutes % 2;
            var div = Math.floor(minutes / 2);

            this.setState({
                infoText: "",
                countdownMM: minutes > 9 ? minutes : `0${minutes}`,
                countdownSS: "00",
                countdownMMHalf: div,
                countdownSSHalf: rm > 0 ? 30 : 0,
                counting: true,
                pauseOrPlayIconName: 'pausecircleo',
                clockTextColor: 'black'
               
            });

            return true;
        }else {
            this.setState({
                infoText: "Use a valid Integer between 0 and 99",
                counting: false,
                pauseOrPlayIconName: 'playcircleo',
                
            });
            return false;
        }
    }


    //15 minute counter
    autoCountDown() {
  

        clearInterval(this.timerInterval);

            var minutes = 15;

            var rm = minutes % 2;
            var div = Math.floor(minutes / 2);

            this.setState({
                infoText: "",
                countdownMM: minutes > 9 ? minutes : `0${minutes}`,
                countdownSS: "00",
                countdownMMHalf: div,
                countdownSSHalf: rm > 0 ? 30 : 0,
                counting: true,
                pauseOrPlayIconName: 'pausecircleo',
                clockTextColor: 'black'
               
            });
         

  


            this.timerInterval = setInterval(()=> {


            let halfMin = this.state.countdownMMHalf;
            let halfSec = this.state.countdownSSHalf;

            let seconds = this.state.countdownSS;
            let mins = this.state.countdownMM;
                

                if (seconds == 0) {

                    var newMins = mins - 1

                    this.setState({
                        countdownSS: 59,
                        countdownMM: newMins > 9 ? newMins : `0${newMins}`
                    });
                    
                } 

                else {

                    var newSecs = seconds - 1;
  
                    if (halfMin == mins && halfSec == newSecs) {

                        this.setState({
                            countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            infoText: "You are halfway there!"
                        });

                    }else {

                        if (Number(mins) === 0 && Number(newSecs) === 0) {
                            this.whoosh.play();
                            clearInterval(this.timerInterval);
                            clearInterval(this.blinkInterval);
                            this.setState({
                                infoText: "Time's up!",
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                blink: true,
                                clockTextColor: 'black',
                                counting: false,
                                pauseOrPlayIconName: 'playcircleo',
                            })
                        }else if  (Number(mins) === 0 && Number(newSecs) === 20) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                clockTextColor: '#cb2d3e'
                            });
    

                        }else if  (Number(mins) === 0 && Number(newSecs) === 10) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                            this.blinkFunction();
    

                        }else {
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                        }

                      
                    }


                   

                } 


            }, 
            this.state.currentSpeed
            )


        

    }
    

    //start Timer
    onStartPress() {

        Keyboard.dismiss();

        clearInterval(this.timerInterval);


        var valid = this.validateMinutes();
         

        if (valid) {


            this.timerInterval = setInterval(()=> {


            let halfMin = this.state.countdownMMHalf;
            let halfSec = this.state.countdownSSHalf;

            let seconds = this.state.countdownSS;
            let mins = this.state.countdownMM;
                

                if (seconds == 0) {

                    var newMins = mins - 1

                    this.setState({
                        countdownSS: 59,
                        countdownMM: newMins > 9 ? newMins : `0${newMins}`
                    });
                    
                } 

                else {

                    var newSecs = seconds - 1;
  
                    if (halfMin == mins && halfSec == newSecs) {

                        this.setState({
                            countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            infoText: "You are halfway there!"
                        });

                    }else {

                        if (Number(mins) === 0 && Number(newSecs) === 0) {
                            this.whoosh.play();
                            clearInterval(this.timerInterval);
                            clearInterval(this.blinkInterval);
                            this.setState({
                                infoText: "Time's up!",
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                blink: true,
                                counting: false,
                                pauseOrPlayIconName: 'playcircleo',
                            })
                        }else if  (Number(mins) === 0 && Number(newSecs) === 20) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                clockTextColor: '#cb2d3e'
                            });
    

                        }else if  (Number(mins) === 0 && Number(newSecs) === 10) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                            this.blinkFunction();
    

                        }else {
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                        }

                      
                    }

                   

                } 


            }, 
            this.state.currentSpeed
            )


        }
    }

    alterSpeed(value) {


        const {
            counting
        } = this.state;


        if (counting) {

            if (value === "1x") {
                var speed = 1000;
            }
    
            if ( value === "1.5x") {
                speed = 1000/1.5
            }
    
            if (value === "2x") {
                speed = 500
            }

            this.setState({
                currentSpeed: speed
            })
           
            clearInterval(this.timerInterval);
    
    
            this.timerInterval = setInterval(()=> {
    
    
                let halfMin = this.state.countdownMMHalf;
                let halfSec = this.state.countdownSSHalf;
    
                let seconds = this.state.countdownSS;
                let mins = this.state.countdownMM;
                    
    
                    if (seconds == 0) {
    
                        var newMins = mins - 1
    
                        this.setState({
                            countdownSS: 59,
                            countdownMM: newMins > 9 ? newMins : `0${newMins}`
                        });
                        
                    } 
    
                    else {
    
                        var newSecs = seconds - 1;
      
                        if (halfMin == mins && halfSec == newSecs) {
    
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                infoText: "You are halfway there!"
                            });
    
                      
                    }else {

                        if (Number(mins) === 0 && Number(newSecs) === 0) {
                            this.whoosh.play();
                            clearInterval(this.timerInterval);
                            clearInterval(this.blinkInterval);
                            this.setState({
                                infoText: "Time's up!",
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                blink: true,
                                counting: false,
                                pauseOrPlayIconName: 'playcircleo',
                                currentSpeed: 1000
                            })
                        }else if  (Number(mins) === 0 && Number(newSecs) === 20) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                clockTextColor: '#cb2d3e'
                            });
    

                        }else if  (Number(mins) === 0 && Number(newSecs) === 10) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                            this.blinkFunction();
    

                        }else {
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                        }

                      
                    }                       
    
                    } 
    
                }, 
                speed
                )

        }
       
       
    }


    playOrPauseFunction() {

       const {
           counting,
           countdownMM,
           countdownSS,
       } = this.state;

       console.log(counting);


       if (counting) {

        clearInterval(this.timerInterval);

           this.setState({
               counting: false,
               pauseOrPlayIconName: 'playcircleo'
           })
       }

       else {

        if (Number(countdownMM) === 0 && Number(countdownSS) === 0) {

            this.autoCountDown();

        }else {

            this.setState({
                counting: true,
                pauseOrPlayIconName: 'pausecircleo'
            })

            clearInterval(this.timerInterval);
    
    
            this.timerInterval = setInterval(()=> {
    
    
                let halfMin = this.state.countdownMMHalf;
                let halfSec = this.state.countdownSSHalf;
    
                let seconds = this.state.countdownSS;
                let mins = this.state.countdownMM;
                    
    
                    if (seconds == 0) {
    
                        var newMins = mins - 1
    
                        this.setState({
                            countdownSS: 59,
                            countdownMM: newMins > 9 ? newMins : `0${newMins}`
                        });
                        
                    } 
    
                    else {
    
                        var newSecs = seconds - 1;
      
                        if (halfMin == mins && halfSec == newSecs) {
    
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                infoText: "You are halfway there!"
                            });
    
                     
                    }else {

                        if (Number(mins) === 0 && Number(newSecs) === 0) {
                             this.whoosh.play();
                            clearInterval(this.timerInterval);
                            clearInterval(this.blinkInterval);
                            this.setState({
                                infoText: "Time's up!",
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                blink: true,
                                counting: false,
                                pauseOrPlayIconName: 'playcircleo',
                                currentSpeed: 1000
                            })
                        }else if  (Number(mins) === 0 && Number(newSecs) === 20) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                                clockTextColor: '#cb2d3e'
                            });
    

                        }else if  (Number(mins) === 0 && Number(newSecs) === 10) {

                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                            this.blinkFunction();
    

                        }else {
                            this.setState({
                                countdownSS: newSecs > 9 ? newSecs : `0${newSecs}`,
                            });

                        }

                      
                    }

    
                       
    
                    } 
    
                }, 
                this.state.currentSpeed
                )

        }
      
       }

    }


    



    render() {

        const {
            height,
            width
        } = Dimensions.get('screen');

        const {
            mainContainer
        } = styles;
        return(
           <ImageBackground source={require('../../assets/images/bg.jpg')} 
                style= {{...mainContainer, ...{height:height, width:width}}}
                blurRadius={2}
                    >
                        
                <View>
                    <ClockHeaderComponent   
                        minutes = {this.state.minutes}
                        onTypeMinutesPress = {this.onTypeMinutesPress}
                        onStartPress = {this.onStartPress}
                        />
                </View>

                <View>
                    <ClockComponent 
                        infoText = {this.state.infoText}
                        countdownMM = {this.state.countdownMM}
                        countdownSS = {this.state.countdownSS}
                        iconName = {this.state.pauseOrPlayIconName}
                        playOrPauseFunction = {this.playOrPauseFunction}
                        clockTextColor = {this.state.clockTextColor}
                        blink = {this.state.blink}
                        />
                </View>

                <View>
                    <ClockFooterComponent
                        alterSpeed = {this.alterSpeed}
                        />
                </View>

            </ImageBackground>
        );
    }
}

export default HomePage;


const styles = StyleSheet.create({
    mainContainer: {
    justifyContent: 'center',
    flex: 1
    },
})