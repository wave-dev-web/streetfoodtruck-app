import React, { useRef } from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import { validateSignup } from '../../utils';

function SignupScreen() {

  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signup = useForm({
      initialValue: { email: "", password: "", passwordConfirm: ""},
      validate: validateSignup
  })

  const handleSubmit = () => {
      console.log("values", signup.values)
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
            <InputField 
                autoFocus
                placeholder='이메일' 
                error={signup.errors.email} 
                touched={signup.touched.email}
                inputMode='email'
                returnKeyType='next'
                blurOnSubmit={true}
                onSubmitEditing={() => passwordRef.current?.focus()}
                {...signup.getTextInputProps("email")}
            />
            <InputField
                ref={passwordRef}
                placeholder='비밀번호' 
                textContentType='oneTimeCode'
                error={signup.errors.password}
                touched={signup.touched.email}
                secureTextEntry
                returnKeyType='next'
                blurOnSubmit={true}
                onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                {...signup.getTextInputProps("password")}
            />
            <InputField 
                ref={passwordConfirmRef}
                placeholder='비밀번호 확인' 
                textContentType='oneTimeCode'
                error={signup.errors.passwordConfirm}
                touched={signup.touched.passwordConfirm}
                secureTextEntry
                onSubmitEditing={handleSubmit}
                {...signup.getTextInputProps("passwordConfirm")}
            />
        </View>
        <CustomButton
            label='회원가입'
            variant='filled'
            size='large'
            onPress={handleSubmit}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
      container: {
        flex: 1, 
        margin: 30
    },
    inputContainer: {
        gap: 20,
        marginBottom: 30
    }
});

export default SignupScreen;