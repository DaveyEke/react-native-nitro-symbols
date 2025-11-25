//
//  MappingFuncs.swift
//  NitroSymbols
//
//  Created by Dave Mkpa Eke on 11/24/25.
//

import Foundation
import SwiftUI

func mapEffect(_ value: String?) -> SymbolEffectType {
    switch value?.lowercased() {
    case "bounce": return .bounce
    case "pulse": return .pulse
    case "drawon": return .drawOn
    case "scale": return .scale
    case "variablecolor": return .variableColor
    default: return .none
    }
}

func mapWeight(_ value: String?) -> Font.Weight {
    switch value?.lowercased() {
    case "ultralight": return .ultraLight
    case "thin": return .thin
    case "light": return .light
    case "regular": return .regular
    case "medium": return .medium
    case "semibold": return .semibold
    case "bold": return .bold
    case "heavy": return .heavy
    case "black": return .black
    default: return .regular
    }
}

func mapScale(_ value: String?) -> Image.Scale {
    switch value?.lowercased() {
    case "small": return .small
    case "large": return .large
    default: return .medium
    }
}

func mapRenderingMode(_ value: String?) -> SymbolRenderingMode {
    switch value?.lowercased() {
    case "monochrome": return .monochrome
    case "hierarchical": return .hierarchical
    case "palette": return .palette
    case "multicolor": return .multicolor
    default: return .monochrome
    }
}

func mapVariant(_ value: String?) -> SymbolVariants {
    switch value?.lowercased() {
    case "fill": return .fill
    case "slash": return .slash
    case "rectangle": return .rectangle
    case "circle": return .circle
    case "square": return .square
    default: return .none
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

