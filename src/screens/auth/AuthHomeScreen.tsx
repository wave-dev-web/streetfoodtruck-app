import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authNavigations } from '../../constants';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList>

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../../assets/streetfoodtruk.png')}
                resizeMode='contain'
            />  
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton 
                label='로그인하기' 
                onPress={() => navigation.navigate(authNavigations.LOGIN)}
            />
            <CustomButton 
                label='회원가입하기' 
                variant='outlined' 
                onPress={() => navigation.navigate(authNavigations.SIGNUP)}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1.5,
        width: Dimensions.get('screen').width / 2
    },
    buttonContainer: {
        flex: 1,
        gap: 10
    },  
    image: {
        width: '100%',
        height: '100%',
    }
});

export default AuthHomeScreen;