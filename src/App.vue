<template>
  <div id="app">
    <lista></lista>
    <router-view/>
  </div>
</template>

<script>
import lista from '@/views/ListaProyecto.vue';
export default{
    components:{
        lista
    }

}
</script>


