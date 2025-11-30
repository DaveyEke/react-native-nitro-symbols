import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { SymbolView } from 'react-native-nitro-symbols'

export default function App() {
  // 1. Replace State
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 2. Appear/Disappear State
  // Default to FALSE to match SwiftUI example (Button shown first)
  const [isVisible, setIsVisible] = useState(false)

  // 3. Wiggle State (Trigger)
  const [wiggleTrigger, setWiggleTrigger] = useState(false)

  // 4. Breathe State (Indefinite)
  const [isBreathing, setIsBreathing] = useState(false)

   const [isScalingUp, setIsScalingUp] = useState(false);
  const [isScalingDown, setIsScalingDown] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Nitro Symbols Example ⚡️</Text>

        {/* ====================================================
            1. REPLACE (Content Transition)
            "The Magic Morph"
           ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.label}>1. Replace</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName={isAuthenticated ? 'checkmark.circle.fill' : 'faceid'}
              effect="replace"
              tintColor={isAuthenticated ? 'green' : 'black'}  // Named colors
              pointSize={80}
            />
          </View>
          <Text style={styles.caption}>
            {isAuthenticated ? 'Authenticated' : 'Scan Face'}
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: isAuthenticated ? '#FF3B30' : '#007AFF' },
            ]}
            onPress={() => setIsAuthenticated(!isAuthenticated)}
          >
            <Text style={styles.buttonText}>
              {isAuthenticated ? 'Reset' : 'Authenticate'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* ====================================================
            2. APPEAR (Transition)
           ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.label}>2. Appear / Disappear</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="swift"
              pointSize={80}
              tintColor="orange"  // Named color
              isVisible={isVisible}
              effect="appear"
            />

            {!isVisible && (
              // FIX: Add justifyContent and alignItems here
              <View 
                style={[StyleSheet.absoluteFill, styles.centeredOverlay]} 
                pointerEvents="box-none"
              >
                <TouchableOpacity
                  style={styles.overlayButton}
                  onPress={() => setIsVisible(true)}
                >
                  <Text style={styles.buttonText}>Show Symbol</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <Text style={styles.caption}>
            Status: {isVisible ? 'Visible' : 'Hidden'}
          </Text>
          {isVisible && (
            <Button title="Hide Symbol" onPress={() => setIsVisible(false)} />
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Scale Up Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="magnifyingglass"
              tintColor="blue"  // Named color
              pointSize={60}
              weight="medium"
              effect="scaleup"
              isAnimating={isScalingUp}
            />
          </View>
          <Text style={styles.caption}>
             {isScalingUp ? "Scaled Up (Active)" : "Normal Size"}
          </Text>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isScalingUp ? '#FF9500' : '#007AFF' }]} 
            onPress={() => setIsScalingUp(!isScalingUp)}
          >
            <Text style={styles.buttonText}>
              {isScalingUp ? "Scale Down" : "Scale Up"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 5. Scale Down Effect  */}
        <View style={styles.card}>
          <Text style={styles.label}>Scale Down Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="arrow.down.circle.fill"
              tintColor="green"
              pointSize={80}
              weight="regular"
              scale="large"
              
              // New Prop Types:
              effect="scaledown"
              isAnimating={isScalingDown}
            />
          </View>
          <Text style={styles.caption}>
             {isScalingDown ? "Scaled Down (Active)" : "Normal Size"}
          </Text>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: isScalingDown ? '#FF3B30' : '#34C759' }]} 
            onPress={() => setIsScalingDown(!isScalingDown)}
          >
            <Text style={styles.buttonText}>
              {isScalingDown ? "Reset" : "Shrink"}
            </Text>
          </TouchableOpacity>
        </View>
        {/* ====================================================
            3. WIGGLE (Discrete Behavior)
           ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.label}>3. Wiggle (Discrete)</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="bell.badge.fill"
              renderingMode="palette"
              colors={['red', 'black']}  // Named colors
              pointSize={80}
              effect="wiggle"
              isAnimating={wiggleTrigger}
            />
          </View>
          <Text style={styles.caption}>Simulate Notification</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setWiggleTrigger(!wiggleTrigger)}
          >
            <Text style={styles.buttonText}>Trigger Wiggle</Text>
          </TouchableOpacity>
        </View>

        {/* 6. Slash Variant with Monochrome */}
        <View style={styles.card}>
          <Text style={styles.label}>Slash Variant</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="bell"
              variant="slash"
              renderingMode="monochrome"
              tintColor="gray"  // Named color
              pointSize={55}
              weight="light"
            />
          </View>
          <Text style={styles.caption}>Muted notification (slashed)</Text>
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

          {/* 4. Draw On Animation - Signature */}
        <View style={styles.card}>
          <Text style={styles.label}>Draw On Effect</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="signature"
              tintColor="rgba(0, 122, 255, 1)"  // RGBA format
              pointSize={65}
              weight="medium"
              scale="large"
              effect="drawon"
              isAnimating={isDrawing}
            />
          </View>
          <Button
            title={isDrawing ? "Reset" : "Draw Signature"}
            onPress={() => setIsDrawing(!isDrawing)}
          />
        </View>

        {/* ====================================================
            4. BREATHE (Indefinite Behavior)
           ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.label}>4. Breathe (Indefinite)</Text>
          <View style={styles.symbolWrapper}>
            <SymbolView
              symbolName="lungs.fill"
              renderingMode="hierarchical"
              tintColor="cyan"  // Named color
              pointSize={80}
              effect="breathe"
              isAnimating={isBreathing}
            />
          </View>
          <Text style={styles.caption}>
            {isBreathing ? 'Breathing...' : 'Paused'}
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: isBreathing ? '#FF9500' : '#34C759' },
            ]}
            onPress={() => setIsBreathing(!isBreathing)}
          >
            <Text style={styles.buttonText}>
              {isBreathing ? 'Stop' : 'Start Breathing'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollContent: {
    paddingVertical: 40,
    alignItems: 'center',
    gap: 20,
    paddingBottom: 100,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
    letterSpacing: -1,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  symbolWrapper: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    marginBottom: 16,
    position: 'relative',
  },
  overlayButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
  },
  caption: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },



  centeredOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
