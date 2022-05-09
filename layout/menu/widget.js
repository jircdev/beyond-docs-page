.aside__header {
  display: flex;
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid var(--separator-color);
  align-content: center;
}
.aside__header .menu-docs__mobile-header {
  display: none;
}
.aside__header .img-logo {
  margin: 0;
  width: 50%;
  justify-content: left;
}
.aside__header .img-logo img {
  width: 100%;
  height: 30px;
  object-fit: contain;
  object-position: left;
}
.aside__header h4 {
  display: block;
  margin: 15px;
  padding: 0;
}
.aside__header .mobile-only {
  display: none;
}
@media (max-width: 480px) {
  .aside__header .mobile-only {
    display: flex;
  }
}
.aside__header .docs__menu__list__btn-close {
  position: absolute;
  right: 15px;
  height: 30px;
  width: 30px;
  background: transparent;
}
.aside__header .docs__menu__list__btn-close svg {
  fill: var(--primary-accent);
}
@media (min-width: 1025px) {
  .aside__header .docs__menu__list__btn-close {
    display: none;
  }
}
.docs__menu__list > li, .docs__menu__sublist > li {
  display: grid;
  cursor: pointer;
  align-items: center;
}
.docs__menu__list > li section:hover span, .docs__menu__sublist > li section:hover span {
  color: var(--primary-accent);
}
.docs__menu__list > li > section, .docs__menu__sublist > li > section {
  display: flex;
  gap: 5px;
  align-items: center;
  accent-color: var(--text-second-color);
  transition: 300ms all ease-in;
  padding: 4px 0;
}
.docs__menu__list > li > section .beyond-icon, .docs__menu__sublist > li > section .beyond-icon {
  fill: var(--text-color);
}
.docs__menu__list > li.item--opened .beyond-icon, .docs__menu__sublist > li.item--opened .beyond-icon {
  transform: rotate(90deg);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.gradient-one {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#4096ee+0,2a2896+100 */
  background: #4096ee;
  /* Old browsers */
  background: -moz-linear-gradient(top, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4096ee", endColorstr="#2a2896", GradientType=0);
  /* IE6-9 */
}

.docs__menu__list li > ul, .docs__menu__sublist li > ul {
  display: none;
}
.docs__menu__list li.item--opened > ul, .docs__menu__sublist li.item--opened > ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 5px;
  border-left: 1px solid var(--color-gray-20);
  margin-left: 15px;
}
.docs__menu__list li.item--opened > ul li, .docs__menu__sublist li.item--opened > ul li {
  padding-left: 15px;
  margin-left: -1px;
}
.docs__menu__list li.item--opened > ul li.active-item, .docs__menu__sublist li.item--opened > ul li.active-item {
  border-left: 2px solid var(--text-hover-color);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.gradient-one {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#4096ee+0,2a2896+100 */
  background: #4096ee;
  /* Old browsers */
  background: -moz-linear-gradient(top, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, var(--secondary) 0%, var(--secondary-dark) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4096ee", endColorstr="#2a2896", GradientType=0);
  /* IE6-9 */
}

aside.docs__menu {
  flex-direction: column;
  z-index: 12;
  padding-top: 15px;
  position: sticky;
  top: 80px;
  border-right: 1px solid var(--element-border-color);
}
@media (max-width: 768px) {
  aside.docs__menu {
    padding: 15px;
  }
}
aside.docs__menu * {
  color: rgba(var(--text-color), 0.9);
}
aside.docs__menu .docs__menu__list {
  --item-border: var(--primary);
  display: grid;
  grid-gap: 5px;
  list-style: none;
  padding: 0;
  position: sticky;
  top: 0;
}
aside.docs__menu .docs__menu__list * {
  font-size: 0.85rem;
}
@media (max-width: 768px) {
  aside.docs__menu {
    position: fixed;
    left: 0;
    width: 0;
    bottom: 0;
    top: 0;
    transition: 150ms ease-in all;
    overflow: hidden;
    padding: 0;
    z-index: 101;
  }
  aside.docs__menu .menu-mobile-container {
    background: var(--background);
    height: 100%;
    width: 40%;
  }
}
@media (max-width: 768px) and (max-width: 480px) {
  aside.docs__menu .menu-mobile-container {
    width: 80%;
  }
}
@media (max-width: 768px) {
  aside.docs__menu.docs__menu--opened {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  aside.docs__menu.docs__menu--opened .beyond-perfect-scrollbar {
    width: 80%;
    height: 100%;
  }
}
@media (max-width: 768px) {
  aside.docs__menu .menu-docs__mobile-header {
    display: flex;
    place-items: center;
    justify-content: space-between;
    gap: 15px;
  }
  aside.docs__menu .menu-docs__mobile-header .img-logo {
    height: 20px;
    margin-top: 2px;
  }
}

