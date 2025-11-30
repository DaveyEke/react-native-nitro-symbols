// SymbolView.nitro.ts

import type { HybridView, HybridViewProps, HybridViewMethods } from 'react-native-nitro-modules';
import type { SymbolWeight, SymbolScale, SFSymbolEffect, SymbolRenderingMode, SymbolVariant } from '../types';



/**
 * Defines the properties for the RNSymbolView component.
 */
export interface SymbolProps extends HybridViewProps {
  symbolName: string; // proper type is used in src/index.ts. "string" is used here for the sake of nitrogen. 
  pointSize?: number;
  weight?: SymbolWeight;
  tintColor?: number;
  isAnimating?: boolean;
  isVisible?: boolean;
  scale?: SymbolScale;
  effect?: SFSymbolEffect;
  colors?: number[];
  variant?: SymbolVariant;
  renderingMode?: SymbolRenderingMode;
}

export interface SymbolPropsMethods extends HybridViewMethods { }

export type SymbolView = HybridView<SymbolProps, SymbolPropsMethods>;