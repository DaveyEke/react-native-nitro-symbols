const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro'); 

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch the parent workspace
config.watchFolders = [workspaceRoot];

// Block react-native from parent node_modules to prevent duplicates
config.resolver.blockList = [
  new RegExp(`${workspaceRoot}/node_modules/react-native/.*`),
  new RegExp(`${workspaceRoot}/node_modules/react/.*`),
];

// Force react-native to resolve from example's node_modules only
config.resolver.extraNodeModules = {
  'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
  'react': path.resolve(projectRoot, 'node_modules/react'),
};

// Add nodeModulesPaths to ensure library resolves from example's node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

// Apply uniwind config and export
module.exports = withUniwindConfig(config, {  
  // relative path to your global.css file (from previous step)
  cssEntryFile: './global.css',
  // (optional) path where we gonna auto-generate typings
  // defaults to project's root
  dtsFile: './uniwind-types.d.ts'
});