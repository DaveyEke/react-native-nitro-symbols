package com.margelo.nitro.nitrosymbols

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.BaseReactPackage
import com.margelo.nitro.nitrosymbols.views.HybridSymbolViewManager

class NitroSymbolsPackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? = null

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider { HashMap() }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        val viewManagers = ArrayList<ViewManager<*, *>>()
        viewManagers.add(HybridSymbolViewManager())
        return viewManagers
    }

    companion object {
        init {
            NitroSymbolsOnLoad.initializeNative()
        }
    }
}
