const NextFederationPlugin = require('@module-federation/nextjs-mf');
module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'federated',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ParticleConfettiAnimation': './components/ParticleConfettiAnimation.js',
          },
          remotes: {
            web: 'web@http://localhost:3000/_next/static/chunks/remoteEntry.js',
            akhaada: `akhaada@localhost:3002/_next/static/${
              options.isServer ? 'ssr' : 'chunks'
            }/remoteEntry.js`,
          },
        }),
      );
    }
    return config;
  },
};
