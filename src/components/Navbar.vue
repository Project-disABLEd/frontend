<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item href="/">
        <img
          src="../../public/about/assets/logo_full.png"
          alt="Projekt disABLEd - mapa dla niepełnosprawnych"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="./about/index.html">O nas</b-navbar-item>
      <b-navbar-item href="./about/jak-pomoc.html">Jak pomóc?</b-navbar-item>
      <b-navbar-item href="./about/kontakt.html">Kontakt</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="https://github.com/Project-disABLEd/">
            <b-icon class="fab fa-github"></b-icon>
            <strong>Repozytorium</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>