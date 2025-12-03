import './global.css'


import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { SymbolView } from 'react-native-nitro-symbols'
import { Ionicons } from '@expo/vector-icons'

// Helper component to render a row
const IconRow = ({ 
  label, 
  symbolName, 
  ioniconName, 
  color 
}: { 
  label: string, 
  symbolName: any, 
  ioniconName: keyof typeof Ionicons.glyphMap, 
  color: string 
}) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
      <SymbolView
        symbolName={symbolName}
        tintColor={color}
        pointSize={50}
        fallback={
          <Ionicons name={ioniconName} size={50} color={color} />
        }
      />
    </View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.subLabel}>
      iOS: {symbolName}{"\n"}Android: {ioniconName}
    </Text>
  </View>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nitro Symbols</Text>
        <Text style={styles.subHeader}>Static Mapping Example</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.row}>
          <IconRow 
            label="Favorites" 
            symbolName="heart.fill" 
            ioniconName="heart" 
            color="blue" 
          />
          <IconRow 
            label="Settings" 
            symbolName="gearshape.fill" 
            ioniconName="settings-sharp" 
            color="#8E8E93" 
          />
        </View>

        <View style={styles.row}>
          <IconRow 
            label="Play" 
            symbolName="play.circle.fill" 
            ioniconName="play-circle" 
            color="#007AFF" 
          />
           <IconRow 
            label="Camera" 
            symbolName="camera.fill" 
            ioniconName="camera" 
            color="#34C759" 
          />
        </View>

        {/* Row 3: System */}
        <View style={styles.row}>
          <IconRow 
            label="Alert" 
            symbolName="exclamationmark.triangle.fill" 
            ioniconName="warning" 
            color="#FF9500" 
          />
          <IconRow 
            label="Profile" 
            symbolName="person.crop.circle.fill" 
            ioniconName="person-circle" 
            color="#5856D6" 
          />
        </View>

        {/* Row 4: Weather */}
        <View style={styles.row}>
          <IconRow 
            label="Cloudy" 
            symbolName="cloud.fill" 
            ioniconName="cloud" 
            color="#AF52DE" 
          />
          <IconRow 
            label="Delete" 
            symbolName="trash.fill" 
            ioniconName="trash" 
            color="#FF3B30" 
          />
        </View>

        {/* Special Case: Multicolor (iOS) vs Single Color (Android) */}
        <View style={styles.fullWidthCard}>
          <Text style={styles.sectionTitle}>Multicolor Support</Text>
          <View style={styles.centerIcon}>
            <SymbolView
              symbolName="cloud.sun.rain.fill"
              renderingMode="palette"
              colors={['#5AC8FA', '#FFCC00', '#007AFF']}
              pointSize={80}
              fallback={
                <Ionicons name="partly-sunny" size={80} color="#FFCC00" />
              }
            />
          </View>
          <Text style={styles.description}>
            On iOS, this renders with a 3-color palette.{"\n"}
            On Android, it falls back to a standard yellow 'partly-sunny' icon.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
    marginTop: 4,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  fullWidthCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginTop: 8,
  },
  iconContainer: {
    marginBottom: 12,
    height: 60,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  subLabel: {
    fontSize: 10,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1C1C1E',
  },
  centerIcon: {
    marginBottom: 16,
    height: 90,
    justifyContent: 'center',
  },
  description: {
    fontSize: 13,
    color: '#3A3A3C',
    textAlign: 'center',
    lineHeight: 18,
  }
})