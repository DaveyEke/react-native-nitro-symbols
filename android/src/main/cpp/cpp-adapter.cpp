#include <jni.h>
#include "NitroSymbolsOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitrosymbols::initialize(vm);
}
