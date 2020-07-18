<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/users">USERS</router-link>
        </li>
        <li>
          <a href>BLOG</a>
        </li>
        <li>
          <a href>ÁLBUM</a>
        </li>
      </ul>

    </nav>
  </div>
</template>


<script>
export default {
  name: "Header"
};
</script>


<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
}
ul {
  display: flex;
}


a {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
  text-decoration-line: none;
  margin: 30px;
  font-weight: bold;
}
a:hover {
  color: #5de362;
}
</style>
