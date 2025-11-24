// SymbolView.nitro.ts

import type { HybridView, HybridViewProps, HybridViewMethods } from 'react-native-nitro-modules';

/**
 * Defines the properties for the RNSymbolView component.
 */
export interface SymbolProps extends HybridViewProps {
  symbolName: string; 
  pointSize?: number;
  weight?: string; 
  tintColor?: string; 
  isAnimating?: boolean; 
  scale?: string; 
  effect?: string; 
}

export interface SymbolPropsMethods extends HybridViewMethods { }

// Export the HybridView type which is used by Nitro's code generator
export type SymbolView = HybridView<SymbolProps, SymbolPropsMethods>;