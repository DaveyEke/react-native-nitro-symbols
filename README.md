# ⚡️ React Native Nitro Symbols

**A high-performance, type-safe SF Symbols library for React Native, built with Nitro Modules and SwiftUI.**

Render native iOS SF Symbols with full animation support, multiple rendering modes, and complete TypeScript autocomplete.

---

## ✨ Features

- 🚀 **Nitro Powered** – Near-zero-overhead JSI bridging for maximum performance
- 🎨 **Multiple Rendering Modes** – Monochrome, hierarchical, palette, and multicolor
- ✨ **Native Animations** – Bounce, pulse, draw-on, scale, and variable color effects
- 🎭 **Symbol Variants** – Fill, slash, circle, square, and rectangle variants
- 🔤 **Typography Control** – Full control over weight (9 options) and scale (3 options)
- 🎨 **Multi-Color Support** – Use up to 3 colors with palette rendering mode
- 📝 **Full TypeScript Support** – Complete autocomplete for all SF Symbol names and props
- ⚡️ **Type-Safe** – Enum-based props at both TypeScript and Swift layers

---

## 📋 Requirements

- **iOS 17.0+** for core functionality
- **iOS 18.0+** for bounce, scale, and variable color effects
- **iOS 26.0+** for the draw-on effect
- **New arch only** 

> **IMPORTANT**
> This library **cannot be used with Expo Go** due to custom native Swift code. You must use a [development build](https://docs.expo.dev/develop/development-builds/introduction/#what-is-an-expo-dev-client).

---

## 📦 Installation

```bash
# Install the library
npm install react-native-nitro-symbols

# Install required peer dependency
npm install react-native-nitro-modules

# For Expo projects
npx expo prebuild

# Install iOS pods
cd ios && pod install && cd ..

# Run the app
npx expo run:ios
# or
npx react-native run-ios
```

---

## 🚀 Quick Start

```tsx
import { SymbolView } from 'react-native-nitro-symbols';

export default function App() {
  return (
    <SymbolView
      symbolName="heart.fill"
      tintColor="#FF3B30"
      pointSize={50}
      weight="bold"
    />
  );
}
```

---

## 📚 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `symbolName` | `SFSymbol` | **required** | Name of the SF Symbol with full autocomplete support |
| `pointSize` | `number` | `24` | Font size of the symbol in points |
| `weight` | `SymbolWeight` | `"regular"` | Symbol weight: `ultralight`, `thin`, `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`, `black` |
| `scale` | `SymbolScale` | `"medium"` | Image scale: `small`, `medium`, `large` |
| `tintColor` | `string` | `undefined` | Hex color for monochrome rendering (e.g., `"#FF0000"`) |
| `colors` | `string[]` | `undefined` | Array of hex colors for palette rendering (up to 3 colors) |
| `renderingMode` | `SymbolRenderingMode` | `"monochrome"` | Rendering mode: `monochrome`, `hierarchical`, `palette`, `multicolor` |
| `variant` | `SymbolVariant` | `undefined` | Symbol variant: `fill`, `slash`, `circle`, `square`, `rectangle` |
| `effect` | `SFSymbolEffect` | `undefined` | Animation effect: `bounce`, `pulse`, `drawon`, `scale`, `variablecolor` |
| `isAnimating` | `boolean` | `false` | Controls whether the animation effect is active |

### Type Definitions

All prop types are exported for use in your code:

```tsx
import type { 
  SymbolWeight, 
  SymbolScale, 
  SFSymbolEffect, 
  SymbolRenderingMode, 
  SymbolVariant,
  SymbolViewProps 
} from 'react-native-nitro-symbols';
```

---

## 💡 Examples

### Basic Symbol

```tsx
<SymbolView
  symbolName="star.fill"
  tintColor="#FFD700"
  pointSize={60}
  weight="bold"
/>
```

### Palette Rendering (Multi-Color)

```tsx
<SymbolView
  symbolName="theatermasks"
  renderingMode="palette"
  colors={["#AF52DE", "#8E8E93"]}
  pointSize={60}
  weight="bold"
/>
```

### Hierarchical Rendering

```tsx
<SymbolView
  symbolName="battery.100percent"
  renderingMode="hierarchical"
  tintColor="#34C759"
  pointSize={70}
  weight="semibold"
/>
```

### Animated Symbol

```tsx
import { useState } from 'react';

export function AnimatedHeart() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  return (
    <>
      <SymbolView
        symbolName="heart.fill"
        tintColor="#FF3B30"
        pointSize={80}
        effect="pulse"
        isAnimating={isAnimating}
      />
      <Button 
        title={isAnimating ? "Stop" : "Start"} 
        onPress={() => setIsAnimating(!isAnimating)} 
      />
    </>
  );
}
```

### Draw-On Effect (Signature)

```tsx
import { useState } from 'react';

export function Signature() {
  const [isSigning, setIsSigning] = useState(false);
  
  return (
    <>
      <SymbolView
        symbolName="signature"
        tintColor="#007AFF"
        pointSize={80}
        weight="medium"
        effect="drawon"
        isAnimating={isSigning}
      />
      <Button 
        title="Sign" 
        onPress={() => setIsSigning(!isSigning)} 
      />
    </>
  );
}
```

### Symbol with Variant

```tsx
<SymbolView
  symbolName="bell"
  variant="slash"
  tintColor="#8E8E93"
  pointSize={55}
  weight="light"
/>
```

---

## 🎨 Rendering Modes

### Monochrome
Single color rendering using `tintColor`:
```tsx
<SymbolView
  symbolName="star.fill"
  renderingMode="monochrome"
  tintColor="#FFD700"
/>
```

### Hierarchical
Automatic depth-based opacity variations:
```tsx
<SymbolView
  symbolName="battery.100percent"
  renderingMode="hierarchical"
  tintColor="#34C759"
/>
```

### Palette
Custom colors for different symbol layers (up to 3):
```tsx
<SymbolView
  symbolName="battery.100percent.bolt"
  renderingMode="palette"
  colors={["#34C759", "#FFD60A", "#FF453A"]}
/>
```

### Multicolor
Uses the symbol's predefined colors:
```tsx
<SymbolView
  symbolName="checkmark.circle"
  renderingMode="multicolor"
/>
```

---

## ✨ Animation Effects

| Effect | iOS Version | Description |
|--------|-------------|-------------|
| `bounce` | 18.0+ | Bouncing animation |
| `pulse` | 17.0+ | Pulsing scale animation |
| `drawon` | 26.0+ | Drawing/writing animation |
| `scale` | 18.0+ | Scale up/down animation |
| `variablecolor` | 18.0+ | Color variation animation |

> **NOTE**
> Effects gracefully degrade on older iOS versions - the symbol will still render but without animation.

---

## 🔍 Symbol Discovery

This library provides full TypeScript autocomplete for all SF Symbol names. When you type `symbolName="`, your IDE will suggest all available symbols.

You can also browse symbols at:
- [SF Symbols App](https://developer.apple.com/sf-symbols/) (macOS)

---

## 🛠️ Troubleshooting

### "Cannot be used with Expo Go"

This library requires custom native code and cannot run in Expo Go. Create a [development build](https://docs.expo.dev/develop/development-builds/introduction/#what-is-an-expo-dev-client):

```bash
npx expo prebuild
npx expo run:ios
```

### "Invariant Violation: View config getter callback..."

Ensure `react-native-nitro-modules` is installed and the app has been rebuilt:

```bash
npm install react-native-nitro-modules
cd ios && pod install && cd ..
npx expo run:ios
```

### Symbols not animating

Check your iOS version:
- Most effects require iOS 17.0+
- Bounce, scale, and variable color require iOS 18.0+
- Draw-on effect requires iOS 26.0+

The library will log warnings and fall back gracefully on unsupported versions.

---

## 📱 Platform Support

- ✅ **iOS 17.0+** – Full support
- ❌ **Android** – Not supported (SF Symbols are Apple-exclusive)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/react-native-nitro-symbols.git
cd react-native-nitro-symbols

# Install dependencies
npm install

# Generate Nitro bindings
npx nitrogen

# Run the example app
cd example
npx expo run:ios
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Nitro Modules](https://github.com/mrousavy/nitro) by [@mrousavy](https://x.com/mrousavy)
- SF Symbols by Apple Inc.
- Type definitions from [sf-symbols-typescript](https://github.com/nandorojo/sf-symbols-typescript)

---

## 📞 Contact

- **Twitter**: [Davey](https://x.com/1804davey)
- **GitHub**: [Issues](https://github.com/daveyeke/react-native-nitro-symbols/issues)

---

**Made with ❤️ by Davey Eke for the React Native community**