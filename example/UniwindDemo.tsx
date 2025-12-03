import './global.css'

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { withUniwind } from 'uniwind';
import { StyledSymbolView } from './StyledSFSymbolView';
import { SFSymbols6_0 } from 'sf-symbols-typescript';
import { SafeAreaView } from 'react-native';

export default function UniwindDemo() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
    <ScrollView >
      <View className="p-6">
        {/* Header */}
        <Text className="text-4xl font-bold text-white mb-2">
          Uniwind Demo
        </Text>
        <Text className="text-gray-400 mb-8">
          Testing Tailwind CSS with React Native Nitro Symbols
        </Text>

        {/* Card 1: Primary Symbols */}
        <View className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 mb-4 shadow-lg">
          <Text className="text-white text-2xl font-semibold mb-4">
            Primary Symbols
          </Text>
          <View className="flex-row justify-around items-center">
            <StyledSymbolView
              symbolName="heart.fill"
              tintColor="#FF3B30"
              className="w-12 h-12"
            />
            <StyledSymbolView
              symbolName="star.fill"
              tintColor="#FFD700"
              className="w-12 h-12"
            />
            <StyledSymbolView
              symbolName="bolt.fill"
              tintColor="#FFCC00"
              className="w-12 h-12"
            />
          </View>
        </View>

        {/* Card 2: System Icons */}
        <View className="bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-700">
          <Text className="text-white text-2xl font-semibold mb-4">
            System Icons
          </Text>
          <View className="flex-row justify-around items-center">
            <StyledSymbolView
              symbolName="gear"
              tintColor="#8E8E93"
              className="w-10 h-10"
            />
            <StyledSymbolView
              symbolName="bell.fill"
              tintColor="#FF9500"
              className="w-10 h-10"
            />
            <StyledSymbolView
              symbolName="person.circle.fill"
              tintColor="#007AFF"
              className="w-10 h-10"
            />
            <StyledSymbolView
              symbolName="envelope.fill"
              tintColor="#34C759"
              className="w-10 h-10"
            />
          </View>
        </View>

        {/* Card 3: Large Symbol */}
        <View className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 mb-4 items-center">
          <StyledSymbolView
            symbolName="apple.logo"
            tintColor="white"
            className="w-24 h-24 mb-4"
          />
          <Text className="text-white text-xl font-bold">
            Large Symbol Example
          </Text>
        </View>

        {/* Card 4: Grid Layout */}
        <View className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <Text className="text-white text-2xl font-semibold mb-4">
            Grid Layout
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {['cloud.fill', 'sun.max.fill', 'moon.fill', 'wind', 'snowflake', 'flame.fill'].map((symbol, index) => (
              <View key={symbol} className="w-1/3 items-center mb-4">
                <StyledSymbolView
                  symbolName={symbol as SFSymbols6_0}
                  tintColor="#00D4FF"
                  className="w-10 h-10"
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
