.container {
  margin: auto;
  padding: 15px;
  width: calc(100% - 30px);
  max-width: 1376px;
}
@media (max-width: 768px) {
  .container {
    padding: 15px;
    width: calc(100% - 30px);
  }
}
.flex-center {
  place-content: center;
  place-items: center;
  display: flex;
  gap: 15px;
}
.flex-center-y {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 15px;
}
.flex-center-x {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.flex-container {
  display: flex;
}
.flex-container.space-between {
  justify-content: space-between;
}

.bg-secondary {
  background: var(--secondary);
  color: var(--text-on-secondary);
}

.bg-primary-accent {
  background: var(--primary-accent);
  color: var(--text-on-primary);
}

.pd-5 {
  padding: 5px;
}

.pd-15 {
  padding: 15px;
}
.docs-menu {
  padding: 0;
  list-style: none;
}
h1, .h1 {
  font-size: 3rem;
}

h2, .h2 {
  font-size: 2.1rem;
}

h3, .h3 {
  font-size: 2rem;
}

* {
  color: var(--text-color);
}

h1, .h1, h2, .h2 {
  color: var(--text-title-color);
}

h3, h4 {
  color: var(--text-color);
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 2rem;
  }
}

