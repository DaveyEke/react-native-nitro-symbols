import type { SFSymbol } from "sf-symbols-typescript";



export type SymbolWeight = 'ultralight' | 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'black';
export type SymbolScale = 'small' | 'medium' | 'large';
export type SFSymbolEffect = 'bounce' | 'pulse' | 'drawon' | 'scale' | 'variablecolor';
export type SymbolRenderingMode = 'monochrome' | 'hierarchical' | 'palette' | 'multicolor';
export type SymbolVariant = 'fill' | 'slash' | 'rectangle' | 'circle' | 'square';
type SymbolBlacklist = 'infinity'
export type SafeSFSymbol = Exclude<SFSymbol, SymbolBlacklist>