import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}>
            This is Third Page of the App {'\n'} {route.params?.someParam}
          </Text>
          {route.params?.someParam !== 'reset' ? (
            <Button title="Go back" onPress={() => navigation.goBack()} />
          ) : null}
          <Button title="Go to Second Page" onPress={() => navigation.navigate('SecondPage')} />
          <Button
            title="Reset navigator to First Page"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'FirstPage', params: { someParam: 'reset' } }],
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
