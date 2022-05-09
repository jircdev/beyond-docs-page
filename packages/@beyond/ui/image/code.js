.beyond-element-image {
  position: relative;
}
.beyond-element-image.beyond-element-image-error, .beyond-element-image.beyond-element-image-preload {
  background-color: gray;
  display: block;
}
.beyond-element-image.beyond-element-image-error {
  display: flex;
  align-items: center;
  justify-content: center;
}
.beyond-element-image.beyond-element-image-error .content-error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
}
.beyond-element-image.beyond-element-image-error .content-error .beyond-icon-button {
  width: 50px;
  height: 50px;
  z-index: 1000;
}
.beyond-element-image.beyond-element-image-error .content-error .beyond-icon-button .beyond-icon {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.beyond-element-image.beyond-element-image-error .content-error span {
  display: block;
  text-align: center;
}
.beyond-element-image.cover-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.beyond-element-image.contain img {
  -o-object-fit: contain;
  object-fit: contain;
}
.beyond-element-image.fill img {
  -o-object-fit: fill;
  object-fit: fill;
}

