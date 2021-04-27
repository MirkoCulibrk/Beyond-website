const nextTranslate = require('next-translate');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
// module.exports = withImages();
// module.exports=nextTranslate({
//     webpack: (config, { isServer, webpack }) => {
//       return config;
//     }
// });
module.exports=withPlugins([
  withImages,
  nextTranslate
]);