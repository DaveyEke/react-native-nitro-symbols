import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { SymbolView } from 'react-native-nitro-symbols';

export default function App() {
  const [isSigned, setIsSigned] = useState(false);
  const [isBouncing, setIsBouncing] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Nitro Symbols ⚡️</Text>

        {/* 1. Static Styled Example */}
        <View style={styles.card}>
          {/* 1. The Name */}
          <Text style={styles.label}>Static Styling</Text>
          
          {/* 2. The Symbol */}
          <View style={styles.symbolWrapper}>
            {/* <SymbolView
              symbolName="fish"
              tintColor="#FF3B30"
              pointSize={60}
              weight="black"
              scale="large"
            /> */}
            <SymbolView 
              symbolName="heart.fill"
              renderingMode="palette"
             colors={["#800080", "#808080"]}
            />
          </View>

          {/* 3. The Caption/Button */}
          <Text style={styles.caption}>Red Heart (Black Weight)</Text>
        </View>

        {/* 2. Drawing Animation Example */}
        <View style={styles.card}>
          {/* 1. The Name */}
          <Text style={styles.label}>Drawing Animation</Text>
          
          {/* 2. The Symbol */}
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="chineseyuanrenminbisign.arrow.trianglehead.counterclockwise.rotate.90"
              tintColor="#007AFF"
              pointSize={80}
              isAnimating={isSigned}
              effect="drawOn"
            />
          </View>

          {/* 3. The Button */}
          <Button
            title={isSigned ? "Reset Signature" : "Sign Document"}
            onPress={() => setIsSigned(!isSigned)}
          />
        </View>

        {/* 3. Bounce Animation Example */}
        <View style={styles.card}>
          {/* 1. The Name */}
          <Text style={styles.label}>Bounce Effect</Text>
          
          {/* 2. The Symbol */}
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="heart.fill"
              tintColor="#FF3B30"
              pointSize={50}
              isAnimating={isBouncing}
              effect="bounce"
            />
          </View>

          {/* 3. The Button */}
          <Button
            title={isBouncing ? "Stop Bouncing" : "Start Bouncing"}
            onPress={() => setIsBouncing(!isBouncing)}
          />
        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // System Gray 6
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    marginTop: 20,
  },
  // The Card now holds EVERYTHING: Label, Icon, and Button
  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 5,
  },
  // Wrapper creates specific space for the icon so it doesn't overlap
  symbolWrapper: {
    marginVertical: 25, // Push Text up and Button down
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80, // Ensures space is reserved even if icon loads late
  },
  caption: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  }
});