import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { SymbolView } from 'react-native-nitro-symbols';

export default function App() {
  const [isPulsing, setIsPulsing] = useState(true);
  const [isScaling, setIsScaling] = useState(false);
  const [isPresented, setIsPresented] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Nitro Symbols ⚡️</Text>

        {/* 1. Palette Rendering Mode - Theater Masks */}
        <View style={styles.card}>
          <Text style={styles.label}>Palette Rendering</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="theatermasks"
              renderingMode="palette"
              colors={["#AF52DE", "#8E8E93"]}
              pointSize={60}
              weight="bold"
              scale="large"
            />
          </View>
          <Text style={styles.caption}>Purple & gray palette</Text>
        </View>

        {/* 2. Palette with 3 Colors - Battery */}
        <View style={styles.card}>
          <Text style={styles.label}>3-Color Palette</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="battery.100percent.bolt"
              renderingMode="palette"
              colors={["#34C759", "#FFD60A", "#FF453A"]}
              pointSize={70}
              weight="semibold"
              scale="medium"
            />
          </View>
          <Text style={styles.caption}>Green, yellow & red palette</Text>
        </View>

        {/* 3. Pulse Animation */}
        <View style={styles.card}>
          <Text style={styles.label}>Pulse Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="wifi"
              tintColor="#007AFF"
              pointSize={60}
              weight="medium"
              isAnimating={isPulsing}
              effect="pulse"
            />
          </View>
          <Button
            title={isPulsing ? "Stop Pulse" : "Start Pulse"}
            onPress={() => setIsPulsing(!isPulsing)}
          />
        </View>

        {/* 4. Draw On Animation - Signature */}
        <View style={styles.card}>
          <Text style={styles.label}>Draw On Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="signature"
              tintColor="#007AFF"
              pointSize={65}
              weight="medium"
              scale="large"
              isAnimating={isScaling}
              effect="drawon"
            />
          </View>
          <Button
            title={isScaling ? "Reset" : "Draw Signature"}
            onPress={() => setIsScaling(!isScaling)}
          />
        </View>

        {/* 5. Variable Color Effect */}
        <View style={styles.card}>
          <Text style={styles.label}>Variable Color Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="battery.100percent"
              tintColor="#34C759"
              pointSize={80}
              weight="regular"
              scale="large"
              isAnimating={true}
              effect="variablecolor"
            />
          </View>
          <Text style={styles.caption}>Continuously animating battery</Text>
        </View>

        {/* 6. Slash Variant with Monochrome */}
        <View style={styles.card}>
          <Text style={styles.label}>Slash Variant</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName={isPresented ? "checkmark.circle.fill" : "faceid"}
              pointSize={55}
            />
             <Button
            title={isPresented ? "Reset" : "Draw Signature"}
            onPress={() => setIsPresented(!isPresented)}
          />
          </View>
          <Text style={styles.caption}>Muted notification (slashed)</Text>
        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
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
  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
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
  symbolWrapper: {
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  caption: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  }
});