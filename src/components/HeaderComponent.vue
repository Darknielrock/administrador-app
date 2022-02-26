<template>
   <v-app-bar :color="'#4FB9BB'" dark>
       <v-spacer></v-spacer>       
       <v-spacer></v-spacer>       
       <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-magnify</v-icon>
        </v-btn>        
        <v-avatar class="mx-4">
            <img src='../assets/usuario.png' alt="avatar">                
        </v-avatar>      
        <div class="mx-4">
            <v-row>
                <strong class="text-h6">Adrian Stefan </strong>                     
            </v-row>
            
            <v-row>
                <strong class="text-h7">Recursos Humanos </strong>                     
            </v-row>            
        </div>                
        
        <!-- <v-list-item>
            
                <v-list-item-avatar>
                            <img src='../assets/usuario.png' alt="avatar">
                </v-list-item-avatar>
                <div>
                    <v-list-item-title >Daniel</v-list-item-title>
                    <v-list-item-subtitle>darknielrock</v-list-item-subtitle>
                </div>                                     
        </v-list-item> -->
        <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-logout</v-icon>
        </v-btn>
        
   </v-app-bar>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style>

</style>