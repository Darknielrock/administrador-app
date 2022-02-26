<template>
    <v-navigation-drawer app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent>
      <br>
        <v-list-item class="px-2">
            
              <v-img
                max-height="150"
                max-width="200"
                src="../assets/GLI.png"
            ></v-img>
                    
            
           
            <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>
      
        <v-divider></v-divider>
        <v-list dense nav>
        
            <v-list-item v-for="item in items" :key="item.title" :to="item.action" link >
                <v-list-item-icon>
                    <v-icon color="#4FB9BB">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title >{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
    name: 'NavegationComponent',
     data: () => ({
         mini: false,
         drawer: true,
        //  userInfo: {
        //      Name: '',
        //      UserName: '',
        //      Image: '',
        //      IdUser: 0
        //  },
         userPhoto:''
     }),
     computed:{         
        items() {
            return [                
                {
                    icon: "mdi-account",
                    title: "Administradores",
                    action: "/administradores",
                },
                {
                    icon: "mdi-format-list-bulleted",
                    title: "Catálogos",
                    action: "/catalogos",
                },
                {
                    icon: "mdi-account-star-outline",
                    title: "Lideres",
                    action: "/lideres",
                },
                {
                    icon: "mdi-basket",
                    title: "Usuarios",
                    action: "/usuarios",
                },
                {
                    icon: "mdi-account-group",
                    title: "Mi Empresa",
                    action: "/empresas",
                },
                {
                    icon: "mdi-food-apple-outline",
                    title: "Cursos",
                    action: "/cursos",
                },
                {
                    icon: "mdi-gift-outline",
                    title: "Recompensas",
                    action: "/recompensas",
                },
                {
                    icon: "mdi-calendar",
                    title: "Eventos",
                    action: "/eventos",
                },
                {
                    icon: "mdi-bell-outline",
                    title: "Notifricaciones",
                    action: "/notificaciones",
                },
                {
                    icon: "mdi-chart-areaspline",
                    title: "Reportes",
                    action: "/reportes",
                },

            ];
        },
     },
     methods:{        
      
    },
     mounted() {
    
     },
     created() {
        
        
  },
  

}
</script>

<style>

</style>.

