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
type NumericalPrefixes = 
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` // Single digits
  | `${10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19}` 
  | `${20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29}` 
  | `${30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39}` 
  | `${40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49}` 
  | `${50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59}` 
  | `${60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69}` 
  | `${70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79}` 
  | `${80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89}` 
  | `${90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100}`


type NumericalSymbols = 
  | `${NumericalPrefixes}.${string}`;
// Combine all conflicts
type SymbolBlacklist = CppBlacklist | NumericalSymbols;

// Create the safe type by excluding the problematic symbols
 export type SafeSFSymbol = Exclude<SFSymbol, SymbolBlacklist>;
