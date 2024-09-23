import { Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/images";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start items-center h-full p-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] mt-9"
            resizeMode="contain"
          />

          <Image
            source={images.banner}
            className="max-w-[375px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Text className="text-sm font-pregular text-gray-100 text-center text-center mt-7">Where creativity meets innovation: embark on a jorney of limitless exploration with Aora</Text>

            <CustomButton
              title="Contine with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyle="mt-7"
            />

          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
