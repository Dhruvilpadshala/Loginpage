import React, {useState} from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import axios from 'axios';

export const Secondpage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return false;
    }
    if (!email.trim()) {
      setError('Please enter an email address');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!isStrongPassword(password)) {
      setError(
        <View style={{width: 300}}>
          <Text style={{color: 'red', fontSize: 12}}>
            Password must be at least 8 characters long and contain at least one
            uppercase letter, one lowercase letter, one digit, and one special
            character
          </Text>
        </View>,
      );
      return false;
    }

    return true;
  };

  const isStrongPassword = password => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  };

  const postapi = async () => {
    setError('');
    if (validateForm()) {
      const data = {
        username,
        email,
        password,
      };
      console.log(data);
      try {
        const response = await axios.post(
          'http://10.0.2.2:3000/api/users/signup',
          data,
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error signing up:', error);
        console.log('Request:', error.request); // Log request object
        console.log('Response:', error.response); // Log response object
        // Handle the error here, e.g., show an error message to the user
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
          <Text style={{fontSize: 40}}>Sign Up</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <Input
            style={{width: 300}}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={{width: 300, textAlign: 'center', marginTop: 10}}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={{width: 300, textAlign: 'center', marginTop: 10}}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          {error ? (
            <Text style={{color: 'red', marginTop: 10}}>{error}</Text>
          ) : null}
          <View style={{marginTop: 10, width: 300}}>
            <Button style={{fontSize: 30}} onPress={postapi}>
              Sign up
            </Button>
          </View>
          <View style={{marginTop: 10, width: 300}}>
            <Button
              style={{fontSize: 30}}
              onPress={() => navigation.navigate('Loginpage')}>
              Log in
            </Button>
          </View>
          <View style={{marginTop: 20}}>
            <Text>Already have an account? </Text>
          </View>
        </View>
      </Layout>
    </Layout>
  );
};
