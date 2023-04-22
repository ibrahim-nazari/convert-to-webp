const unconvertedImages = "./images/";
const webpconverted = "./convertedToWebp/";
const name = "image_";
const sharp = require("sharp");
const fs = require("fs");

fs.readdir(unconvertedImages, (err, files) => {
  files.forEach((file, index) => {
    sharp(`${unconvertedImages}${file}`)
      .rotate(0)
      .resize({ width: 800, fit: "contain" })
      .toFile(`${webpconverted}${name}_${index + 1}.webp`, (err, info) => {
        console.log(err);
      });
  });
});
