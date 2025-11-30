const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

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

module.exports = config;