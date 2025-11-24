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
                pointSize: 20.0,
                weight: .regular,
                scale: .medium,
                isAnimating: false,
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
    
    var weight: String? {
        didSet { if oldValue != weight { updateSwiftUIView() } }
    }
    
    var tintColor: String? {
        didSet { if oldValue != tintColor { updateSwiftUIView() } }
    }
    
    var isAnimating: Bool? {
        didSet { if oldValue != isAnimating { updateSwiftUIView() } }
    }
    
    var scale: String? {
        didSet { if oldValue != scale { updateSwiftUIView() } }
    }
    
    var effect: String? {
        didSet { if oldValue != effect { updateSwiftUIView() } }
    }
    
    private func updateSwiftUIView() {
        if #available(iOS 17.0, *) {
            guard let hosting = controller as? UIHostingController<NativeSymbolSwiftUIView> else { return }
            
            let newRootView = NativeSymbolSwiftUIView(
                symbolName: symbolName,
                tintColor: mapHexToColor(hex: tintColor),
                pointSize: CGFloat(pointSize ?? 24.0),
                weight: mapWeight(weight),
                scale: mapScale(scale),
                isAnimating: isAnimating ?? false,
                effect: mapEffect(effect)
            )
            
            hosting.rootView = newRootView
        }
    }
}
