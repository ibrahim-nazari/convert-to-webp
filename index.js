const unconvertedImages = "./unconvertedImages/";
const webpconverted = "./webpconverted/";
const name = "manawoodllc_closet";
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
