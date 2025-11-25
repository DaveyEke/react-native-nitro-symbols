// types.ts

import type { SFSymbol } from "sf-symbols-typescript";

export type SymbolWeight = 'ultralight' | 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'black';
export type SymbolScale = 'small' | 'medium' | 'large';
export type SFSymbolEffect = 'bounce' | 'pulse' | 'drawon' | 'scale' | 'variablecolor';
export type SymbolRenderingMode = 'monochrome' | 'hierarchical' | 'palette' | 'multicolor';
export type SymbolVariant = 'fill' | 'slash' | 'rectangle' | 'circle' | 'square';

// Blacklist for C++ Macro conflict (e.g., #define infinity)
type CppBlacklist = 'infinity';

// Blacklist for Swift Naming Conflicts (Symbols starting with a number, which isn't allowed)

// Catches common numerical and short codes that cause Swift compile errors
type NumericalPrefixes = 
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | '123' 
  | '00'; 

// Catches symbols like "47.circle" or "123.rectangle"
type DotSeparatedSymbols = `${NumericalPrefixes}.${string}`;

// Catches symbols like "2h", "4a", "4l"
type AlphanumericCodeSymbols = 
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}h` 
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}a`
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}l`;

type SwiftNumericalBlacklist = DotSeparatedSymbols | AlphanumericCodeSymbols;

// Combine all conflicts
type SymbolBlacklist = CppBlacklist | SwiftNumericalBlacklist;

// Create the safe type by excluding the problematic symbols
 export type SafeSFSymbol = Exclude<SFSymbol, SymbolBlacklist>;