.block__features {
  display: grid;
  border: 1px solid var(--secondary-dark);
  padding: 2rem;
  border-radius: var(--border-radius-base);
  grid-gap: 2rem;
  position: relative;
  margin: 2rem auto;
}
.block__features > .content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.block__features h3 {
  padding: 0;
  margin-top: 1rem;
}
.block__features.two-columns, .block__features.three-columns {
  grid-template-columns: 1fr;
}
.block__features .relative-container {
  position: relative;
}
.block__features .navigator__box .box__code pre code {
  font-size: 0.8rem;
}
@media (max-width: 480px) {
  .block__features p, .block__features h1, .block__features h2, .block__features h3 {
    text-align: center;
  }
}
@media (min-width: 481px) {
  .block__features {
    margin: 2rem auto;
  }
  .block__features.two-columns {
    grid-template-columns: 1fr 1fr;
  }
  .block__features.three-columns {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.g-container {
  display: grid;
}
.g-container.two-columns, .g-container.three-columns {
  grid-template-columns: 1fr;
}
.g-container .beyond-element-image img {
  width: 100%;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
}
@media (min-width: 481px) {
  .g-container.two-columns {
    grid-template-columns: 1fr 1fr;
  }
  .g-container.three-columns {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.image-over {
  position: absolute;
  max-width: 50%;
  width: 50%;
  top: 20%;
  left: 3rem;
  position: absolute;
  max-width: 130%;
}
@media (max-width: 768px) {
  .image-over {
    position: relative;
  }
}
.image-over .beyond-element-image {
  z-index: 2;
  width: 80%;
}
.image-over .beyond-element-image img {
  width: 100%;
}
.image-over .beyond-element-image:nth-child(2) {
  z-index: 1;
  top: -50%;
  left: -20%;
  position: absolute;
}
@media (max-width: 480px) {
  .image-over .beyond-element-image {
    width: 130%;
    padding: 0;
    margin: 0;
  }
  .image-over .beyond-element-image:nth-child(2) {
    left: 0;
    top: -30%;
    left: -40%;
  }
}
@media (max-width: 480px) {
  .image-over {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .image-over {
    position: relative;
  }
}
.image-over ul {
  margin: 0;
  padding: 0;
}
.cards__container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 2rem;
  padding: 2rem;
  width: calc(100% - 4rem);
}
.cards__container .accent {
  color: var(--accent-color);
}
.cards__container a {
  text-decoration: none;
}
.cards__container .docs__card {
  text-decoration: none;
  background: var(--color-gray-90);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-radius: var(--border-radius-base);
  justify-content: space-between;
  transition: all 200ms ease-in;
}
.cards__container .docs__card:hover {
  background: var(--color-carbon-90);
  padding-left: 1.5rem;
  padding-right: 2.5rem;
}
.cards__container .docs__card h3 {
  padding: 0;
  margin: 0 0 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  background: var(--app-dark-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width: 800px) {
  .cards__container {
    grid-auto-flow: row;
  }
}
.header__circle span {
  position: absolute;
  left: calc(50% + 250px);
  top: calc(25% - 50px);
  z-index: 1;
  border-radius: 50%;
  background: var(--secondary-dark);
  height: 400px;
  width: 400px;
  margin: auto;
  animation: pulse 4.5s linear infinite;
  animation-delay: calc(0.5s * var(--i));
  transition: all 300ms ease-in;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  90% {
    transform: scale(3);
    opacity: 0.75;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
.fade-out {
  animation: fadeOutAnimation ease 300ms forwards;
}

.fade-in {
  animation: fadeInAnimation ease 300ms forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOutAnimation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.top__header {
  display: flex;
  justify-content: end;
  margin: 0 0 -72px;
  z-index: 12;
  flex-shrink: 1;
  align-items: center;
  align-content: center;
}
.top__header .menu-container {
  z-index: 3;
}
.top__header .header__menu {
  z-index: 12;
  list-style: none;
  height: 100%;
  display: flex;
  gap: 15px;
  padding: 0 1rem;
  margin: 0;
  align-items: center;
  align-content: center;
  flex-shrink: 1;
  font-family: var(--font-family);
}
.top__header .header__menu li {
  list-style: none;
  position: relative;
  padding: 5px;
}
.top__header .header__menu li:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 0;
  content: " ";
  transition: width 300ms;
  height: 1px;
  background: var(--accent-color);
}
.top__header .header__menu li a {
  text-decoration: none;
}
.top__header .header__menu li:hover:after {
  width: 100%;
}
@keyframes exit {
  from {
    width: 100%;
  }
  to {
    width: 0;
    display: none;
  }
}
@keyframes move-to-right {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
header.home__header {
  background: var(--primary-surface);
  aspect-ratio: 16/7;
  overflow: hidden;
  padding: 2rem;
  margin: 1rem auto auto;
  width: calc(100% - 4rem);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
header.home__header h1 {
  font-size: 4rem;
  font-family: var(--header-font);
  line-height: 0.9;
  background: var(--app-primary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
header.home__header h1 strong {
  padding: 1.2rem 0 0;
  display: flex;
  color: var(--primary);
}
header.home__header .container {
  z-index: 2;
}
header.home__header .container .header__content {
  width: 70%;
}
header.home__header .container .beyond-element-image {
  margin: 0;
}
header.home__header .container > figure {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 30%;
}
header.home__header .container > figure .beyond__icon {
  display: flex;
  width: 100%;
  justify-content: center;
}
@media (min-width: 1500px) {
  header.home__header {
    aspect-ratio: 16/5;
  }
}
@media (max-width: 800px) {
  header.home__header {
    aspect-ratio: 9/16;
    align-items: center;
    justify-items: center;
  }
  header.home__header .container {
    margin-top: 2rem;
    height: 100%;
  }
  header.home__header .container .header__content {
    width: 100%;
  }
  header.home__header .container .header__content h1 {
    font-size: 2rem;
  }
  header.home__header .container > figure {
    display: none;
  }
}
.beyond__icon svg {
  position: relative;
  transition: all ease-in 100ms;
}
.beyond__icon svg #beyond-ales path {
  fill: #B6BDC7;
}
.beyond__icon svg #beyond-circle path {
  fill: #D9684A;
}
.top__header {
  width: 100%;
  z-index: 12;
  border-bottom: 1px solid var(--border-element-color-1);
}
.top__header .menu-container {
  border-bottom: 1px solid var(--border-element-color-1);
}
.top__header .menu-container {
  padding: 0;
}
.top__header .mobile__header {
  padding: 0 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.top__header .mobile__header .beyond-element-image {
  height: 60%;
  margin: 0;
}
.top__header .mobile__header .beyond-element-image img {
  height: 100%;
}
@media (max-width: 768px) {
  .top__header .menu-list__container {
    position: absolute;
    width: 100%;
    top: 59px;
    left: 0;
    z-index: 10;
    height: 0;
    bottom: 0;
  }
  .top__header .menu-list__container.opened {
    height: 100%;
  }
  .top__header .header__menu {
    transition: all 300ms ease-in;
    animation: hideIn ease 300ms forwards;
  }
  .top__header .header__menu:not(.opened) {
    display: none;
  }
  .top__header .header__menu.opened {
    transition: all 300ms ease-in;
    display: flex;
    height: calc(100% - 59px);
    flex-direction: column;
    align-items: start;
    width: calc(100% - 2rem);
    gap: 0;
    padding: 2rem 1rem;
    background: var(--secondary-background);
    animation: showIn ease 300ms forwards;
  }
  .top__header .header__menu.opened li {
    width: 100%;
  }
  .top__header .header__menu.opened li a {
    font-size: 0.8rem;
  }
  .top__header .header__menu.opened li:before {
    content: " ";
    width: calc(100% - 1rem);
    position: absolute;
    left: 0;
    background: transparent;
    bottom: -5px;
    border-bottom: 1px solid var(--border-element-color-1);
  }
  .top__header .header__menu.opened li:hover:after {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .top__header {
    display: flex;
    justify-content: end;
    flex-grow: 0;
    flex-shrink: 0;
  }
}

@keyframes showIn {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: 100%;
  }
}
@keyframes hideIn {
  from {
    opacity: 1;
    height: 100%;
  }
  to {
    display: none;
    opacity: 0;
    height: 0;
  }
}
.hamburger-icon-container {
  background: transparent;
  border: none;
}
@media (min-width: 1025px) {
  .hamburger-icon-container {
    display: none;
  }
}
.hamburger-icon-container .hamburger-icon {
  display: none;
}
.hamburger-icon-container .hamburger-icon + label {
  user-select: none;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 23px;
  box-sizing: content-box;
  border: 0 solid transparent;
  z-index: 1050;
  line-height: 23px;
  white-space: nowrap;
  background: transparent;
  border-radius: 0;
}
.hamburger-icon-container .hamburger-icon + label span {
  display: inline-block;
  position: absolute;
  left: 100%;
  margin-top: 1px;
  transition: color 0.25s;
  margin-left: 0;
}
.hamburger-icon-container .hamburger-icon + label span::before, .hamburger-icon-container .hamburger-icon + label span::after {
  content: "";
  display: inline-block;
  min-width: 10px;
  width: 6.4px;
}
.hamburger-icon-container .hamburger-icon + label i, .hamburger-icon-container .hamburger-icon + label::before, .hamburger-icon-container .hamburger-icon + label::after {
  position: absolute;
  left: 0;
  display: block;
  will-change: transform, background-color;
  width: 32px;
  height: 3px;
  border-radius: 0;
  transition: transform 0.25s, background-color 0.25s;
  backface-visibility: hidden;
  outline: 1px solid transparent;
}
.hamburger-icon-container .hamburger-icon + label i {
  top: 10px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}
.hamburger-icon-container .hamburger-icon + label::before, .hamburger-icon-container .hamburger-icon + label::after {
  content: "";
}
.hamburger-icon-container .hamburger-icon + label::before {
  top: 0;
}
.hamburger-icon-container .hamburger-icon + label::after {
  bottom: 0;
}
.hamburger-icon-container .hamburger-icon + label:hover {
  cursor: pointer;
}
.hamburger-icon-container .hamburger-icon:checked + label i {
  transform: scaleX(0.001);
}
.hamburger-icon-container .hamburger-icon:checked + label::before {
  transform: translateY(10px) rotate(45deg);
}
.hamburger-icon-container .hamburger-icon:checked + label::after {
  transform: translateY(-10px) rotate(-45deg);
}
.hamburger-icon-container .hamburger-icon + label i, .hamburger-icon-container .hamburger-icon + label::before, .hamburger-icon-container .hamburger-icon + label::after {
  background-color: var(--primary-accent);
}
header.header__section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 2rem auto;
}
header.header__section.header__left {
  align-items: start;
}
header.header__section h3 {
  font-size: 2.5rem;
  text-align: center;
  margin: 0 0 1rem;
  background: var(--app-secondary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
header.header__section .subtitle {
  font-size: 1.2rem;
  text-align: center;
}
@media (max-width: 480px) {
  header.header__section {
    margin: 1rem auto;
  }
  header.header__section h3 {
    font-size: 1.5rem;
  }
}
.link-more {
  display: flex;
  align-self: end;
  margin-top: 1rem;
  justify-self: end;
  text-decoration: none;
  justify-content: end;
  align-content: end;
  transition: all 150ms linear;
}
.link-more:after {
  display: flex;
  content: "-->";
  margin: auto 5px;
}
.link-more:hover {
  margin-right: 10px;
  font-weight: bolder;
}
.navigator__box {
  border: 1 ps solid var(--color-gray-80);
  display: grid;
  background: var(--color-gray-80);
  box-shadow: var(--shadow-1);
  border-radius: var(--border-radius-base);
  overflow: hidden;
  grid-template-rows: auto 1fr;
}
.navigator__box header {
  background: var(--color-gray-70);
  border-radius: var(--border-radius-base);
  display: flex;
  padding: 0.6rem;
  flex-grow: 1;
  gap: 1rem;
}
.navigator__box header .box__buttons {
  display: flex;
  gap: 8px;
}
.navigator__box header .box__buttons .circle {
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 1rem;
}
.navigator__box header .box__buttons .circle.red {
  background: red;
}
.navigator__box header .box__buttons .circle.blue {
  background: var(--color-blue-50);
}
.navigator__box header .box__buttons .circle.green {
  background: var(--color-green-80);
}
.navigator__box .box__code pre {
  height: 100%;
  padding-top: 0;
  margin: 0;
}
.block__features.realtime-section .flex-container {
  display: flex;
  flex-direction: column;
}
.block__features.realtime-section .flex-vertical {
  display: flex;
  flex-direction: row;
}
.block__features.realtime-section svg {
  height: 100px;
  width: 100px;
  aspect-ratio: 1/1;
}
.block__features.realtime-section .icon-graphic-container {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
@media (max-width: 768px) {
  .block__features.realtime-section .icon-graphic-container {
    position: relative;
  }
}
.block__features.realtime-section .icons-graphic {
  position: relative;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.block__features.realtime-section .icons-graphic .icon-mobile {
  top: -50px;
  right: 0;
}
.block__features.realtime-section .icons-graphic .icon-arrow {
  height: 60px;
  padding-top: -30px;
}
.block__features.realtime-section .icons-graphic .icon-arrow.server-to-mobile {
  transform: rotate(45deg);
}
.block__features.realtime-section .icons-graphic .icon-arrow.server-to-desktop {
  transform: rotate(135deg);
}
.block__features.realtime-section .icons-graphic .icon-desktop {
  position: absolute;
  bottom: -40px;
  right: 40px;
}
@media (max-width: 480px) {
  .block__features.realtime-section .icons-graphic {
    height: auto;
  }
  .block__features.realtime-section .icons-graphic .icon-mobile {
    top: -50px;
  }
  .block__features.realtime-section svg {
    height: 70px;
    width: 70px;
  }
  .block__features.realtime-section .icon-arrow.server-to-mobile {
    transform: rotate(35deg);
  }
  .block__features.realtime-section .icon-arrow.server-to-desktop {
    transform: rotate(135deg);
  }
}
@media (min-width: 320px) {
  .block__features.realtime-section > div:nth-child(1) {
    order: 2;
  }
  .block__features.realtime-section > div:nth-child(2) {
    order: 1;
  }
  .block__features.realtime-section > div:nth-child(3) {
    order: 3;
  }
}
@media (max-width: 768px) {
  .block__features.realtime-section {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block__features.realtime-section .icon-graphic-container {
    position: relative;
  }
  .block__features.realtime-section .icon-graphic-container .icons-graphic {
    height: auto;
  }
}
.separator {
  display: block;
}
.separator.rem--2 {
  padding-top: 2rem;
}
.separator.rem--1 {
  padding-top: 1rem;
}
.separator.rem--3 {
  padding-top: 3rem;
}
.separator.rem--4 {
  padding-top: 4rem;
}

p, ul, li {
  font-size: 1.1rem;
  line-height: 2rem;
}

.p2 {
  line-height: 1.4rem;
  letter-spacing: 0.2px;
}

a {
  color: var(--accent-color);
  cursor: pointer;
  transition: all 200ms linear;
  text-decoration: none;
}
a:hover {
  color: var(--primary-accent);
}

.text-center {
  text-align: center;
}

.banner__icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.banner__icons .beyond-icon {
  height: 90px;
  width: 90px;
}
@media (max-width: 480px) {
  .banner__icons .beyond-icon {
    height: 50px;
    width: 50px;
  }
}

.mv-200 {
  margin: 14rem auto;
}
@media (min-width: 320px) {
  .mv-200 {
    margin: 7rem auto;
  }
}

.flex-container.flex-h-end {
  justify-items: end;
  justify-content: end;
  flex-grow: 1;
}

.page__footer {
  padding: 2rem;
  border-top: 1px solid var(--border-element-color-1);
  width: calc(100% - 4rem);
  max-width: 1376px;
  margin: auto;
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none;
  }
}

/**
 p : primary
 s : secondary
 l : light
 d : dark
 g : gradient
 */
.text-plg {
  background: var(--app-primary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-sdg {
  background: var(--app-primary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-slg {
  background: var(--app-primary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-pdg {
  background: var(--app-primary-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

