//
//  HybridSymbolView.swift
//  NitroSymbols
//
//  Created by Dave Mkpa Eke on 11/24/25.
//

import UIKit
import SwiftUI
import NitroModules

class HybridSymbolView: HybridSymbolViewSpec {
    
    private var controller: UIViewController?
    private var fallbackView: UIView?
    
    var view: UIView {
        return controller?.view ?? fallbackView ?? UIView()
    }
    
    override init() {
        super.init()
        
        if #available(iOS 17.0, *) {
            let initialView = NativeSymbolSwiftUIView(
                symbolName: "",
                tintColor: nil,
                colors: [],
                renderingMode: .monochrome,
                variant: .none,
                pointSize: 20.0,
                weight: .regular,
                scale: .medium,
                isAnimating: false,
                isVisible: false,
                effect: .none
            )
            
            let hosting = UIHostingController(rootView: initialView)
            hosting.view.backgroundColor = .clear
            self.controller = hosting
        } else {
            let legacyView = UIView()
            legacyView.backgroundColor = .clear
            print("NitroSymbols: SF Symbol animations require iOS 17+")
            self.fallbackView = legacyView
        }
    }
    
    var symbolName: String = "" {
        didSet { if oldValue != symbolName { updateSwiftUIView() } }
    }
    
    var pointSize: Double? {
        didSet { if oldValue != pointSize { updateSwiftUIView() } }
    }
    
    var weight: SymbolWeight? {
        didSet { if oldValue != weight { updateSwiftUIView() } }
    }
    
    var tintColor: Double? {
        didSet { if oldValue != tintColor { updateSwiftUIView() } }
    }
    
    var isAnimating: Bool? {
        didSet { if oldValue != isAnimating { updateSwiftUIView() } }
    }
    
    var isVisible: Bool? {
        didSet { if oldValue != isVisible { updateSwiftUIView() } }
    }
    
    var scale: SymbolScale? {
        didSet { if oldValue != scale { updateSwiftUIView() } }
    }
    
    var effect: SFSymbolEffect? {
        didSet { if oldValue != effect { updateSwiftUIView() } }
    }
    
    var colors: [Double]? {
        didSet { if oldValue != colors { updateSwiftUIView() } }
    }
    
    var variant: SymbolVariant? {
        didSet { if oldValue != variant { updateSwiftUIView() } }
    }
    
    var renderingMode: SymbolRenderingMode? {
        didSet { if oldValue != renderingMode { updateSwiftUIView() } }
    }
    
    private func updateSwiftUIView() {
        if #available(iOS 17.0, *) {
            guard let hosting = controller as? UIHostingController<NativeSymbolSwiftUIView> else { return }
            
            let newRootView = NativeSymbolSwiftUIView(
                symbolName: symbolName,
                tintColor: mapARGBToColor(argb: tintColor),
                colors: mapColors(colors),
                renderingMode: mapRenderingMode(renderingMode),
                variant: mapVariant(variant),
                pointSize: CGFloat(pointSize ?? 24.0),
                weight: mapWeight(weight),
                scale: mapScale(scale),
                isAnimating: isAnimating ?? false,
                isVisible: isVisible ?? false,
                effect: mapEffect(effect)
            )
            
            hosting.rootView = newRootView
        }
    }
}
