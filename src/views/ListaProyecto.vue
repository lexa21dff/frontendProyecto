<template>
    <div>
        <header>
            <Nabvar></Nabvar>
        </header>
    
        <b-nav-form>
            <b-form-input type="text" v-model="searchValue" size="sm" class="mr-sm-2" placeholder="Search" ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0"  @click="search">Buscar</b-button>
            <div v-for="proyecto in proyecto" :key="proyecto.id">
                <h2>{{ proyecto.nombre_proyecto }}</h2>
                <p>{{ proyecto.descripcion }}</p>
            </div>
        </b-nav-form> 
      <!-- Agregar más campos del proyecto aquí -->
 
 
   
        <table>
            <tbody>
                <tr v-for="proyecto in proyectos " :key="proyecto.id" >
                    <td>
                        <div class="mt-4">
                            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                              <b-card-text>
                                <h3>{{ proyecto.nombre_proyecto}}</h3>

                                {{ proyecto.descripcion }}
                              </b-card-text>
                            </b-card>
                        </div>
                    </td>    
                </tr>
            </tbody>
        </table>
  
           
    </div>

</template>
<script>
import axios from 'axios'
import Nabvar from '@/components/Nabvar.vue';
export default{
    name:'Lista',
    components:{
       Nabvar
    },
    data(){
        return{
            searchValue: "",
            proyecto: [],
            proyectos: null
        }
    },
    methods:{
        async getProyecto(){
            await axios.get("http://127.0.0.1:8000/api/proyecto/").then(response=>{
            this.proyectos= response.data
      })
    },
    async search() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/buscar_proyectos/", {
          params: {
            search: this.searchValue,
          },
        });
        this.proyecto = response.data;
      } catch (error) {
        console.log(error);
      }
    },


    },
    async mounted() {  
        await this.getProyecto()

    },
        
    
    


}
</script>

