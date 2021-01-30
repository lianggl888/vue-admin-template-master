<template>
  <div class="search-content" :class="{'inpPos':inpLeft == true,'showIcoms':showIcom == true}">
    <input v-model="searchStr" type="text" @focus="inpFocus" @blur="inpBlur">
    <img v-if="showIcom" class="search-icon" src="../../assets/search.png" @click="searchVehicle()">
    <img v-else class="search-icon" src="../../assets/serach_w.png" @click="searchVehicle()">
  </div>
</template>

<script>
export default {
  name: 'Index7',
  data() {
    return {
      inpLeft: false,
      showIcom: false,
      searchStr: ''
    }
  },
  methods: {
    inpBlur() {
      this.showIcom = false
    },
    inpFocus() {
      this.showIcom = true
    },
    searchVehicle() {

    }
  }
}
</script>

<style scoped>

</style>
<style>
.search-content {
  position: absolute;
  right: 15px;
  top: 100px;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 1px solid rgba(4, 145, 211, 0.35);
  display: flex;
  align-items: center;
  padding: 8px;
  transition: 0.5s;
}

.inpPos {
  position: absolute;
  right: 472px !important;
  top: 100px;
  transition: 0.5s;
}

.search-content > .search-icon {
  width: 25px;
  height: auto;
}

.search-content > .close-icon {
  width: 14px;
  height: auto;
}

.search-content > input {
  border: none;
  background: transparent;
  width: 100%;
  flex: 1;
  display: inline-block;
  color: white;
  outline: none;
}
</style>
