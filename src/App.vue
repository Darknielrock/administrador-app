<template>
  <v-app >    
    
      <HeaderComponent></HeaderComponent>
    
    <v-main>
      <NavegationComponent></NavegationComponent>  
        <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto">
          <v-container style="height: 1000px;">
            <router-view></router-view>
          </v-container>
        </v-sheet>
      
      <v-snackbar
        v-model="snackbar.visible"
        :bottom="snackbar.y === 'bottom'"
        :left="snackbar.x === 'left'"
        :multi-line="snackbar.mode === 'multi-line'"
        :right="snackbar.x === 'right'"
        :timeout="snackbar.timeout"
        :top="snackbar.y === 'top'"
        :vertical="snackbar.mode === 'vertical'">
          {{ snackbar.text }}
        <v-btn color="pink" text @click="hideMessage">Close</v-btn>
      </v-snackbar>
      
      
    </v-main>
  </v-app>
</template>

<script>
import NavegationComponent from '@/components/NavegationComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',

  components: {
    NavegationComponent,
    HeaderComponent
  },
  computed : {    
    ...mapGetters("snackbarModule", ["snackbar"]) 
     
  },
  methods: {
    ...mapActions("snackbarModule", ["showMessage", "hideMessage"]),

  },
  mounted() {
    console.log('valor de isloading =' + this.isLoading)  
  },

  data: () => ({
    //
  }),

  
};
</script>
