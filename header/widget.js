:where(html) {
  --ease-1:cubic-bezier(.25,0,.5,1);
  --ease-2:cubic-bezier(.25,0,.4,1);
  --ease-3:cubic-bezier(.25,0,.3,1);
  --ease-4:cubic-bezier(.25,0,.2,1);
  --ease-5:cubic-bezier(.25,0,.1,1);
  --ease-in-1:cubic-bezier(.25,0,1,1);
  --ease-in-2:cubic-bezier(.50,0,1,1);
  --ease-in-3:cubic-bezier(.70,0,1,1);
  --ease-in-4:cubic-bezier(.90,0,1,1);
  --ease-in-5:cubic-bezier(1,0,1,1);
  --ease-out-1:cubic-bezier(0,0,.75,1);
  --ease-out-2:cubic-bezier(0,0,.50,1);
  --ease-out-3:cubic-bezier(0,0,.3,1);
  --ease-out-4:cubic-bezier(0,0,.1,1);
  --ease-out-5:cubic-bezier(0,0,0,1);
  --ease-in-out-1:cubic-bezier(.1,0,.9,1);
  --ease-in-out-2:cubic-bezier(.3,0,.7,1);
  --ease-in-out-3:cubic-bezier(.5,0,.5,1);
  --ease-in-out-4:cubic-bezier(.7,0,.3,1);
  --ease-in-out-5:cubic-bezier(.9,0,.1,1);
  --ease-elastic-1:cubic-bezier(.5,.75,.75,1.25);
  --ease-elastic-2:cubic-bezier(.5,1,.75,1.25);
  --ease-elastic-3:cubic-bezier(.5,1.25,.75,1.25);
  --ease-elastic-4:cubic-bezier(.5,1.5,.75,1.25);
  --ease-elastic-5:cubic-bezier(.5,1.75,.75,1.25);
  --ease-squish-1:cubic-bezier(.5,-.1,.1,1.5);
  --ease-squish-2:cubic-bezier(.5,-.3,.1,1.5);
  --ease-squish-3:cubic-bezier(.5,-.5,.1,1.5);
  --ease-squish-4:cubic-bezier(.5,-.7,.1,1.5);
  --ease-squish-5:cubic-bezier(.5,-.9,.1,1.5);
  --ease-step-1:steps(2);
  --ease-step-2:steps(3);
  --ease-step-3:steps(4);
  --ease-step-4:steps(7);
  --ease-step-5:steps(10);
}
.hamburger-icon-container {
  background: transparent;
  border: none;
}
@media (min-width: 769px) {
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
.docs-header {
  display: flex;
  padding: 5px 15px;
  border-bottom: 1px solid var(--accent-color);
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--background);
}
.docs-header * {
  padding: 0;
  margin: 0;
}
.docs-header .docs-header__link-icon {
  display: flex;
  align-content: center;
}
.docs-header .docs-header__link-icon .beyond-icon {
  height: 20px;
  width: 20px;
}
.docs-header .header-logo {
  display: flex;
  gap: 15px;
  align-items: center;
}
.docs-header .header-logo .img-logo {
  height: 25px;
}

[data-beyond-mode=dark] .docs-header .beyond-icon {
  fill: var(--primary);
  stroke: var(--primary);
}
.btn-theme-toggle {
  --size: 24px;
  --icon-fill: #FFF;
  --icon-fill-hover: hsl(210 10% 15%);
  background: none;
  border: none;
  padding: 0;
  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
}
.btn-theme-toggle > svg {
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;
  transition: 200ms all var(--ease-out-5);
}
.btn-theme-toggle > svg * {
  transition: 200ms all var(--ease-out-5);
}
.btn-theme-toggle.btn-theme--dark svg {
  fill: rgba(var(--text-color), 0.8);
  stroke: rgba(var(--text-color), 0.8);
}
.btn-theme-toggle.btn-theme--dark svg > circle {
  fill: var(--text-color);
  stroke: var(--text-color);
}
.btn-theme-toggle.btn-theme--dark svg .moon > circle {
  transform: translate(-7px);
  transition: all 300ms var(--ease-out-5);
}
.btn-theme-toggle.btn-theme--dark svg .sun-beams {
  display: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    opacity: 0.1;
  }
}

