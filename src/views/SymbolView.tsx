import React from 'react'
import { processColor, type ColorValue, Platform, type ViewProps } from 'react-native'
import { getHostComponent } from 'react-native-nitro-modules'
import type { SFSymbol } from 'sf-symbols-typescript'
import type { SymbolProps, SymbolPropsMethods } from '../specs/SymbolView.nitro'
import SymbolViewConfig from '../../nitrogen/generated/shared/json/SymbolViewConfig.json'

const SymbolViewNative = Platform.OS === 'ios' 
    ? getHostComponent<SymbolProps, SymbolPropsMethods>(
        'SymbolView',
        () => SymbolViewConfig
      )
    : null

export type SymbolViewProps = Omit<SymbolProps, 'symbolName' | 'tintColor' | 'colors'> & ViewProps & {
    symbolName: SFSymbol;
    /**
     * Color for monochrome rendering. Supports named colors (`"red"`), hex (`"#FF0000"`), RGB, RGBA, HSL.
     */
    tintColor?: ColorValue; 
    /**
     * Array of colors for palette rendering (up to 3 colors). Supports all React Native color formats.
     */
    colors?: ColorValue[];
    /**
     * **(Android/Web only)** React node to render on non-iOS platforms.
     * 
     * Since SF Symbols are iOS-only, use this prop to provide a fallback icon (e.g. using `react-native-vector-icons`)
     * for Android and Web users.
     * 
     * @example
     * <SymbolView 
     *   symbolName="star.fill" 
     *   fallback={<Ionicons name="star" />} 
     * />
     * 
     * @see [FallbackDemo.tsx](../../example/FallbackDemo.tsx) for a full example.
     */
    fallback?: React.ReactNode
}

export const SymbolView: React.FC<SymbolViewProps> = (props) => {
    const { tintColor, colors, fallback, ...restProps } = props

    if (Platform.OS !== 'ios') {
        return fallback ? <>{fallback}</> : null
    }
    
    if (!SymbolViewNative) {
        return null
    }

    const processedTintColor = processColor(tintColor) as number | undefined
    
    const processedColors = colors 
        ? (colors.map(c => processColor(c)) as number[])
        : undefined

    return (
        <SymbolViewNative 
            {...restProps} 
            tintColor={processedTintColor}
            colors={processedColors}
        />
    )
}