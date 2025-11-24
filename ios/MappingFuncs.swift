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

// Simple Hex String to SwiftUI Color Mapper
func mapHexToColor(hex: String?) -> Color? {
    guard let hex = hex else { return nil }
    // Simple shim to convert hex string.
    // In a real app, you might use a robust UIColor(hex:) extension
    // For now, let's assume standard React Native colors or use UIColor logic
    if let uiColor = UIColor(hexString: hex) {
        return Color(uiColor)
    }
    return nil
}

