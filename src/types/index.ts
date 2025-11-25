import type { SFSymbol } from "sf-symbols-typescript";



export type SymbolWeight = 'ultralight' | 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'black';
export type SymbolScale = 'small' | 'medium' | 'large';
export type SFSymbolEffect = 'bounce' | 'pulse' | 'drawon' | 'scale' | 'variablecolor';
export type SymbolRenderingMode = 'monochrome' | 'hierarchical' | 'palette' | 'multicolor';
export type SymbolVariant = 'fill' | 'slash' | 'rectangle' | 'circle' | 'square';

// 1. Blacklist for C++ Macro Conflict
type CppBlacklist = 'infinity';

// 2. Blacklist for Swift Naming Conflict (Numerical Symbols)
// Matches numbers 0-100 and related symbols (e.g., 40.circle, 99.square.fill.hi)
// This pattern should exclude the vast majority of numeric symbols.
type NumericalSymbols = 
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 95 | 100}.${string}`;

// Combine all conflicts
type SymbolBlacklist = CppBlacklist | NumericalSymbols;

// Create the safe type by excluding the problematic symbols
 export type SafeSFSymbol = Exclude<SFSymbol, SymbolBlacklist>;
