//
//  UIColor+Extension.swift
//  NitroSymbols
//
//  Created by Dave Mkpa Eke on 11/24/25.
//

import Foundation
import SwiftUI


//TODO: Change file name from "UIColor+Extension" to "Colour+Extension"

extension Color {
    /**
     Initializes a SwiftUI Color from the 32-bit ARGB integer value
     produced by React Native's processColor function.
     
     - Parameter argb: The raw UInt32 ARGB color value (e.g., 0xFF4169E1).
     */
    init(reactNativeARGB argb: UInt32) {
        let alpha = Double((argb >> 24) & 0xFF) / 255.0
        let red = Double((argb >> 16) & 0xFF) / 255.0
        let green = Double((argb >> 8) & 0xFF) / 255.0
        let blue = Double(argb & 0xFF) / 255.0
        self.init(red: red, green: green, blue: blue, opacity: alpha)
    }
}
