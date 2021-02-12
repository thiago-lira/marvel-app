<template>
  <div id="app">
    <router-view/>
    <footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: none;
}

ul {
  list-style: none;
}

a {
  color: inherit;
}

img {
  line-height: 0;
  display: block;
}

body {
  font: 16px 'work sans', sans-serif;
}

footer {
  background: #ff1510;
  padding: 30px;
}
</style>
