import { getHostComponent } from 'react-native-nitro-modules'
import type { SymbolProps } from '../specs/SymbolView.nitro'
import type { SymbolPropsMethods } from '../specs/SymbolView.nitro'
// @ts-ignore - JSON import
import SymbolViewConfig from '../../nitrogen/generated/shared/json/SymbolViewConfig.json'

export const SymbolView = getHostComponent<SymbolProps, SymbolPropsMethods>(
    'SymbolView',
    () => SymbolViewConfig
)
