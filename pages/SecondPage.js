import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}>
            This is the Second Page of the App
          </Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Go to Second Page... again"
            onPress={() => navigation.push('SecondPage')}
          />
          <Button
            title="Replace this screen with Third Page"
            onPress={() => navigation.replace('ThirdPage', { someParam: 'Param' })}
          />
          <Button
            title="Reset navigator state to Third Page"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'ThirdPage', params: { someParam: 'reset' } }],
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
