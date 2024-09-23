const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: 'ds2sgvglm',
  api_key: '836249122544832',
  api_secret: 'S0xocDHZshzuuOEWaBYUXJlz1Co',
});

module.exports = cloudinary;