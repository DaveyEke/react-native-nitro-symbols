import { getHostComponent } from 'react-native-nitro-modules'
import type { SymbolProps } from '../specs/SymbolView.nitro'
import type { SymbolPropsMethods } from '../specs/SymbolView.nitro'
import type { ComponentType } from 'react'
import type { SFSymbol } from 'sf-symbols-typescript'
import SymbolViewConfig from '../../nitrogen/generated/shared/json/SymbolViewConfig.json'

const SymbolViewNative = getHostComponent<SymbolProps, SymbolPropsMethods>(
    'SymbolView',
    () => SymbolViewConfig
)

export type SymbolViewProps = Omit<SymbolProps, 'symbolName'> & {
    symbolName: SFSymbol;
}


export const SymbolView = SymbolViewNative as ComponentType<SymbolViewProps>
