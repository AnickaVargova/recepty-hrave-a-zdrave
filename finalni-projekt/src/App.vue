<template>
  <div id="app">
    <router-view />
    <hr />
    <div id="button">
      <router-link to="/">Domů</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
#button {
  font-size: 15px;
  padding: 10px;
  border: 2px solid black;
  font-weight: bold;
}
</style>
