import React from 'react'
import { processColor, type ColorValue } from 'react-native'
import { getHostComponent } from 'react-native-nitro-modules'
import type { SFSymbol } from 'sf-symbols-typescript'
import type { SymbolProps, SymbolPropsMethods } from '../specs/SymbolView.nitro'
import SymbolViewConfig from '../../nitrogen/generated/shared/json/SymbolViewConfig.json'


const SymbolViewNative = getHostComponent<SymbolProps, SymbolPropsMethods>(
    'SymbolView',
    () => SymbolViewConfig
)


export type SymbolViewProps = Omit<SymbolProps, 'symbolName' | 'tintColor' | 'colors'> & {
    symbolName: SFSymbol;
    tintColor?: ColorValue; 
    colors?: ColorValue[];
}

export const SymbolView: React.FC<SymbolViewProps> = (props) => {
    const { tintColor, colors, ...restProps } = props
    
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