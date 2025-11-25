// SymbolView.nitro.ts

import type { HybridView, HybridViewProps, HybridViewMethods } from 'react-native-nitro-modules';

import type { SymbolWeight, SymbolScale, SFSymbolEffect, SymbolRenderingMode, SymbolVariant } from '../types';



/**
 * Defines the properties for the RNSymbolView component.
 */
export interface SymbolProps extends HybridViewProps {
  symbolName: string; //TODO: use sf-symbols-typescript once nitro modules error code gen error is fixed
  pointSize?: number;
  weight?: SymbolWeight;
  tintColor?: string;
  isAnimating?: boolean;
  scale?: SymbolScale;
  effect?: SFSymbolEffect;
  colors?: string[];
  variant?: SymbolVariant;
  renderingMode?: SymbolRenderingMode;
}

export interface SymbolPropsMethods extends HybridViewMethods { }

// Export the HybridView type which is used by Nitro's code generator
export type SymbolView = HybridView<SymbolProps, SymbolPropsMethods>;