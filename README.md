# ⚡️ React Native Nitro Symbols

**A high-performance, type-safe SF Symbols library for React Native, built with Nitro Modules and SwiftUI.**

Render native iOS SF Symbols with animation support, multiple rendering modes, and complete TypeScript autocomplete.

---

## ✨ Features

- 🚀 **Nitro Powered** – Near-zero-overhead JSI bridging for maximum performance
- 🎨 **Multiple Rendering Modes** – Monochrome, hierarchical, palette, and multicolor
- ✨ **Native Animations** – Support for Discrete (one-shot), Indefinite (looping), and Transition effects
- 🎭 **Symbol Variants** – Fill, slash, circle, square, and rectangle variants
- 🔤 **Typography Control** – Full control over weight (9 options) and scale (3 options)
- 🎨 **Multi-Color Support** – Use up to 3 colors with palette rendering mode
- 🌈 **Flexible Color Formats** – Supports named colors, hex, RGB, RGBA, and HSL color strings
- 📝 **Full TypeScript Support** – Complete autocomplete for all SF Symbol names and props

---

## 📋 Requirements

- **iOS 17.0+** for core functionality
- **iOS 18.0+** for advanced effects (Wiggle, Rotate, Breathe)
- **iOS 26.0+** for the Draw-on effect
- **New Architecture enabled**

> **IMPORTANT**
> This library **cannot be used with Expo Go** due to custom native Swift code. You must use a development build.

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
```

---

## 🎨 Uniwind Integration (Optional)

This library works seamlessly with [Uniwind](https://docs.uniwind.dev), bringing Tailwind CSS utility classes to React Native.

To use Tailwind classes with `SymbolView`, follow the [Uniwind Quickstart](https://docs.uniwind.dev/quickstart) to set up your project.


 **Wrap Components** (for custom components like `SymbolView`):
   ```tsx
   import { withUniwind } from 'uniwind';
   import { SymbolView } from 'react-native-nitro-symbols';

   const StyledSymbolView = withUniwind(SymbolView);
   ```

 **Use Tailwind Classes**:
   ```tsx
   <StyledSymbolView
     symbolName="heart.fill"
     className="w-12 h-12 text-red-500"
   />
   ```

For an example of how to use Uniwind with the component, check out:
[UniwindDemo.tsx](example/UniwindDemo.tsx) 

For complete setup instructions, see the [Uniwind Quickstart](https://docs.uniwind.dev/quickstart).



## 🚀 Quick Start

```tsx
import { SymbolView } from 'react-native-nitro-symbols'

export default function App() {
  return (
    <SymbolView
      symbolName="heart.fill"
      tintColor="#FF3B30"
      pointSize={50}
      weight="bold"
    />
  )
}
```



---

## 📚 API Reference

### Props

| Prop            | Type                  | Default        | Description                                                                                             |
| --------------- | --------------------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| `symbolName`    | `SFSymbol`            | **required**   | Name of the SF Symbol with full autocomplete support                                                    |
| `pointSize`     | `number`              | `24`           | Font size of the symbol in points                                                                       |
| `weight`        | `SymbolWeight`        | `"regular"`    | Symbol weight: `ultralight`, `thin`, `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`, `black` |
| `scale`         | `SymbolScale`         | `"medium"`     | Image scale: `small`, `medium`, `large`                                                                 |
| `tintColor`     | `ColorValue`          | `undefined`    | Color for monochrome rendering. Supports named colors (`"red"`), hex (`"#FF0000"`), RGB, RGBA, HSL      |
| `colors`        | `ColorValue[]`        | `undefined`    | Array of colors for palette rendering (up to 3 colors). Supports all React Native color formats         |
| `renderingMode` | `SymbolRenderingMode` | `"monochrome"` | Rendering mode: `monochrome`, `hierarchical`, `palette`, `multicolor`                                   |
| `variant`       | `SymbolVariant`       | `undefined`    | Symbol variant: `fill`, `slash`, `circle`, `square`, `rectangle`                                        |
| `effect`        | `SFSymbolEffect`      | `undefined`    | Animation effect. See Animation Effects below.                                                          |
| `isAnimating`   | `boolean`             | `false`        | Trigger for discrete effects (change value to trigger) or toggle for indefinite loops.                  |
| `isVisible`     | `boolean`             | `true`         | Required for the appear effect to trigger exit animations correctly.                                    |
| `fallback`      | `ReactNode`           | `undefined`    | **(Android/Web only)** React node to render on non-iOS platforms (e.g. Ionicons, Text).                 |

---

## 💡 Examples

### Basic Symbol

```tsx
<SymbolView
  symbolName="star.fill"
  tintColor="gold" // Named color
  pointSize={60}
  weight="bold"
/>
```

### Palette Rendering (Multi-Color)

```tsx
<SymbolView
  symbolName="theatermasks"
  renderingMode="palette"
  colors={['purple', '#8E8E93']} // Mix named colors and hex
  pointSize={60}
  weight="bold"
/>
```

### Discrete Animation (Wiggle/Bounce)

Change the `isAnimating` prop to trigger the effect once.

```tsx
import { useState } from 'react'

export function NotificationBell() {
  const [trigger, setTrigger] = useState(false)

  return (
    <TouchableOpacity onPress={() => setTrigger(!trigger)}>
      <SymbolView
        symbolName="bell.badge.fill"
        colors={['red', 'black']} // Named colors
        renderingMode="palette"
        pointSize={80}
        effect="wiggle"
        isAnimating={trigger}
      />
    </TouchableOpacity>
  )
}
```

### Indefinite Animation (Breathe/Rotate)

Set `isAnimating` to `true` to loop forever.

```tsx
<SymbolView
  symbolName="lungs.fill"
  tintColor="rgba(50, 173, 230, 1)" // RGBA format
  pointSize={80}
  effect="breathe"
  isAnimating={true}
/>
```

### Magic Replace (Content Transition)

Simply change the `symbolName` while `effect="replace"` is active.

```tsx
<SymbolView
  symbolName={isAuthenticated ? 'checkmark.circle.fill' : 'faceid'}
  effect="replace"
  tintColor={isAuthenticated ? 'green' : 'black'} // Named colors
  pointSize={80}
/>
```

### Appear / Disappear Transition

> **WARNING**
> Crucial: Do not unmount the component. Use `isVisible` prop and fixed dimensions. See example app for more details on usage.

```tsx
<View>
  {/* The symbol stays mounted to play the exit animation */}
  <SymbolView
    symbolName="swift"
    pointSize={80}
    isVisible={showIcon}
    effect="appear"
  />
</View>
```

---

## ✨ Animation Effects

This library maps `isAnimating` intelligently based on the effect type:

### 1. Discrete Effects (One-Shot)

Change `isAnimating` (`true` -> `false` or `false` -> `true`) to trigger once.

| Effect      | iOS Version | Description                                        |
| ----------- | ----------- | -------------------------------------------------- |
| `wiggle`    | 18.0+       | Wiggles the symbol side to side (e.g., for alerts) |
| `bounce`    | 17.0+       | Bounces the symbol (e.g., for notifications)       |
| `scaleup`   | 18.0+       | Scales the symbol up momentarily                   |
| `scaledown` | 18.0+       | Scales the symbol down momentarily                 |

### 2. Indefinite Effects (Looping)

Set `isAnimating={true}` to loop, `{false}` to stop.

| Effect          | iOS Version | Description                                 |
| --------------- | ----------- | ------------------------------------------- |
| `breathe`       | 18.0+       | Smoothly fades opacity in and out           |
| `rotate`        | 18.0+       | Rotates the symbol continuously             |
| `pulse`         | 17.0+       | Pulses the opacity (e.g., recording status) |
| `variablecolor` | 18.0+       | Cycles opacity through layers               |

### 3. Transitions

Controlled by specific props.

| Effect    | Prop          | Description                                     |
| --------- | ------------- | ----------------------------------------------- |
| `replace` | `symbolName`  | Morphs the vector paths when the name changes   |
| `appear`  | `isVisible`   | Scales/Fades in and out when visibility changes |
| `drawon`  | `isAnimating` | Draws the symbol path (writing effect)          |

---

## 🌍 Cross-Platform Support (Android/Web)

Since SF Symbols are Apple-proprietary, this library is **iOS-only**. However, you can use the `fallback` prop to gracefully handle other platforms.

The `fallback` prop accepts any React Node, allowing you to render alternative icons (like `react-native-vector-icons` or `lucide-react-native`) on Android and Web.

```tsx
import { SymbolView } from 'react-native-nitro-symbols'
import Ionicons from '@expo/vector-icons/Ionicons'

;<SymbolView
  symbolName="star.fill"
  tintColor="gold"
  fallback={<Ionicons name="star" size={24} color="gold" />}
/>
```

For a complete example of how to build a cross-platform icon component, check out:
[FallbackDemo.tsx](example/FallbackDemo.tsx)

---

## 🔍 Symbol Discovery

This library provides full TypeScript autocomplete for all SF Symbol names. When you type `symbolName="`, your IDE will suggest all available symbols.

You can also browse symbols at:
[SF Symbols App (macOS)](https://developer.apple.com/sf-symbols/)

---

## 🛠️ Troubleshooting

### "Cannot be used with Expo Go"

This library requires custom native code. Create a development build:

```bash
npx expo prebuild
npx expo run:ios
```

### "Invariant Violation: View config getter callback..."

Ensure you do not have two instaces of react-native running at the same time.

### Animations not playing

- Check that you are on the supported iOS version (many effects need iOS 18).
- For `.appear` transitions, ensure you are using the `isVisible` prop and not conditionally unmounting the component in React Native.
- For `.appear`, ensure the component has a fixed width and height style.

---

## 📄 License

MIT License - see LICENSE file for details.

Made with ❤️ by Davey Eke for the React Native community
