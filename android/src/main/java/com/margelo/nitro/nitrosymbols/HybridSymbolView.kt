package com.margelo.nitro.nitrosymbols

import android.content.Context
import android.view.View
import com.margelo.nitro.nitrosymbols.*

/**
 * Android stub implementation of HybridSymbolView.
 * This class exists to satisfy the build system, but won't be used in practice
 * since the React component renders a fallback on Android via the `fallback` prop.
 */
class HybridSymbolView(context: Context) : HybridSymbolViewSpec() {
    
    private val stubView: View = View(context)
    
    override val view: View
        get() = stubView
    
    override var symbolName: String = ""
    override var pointSize: Double? = null
    override var weight: SymbolWeight? = null
    override var tintColor: Double? = null
    override var isAnimating: Boolean? = null
    override var isVisible: Boolean? = null
    override var scale: SymbolScale? = null
    override var effect: SFSymbolEffect? = null
    override var colors: DoubleArray? = null
    override var variant: SymbolVariant? = null
    override var renderingMode: SymbolRenderingMode? = null
    
    override fun beforeUpdate() {}
    override fun afterUpdate() {}

    // Shim methods to resolve Nitrogen JNI mismatch for boolean properties starting with 'is'
    // C++ expects setIsVisible/setIsAnimating, but Kotlin generates setVisible/setAnimating
    @Suppress("unused")
    fun setIsVisible(value: Boolean?) { isVisible = value }
    
    @Suppress("unused")
    fun setIsAnimating(value: Boolean?) { isAnimating = value }
}