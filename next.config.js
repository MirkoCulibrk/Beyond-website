const nextTranslate = require('next-translate');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos')
// module.exports = withImages();
// module.exports=nextTranslate({
//     webpack: (config, { isServer, webpack }) => {
//       return config;
//     }
// });
module.exports=withPlugins([
  withImages,
  nextTranslate,
  withVideos
]);