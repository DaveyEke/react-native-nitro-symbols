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
    // TO-DO: Add others as needed
}

@available(iOS 17.0, *)
struct NativeSymbolSwiftUIView: View {
    let symbolName: String
    let tintColor: Color?
    let pointSize: CGFloat
    let weight: Font.Weight
    let scale: Image.Scale
    let isAnimating: Bool
    let effect: SymbolEffectType
    
    var body: some View {
            let baseImage = Image(systemName: symbolName)
                 .font(.system(size: pointSize, weight: weight))
                 .imageScale(scale)
                 .foregroundColor(tintColor)
              // Apply the effect based on the enum
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
                view.symbolEffect(.pulse, isActive: isAnimating)
            case .drawOn:
                if #available(iOS 26.0, *) {
                    view.symbolEffect(.drawOn, isActive: isAnimating)
                } else {
                    // Fallback on earlier versions
                }
            case .none:
                view
            }
        }
    }








