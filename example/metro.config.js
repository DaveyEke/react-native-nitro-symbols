// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Point to the parent library
const libraryRoot = path.resolve(__dirname, '..');

// Watch the library folder
config.watchFolders = [libraryRoot];

// Resolve modules from library
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(libraryRoot, 'node_modules'),
];

// Resolve the library package
config.resolver.extraNodeModules = {
  'react-native-nitro-symbols': libraryRoot,
};

module.exports = config;