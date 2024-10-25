import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}>
            This is the First Page of the app
          </Text>
          <Button
            title="Go to Second Page"
            onPress={() => navigation.navigate('SecondPage')}
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Navigate Between Screens using {'\n'} React Navigation
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
