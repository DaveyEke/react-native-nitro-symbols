//
//  NativeSymbolSwiftUIView.swift
//  NitroSymbols
//
//  Created by Dave Mkpa Eke on 11/24/25.
//

import SwiftUI


enum SymbolEffectType {
    case none
    case bounce
    case pulse
    case drawOn
    case variableColor
    case wiggle
    case replace
    case appear
    case breathe
    case scaleUp
    case scaleDown
    //case replace
    // TO-DO: Add others as needed
}

@available(iOS 17.0, *)
struct NativeSymbolSwiftUIView: View {
    let symbolName: String
    let tintColor: Color?
    let colors: [Color]
    let renderingMode: SwiftUI.SymbolRenderingMode
    let variant: SymbolVariants
    let pointSize: CGFloat
    let weight: Font.Weight
    let scale: Image.Scale
    let isAnimating: Bool
    let effect: SymbolEffectType
    
    var body: some View {
        let baseImage = Image(systemName: symbolName)
            .font(.system(size: pointSize, weight: weight))
            .imageScale(scale)
            .symbolRenderingMode(renderingMode)
            .symbolVariant(variant)
            .applyForegroundStyle(colors: colors, tintColor: tintColor)
        applyEffect(to: baseImage)
    }
    
    @ViewBuilder
    func applyEffect(to view: some View) -> some View {
        switch effect {
        case .bounce:
            if #available(iOS 18.0, *) {
                view.symbolEffect(.bounce, isActive: isAnimating)
            } else {
                // Fallback on earlier versions
            }
        case .pulse:
            view.symbolEffect(.pulse, isActive: isAnimating) //.pulse
        case .drawOn:
            if #available(iOS 26.0, *) {
                view.symbolEffect(.drawOn, isActive: isAnimating)
            } else {
                // Fallback on earlier versions
            }
        case .variableColor:
            if #available(iOS 18.0, *) {
                view.symbolEffect(.variableColor, isActive: isAnimating)
            } else {
                // Fallback on earlier versions
            }
        case .scaleUp:
            if #available(iOS 18.0, *) {
                view.symbolEffect(.scale.up, isActive: isAnimating)
            }
        case .scaleDown:
            if #available(iOS 18.0, *) {
                view.symbolEffect(.scale.down, isActive: isAnimating)
            }
        case .none:
            view
        }
    }
}


extension View {
    @ViewBuilder
    func applyForegroundStyle(colors: [Color], tintColor: Color?) -> some View {
        if !colors.isEmpty {
            if colors.count == 1 {
                self.foregroundStyle(colors[0])
            } else if colors.count == 2 {
                self.foregroundStyle(colors[0], colors[1])
            } else {
                self.foregroundStyle(colors[0], colors[1], colors[2])
            }
        } else if let tintColor = tintColor {
            self.foregroundStyle(tintColor)
        } else {
            self
        }
    }
}








