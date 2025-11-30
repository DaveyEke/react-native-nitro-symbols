import { SymbolView } from "./views/SymbolView";
// Export the component
export { SymbolView }

// Export all types for autocomplete and type safety
export type {
    SymbolWeight,
    SymbolScale,
    SFSymbolEffect,
    SymbolRenderingMode,
    SymbolVariant
} from './types'

export type { SymbolProps } from './specs/SymbolView.nitro'

export type { SymbolViewProps } from './views/SymbolView'