//
//  MappingFuncs.swift
//  NitroSymbols
//
//  Created by Dave Mkpa Eke on 11/24/25.
//

import Foundation
import SwiftUI

func mapEffect(_ value: SFSymbolEffect?) -> SymbolEffectType {
    guard let value = value else { return .none }
    switch value {
    case .bounce: return .bounce
    case .pulse: return .pulse
    case .drawon: return .drawOn
    case .scaleup: return .scaleUp
    case .variablecolor: return .variableColor
    case .scaledown:
        return .scaleDown
    case .wiggle:
        return .wiggle
    case .breathe:
        return .breathe
    case .rotate:
        return .rotate
    case .replace:
        return .replace
    case .appear:
        return .appear
    }
}

func mapWeight(_ value: SymbolWeight?) -> Font.Weight {
    guard let value = value else { return .regular }
    switch value {
    case .ultralight: return .ultraLight
    case .thin: return .thin
    case .light: return .light
    case .regular: return .regular
    case .medium: return .medium
    case .semibold: return .semibold
    case .bold: return .bold
    case .heavy: return .heavy
    case .black: return .black
    }
}

func mapScale(_ value: SymbolScale?) -> Image.Scale {
    guard let value = value else { return .medium }
    switch value {
    case .small: return .small
    case .large: return .large
    case .medium: return .medium
    }
}

func mapRenderingMode(_ value: SymbolRenderingMode?) -> SwiftUI.SymbolRenderingMode {
    guard let value = value else { return .monochrome }
    switch value {
    case .monochrome: return .monochrome
    case .hierarchical: return .hierarchical
    case .palette: return .palette
    case .multicolor: return .multicolor	
    }
}

func mapVariant(_ value: SymbolVariant?) -> SymbolVariants {
    guard let value = value else { return .none }
    switch value {
    case .fill: return .fill
    case .slash: return .slash
    case .rectangle: return .rectangle
    case .circle: return .circle
    case .square: return .square
    }
}

func mapColors(_ values: [String]?) -> [Color] {
    guard let values = values else { return [] }
    return values.compactMap { mapHexToColor(hex: $0) }
}

// Simple Hex String to SwiftUI Color Mapper
func mapHexToColor(hex: String?) -> Color? {
    guard let hex = hex else { return nil }
    // Simple shim to convert hex string
    if let uiColor = UIColor(hexString: hex) {
        return Color(uiColor)
    }
    return nil
}

