<template>
  <div class="users">
    <ul>
      <li v-for="(user, key) in users " :key="key">
        {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    users: state => state.users
  }),

  methods: {
    ...mapActions([
      'obtenerUsuarios'
    ])
  },
  created(){
    this.obtenerUsuarios()
  }
};
</script>

<style scoped>
.users {
  border: 1px solid gray;

}
ul {
  padding: 0;
  list-style: none;

}

li {
  margin: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
li:hover {
  color: #5de362;
  font-weight: bold

   ;
}
</style>
