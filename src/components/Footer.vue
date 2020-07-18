<template>
  <div class="grilla">
    <div>
      <ul>
        <li>Redes sociales</li>
        <li>Redes sociales</li>
        <li>Redes sociales</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Contacto</li>
        <li>Contacto</li>
        <li>Conactot</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Mapa</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
  
};
</script>

<style scoped>
.grilla {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}
div {
  background-color: #5de362;
}
li {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: white;
    text-decoration-line: none;
}

</style>


