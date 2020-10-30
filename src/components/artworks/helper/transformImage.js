function transformImage(image = "", option) {
  var imageService = "https://img2.storyblok.com/"
  var path = image.replace("https://a.storyblok.com", "")
  return imageService + option + "/" + path
}

export default transformImage
