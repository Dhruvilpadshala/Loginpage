import React, {useState} from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import axios from 'axios'; // Don't forget to import Axios

export const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!email.trim()) {
      setError('Please enter an email address');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!password.trim()) {
      setError('Please enter a password');
      return false;
    }
    return true;
  };

  const loginUser = async () => {
    setError('');
    if (validateForm()) {
      const data = {
        email,
        password,
      };
      console.log(data);
      try {
        const response = await axios.post(
          'http://10.0.2.2:3000/api/users/login',
          data,
        );
        console.log(response.data);
        // If login is successful, navigate to the Home page
        navigation.navigate('Homepage');
      } catch (error) {
        console.error('Error logging in:', error);
        console.log('Request:', error.request); // Log request object
        console.log('Response:', error.response); // Log response object
        setError('Error logging in. Please try again.'); // Show error message to the user
      }
    }
  };

  return (
    <Layout>
      <Layout style={{marginTop: 0, height: 1000}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 120,
          }}>
          <Text style={{fontSize: 40}}>Login</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <Input
            style={{width: 300, textAlign: 'center', marginTop: 10}}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail} // Bind email input to state
          />
          <Input
            style={{width: 300, textAlign: 'center', marginTop: 10}}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword} // Bind password input to state
          />
          {error ? (
            <Text style={{color: 'red', marginTop: 10}}>{error}</Text>
          ) : null}
          <View style={{width: 300, alignItems: 'flex-end'}}>
            <Text>Forgot password</Text>
          </View>
          <View style={{marginTop: 10, width: 300}}>
            <Button style={{fontSize: 30}} onPress={loginUser}>
              Log in
            </Button>
          </View>
          <View style={{marginTop: 20}}>
            <Text>OR</Text>
          </View>
          <View style={{marginTop: 20, width: 300}}>
            <Button
              style={{fontSize: 30}}
              onPress={() => navigation.navigate('Signuppage')}>
              Sign up
            </Button>
            <View style={{width: 300, alignItems: 'center'}}>
              <Text>Don't have an account</Text>
            </View>
          </View>
        </View>
      </Layout>
    </Layout>
  );
};
