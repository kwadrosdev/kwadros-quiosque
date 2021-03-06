const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['scontent.cdninstagram.com'],
  },
  compiler: {
    styledComponents: true,
  },
};
