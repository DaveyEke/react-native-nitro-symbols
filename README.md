# ⚡️ React Native Nitro Symbols

**A high‑performance, native SF Symbols library for React Native, built with Nitro Modules and SwiftUI.**

---

## Overview
`react-native-nitro-symbols` bridges generic React Native props directly to iOS's modern `SymbolEffect` APIs, supporting native animations such as **bounce**, **pulse**, and **drawOn** (writing animation).

---

## Platform Support
- **iOS only** – relies on Apple’s proprietary SF Symbols and SwiftUI frameworks.
- Android is **not** supported.

---

## Requirements
- **iOS 17.0+** for core functionality.
- **iOS 26.0+** for the advanced `drawOn` effect.
- Running on an older iOS version will result in a static symbol or an empty view.

---

## Development Status
- Active development – core features are stable, and more complex animations and configuration options are being added.

---

## Features
- **Nitro Powered** – near‑zero‑overhead JSI bridging.
- **Hex Colors** – standard hex strings (e.g., `"#FF0000"`).
- **Native Animations** – discrete and indefinite animations (`bounce`, `pulse`, `drawOn`).
- **Typography Control** – full control over Symbol **weight** and **scale**.
- **SwiftUI Rendering** – uses `UIHostingController` to render SwiftUI views inside React Native Fabric.

---

## Installation
Since the library is under active development, install it locally and ensure peer dependencies are satisfied.

```bash
# 1️⃣ Install the required peer dependency
npm install react-native-nitro-modules   # or
yarn add react-native-nitro-modules

# 2️⃣ Install this library locally (adjust the path as needed)
# Assuming your app lives in `example/` and this repo is a sibling folder
npm install ../path/to/react-native-nitro-symbols   # or
yarn add ../path/to/react-native-nitro-symbols

# 3️⃣ Install iOS pods
cd ios && pod install

# 4️⃣ Rebuild the app
npx expo run:ios   # or
npx react-native run-ios
```

---

## Usage
```tsx
import React from 'react';
import { SymbolView } from 'react-native-nitro-symbols';

// Basic usage
export const SimpleIcon = () => (
  <SymbolView
    symbolName="heart.fill"
    tintColor="#FF3B30"
    pointSize={50}
  />
);
```

### Animations
Control animations with the `effect` and `isAnimating` props. Core effects (`bounce`, `pulse`) require iOS 17; `drawOn` requires iOS 26.

```tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { SymbolView } from 'react-native-nitro-symbols';

export const AnimatedIcon = () => {
  const [active, setActive] = useState(false);
  return (
    <View>
      <SymbolView
        symbolName="signature"
        pointSize={80}
        tintColor="#000000"
        effect="drawOn"
        isAnimating={active}
      />
      <Button title="Sign" onPress={() => setActive(!active)} />
    </View>
  );
};
```

---

## API Reference
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `symbolName` | `string` | **required** | Name of the SF Symbol (e.g., `"house"`, `"bell.fill"`). |
| `tintColor` | `string` | `undefined` | Hex color for the symbol (e.g., `"#FF0000"`). |
| `pointSize` | `number` | `24` | Font size of the symbol. |
| `weight` | `string` | `"regular"` | Symbol weight – `ultralight`, `thin`, `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`, `black`. |
| `scale` | `string` | `"medium"` | Image scale – `small`, `medium`, `large`. |
| `effect` | `string` | `"none"` | Animation effect – `bounce`, `pulse`, `drawOn`. |
| `isAnimating` | `boolean` | `false` | When `true`, the selected effect runs. |

---

## Troubleshooting
- **"Invariant Violation: View config getter callback... received undefined"**
  - This occurs when the native view is registered against a different React Native instance. Ensure the module does **not** list `react-native` as a dependency; it should resolve to the host app’s instance.
- **Symbols not animating or showing fallback view**
  - The library checks for iOS 17 at runtime. On iOS 16 or lower the view falls back to an empty placeholder and logs a warning.

---

## Contributing & Contact
I’m actively adding features! If you need a specific animation, have a bug report, or want to contribute, feel free to reach out.

- **Twitter**: [@1804davey](https://twitter.com/1804davey)
- **GitHub**: Open issues or pull requests.

### How to Contribute
1. Run `npx nitrogen` to generate Nitro code.
2. Open `example/ios/NitroSymbolsExample.xcworkspace` for native work.
3. Edit `src/index.ts` for JavaScript/TypeScript changes.
4. Submit a PR with a clear description of your changes.
## Example App

An example Expo app demonstrating the library lives in the `example/` folder. To try it out:

```bash
cd example
npx expo start
```

The example is **not** published to npm; it is excluded via `.npmignore`.

---
## License
`react-native-nitro-symbols` is released under the MIT License. See the `LICENSE` file for details.