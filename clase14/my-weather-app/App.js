import React, { useState } from "react";
import {
  Text,
  View,
  Input,
  Button,
  Image,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Container,
  AspectRatio,
} from "native-base";
import axios from "axios";
import { Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";

const API =
  "http://api.weatherstack.com/current?access_key=8d4046c1e27dc49ff675bf6b25400bce&query=";

export default function App() {
  const [city, setCity] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const { data } = await axios.get(API + city);
      if (data.success === false) {
        setError(data?.error?.info);
      } else {
        setSearchResult(data.current);
        setError(null);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <NativeBaseProvider>
      <Center safeAreaY={10} bg="blue.300" flex={1} justifyContent="flex-start">
        <VStack space={5} alignItems="center" width="80%">
          <Text fontSize="xl" fontWeight="bold">
            Cómo está el tiempo?
          </Text>
          <Input
            placeholder="Ciudad..."
            value={city}
            onChangeText={setCity}
            onSubmitEditing={handleSearch}
            fontSize="sm"
            bg="white"
            borderRadius="xl"
            borderWidth={0}
            height={10}
            _focus={{ bg: "white" }}
          />
          <Button
            textColor="white"
            backgroundColor="crimson"
            rounded="xl"
            margin="auto"
            onPress={handleSearch}
            isLoading={isLoading}
            isLoadingText="Buscando"
          >
            Buscar
          </Button>
          {searchResult && (
            <AspectRatio
              backgroundColor="gray.200"
              alignItems="center"
              width="100%"
              ratio={1}
              borderRadius={20}
            >
              <Center>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                >{`${searchResult.temperature}°C`}</Text>

                <Text fontSize="md" fontWeight="bold" padding={2}>
                  {[searchResult.weather_descriptions]}
                </Text>

                {searchResult.weather_icons.map((icon) => (
                  <Image
                    key={icon}
                    source={{
                      uri: icon,
                    }}
                    alt="Icon"
                    size="xl"
                  />
                ))}
              </Center>
            </AspectRatio>
          )}
        </VStack>
      </Center>
      <StatusBar style="dark" />
    </NativeBaseProvider>
  );
}
