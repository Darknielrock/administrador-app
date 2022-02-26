<template>
    <v-app>
        <v-card>
            <v-card-title>
                Administradores de consola
            </v-card-title>
        </v-card>
         <v-data-table
            :headers="headers"
            :items="desserts"
            :search="buscar"
            sort-by="calories"
            class="elevation-1"
            show-select
        >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-text-field                        
            v-model="buscar"                        
            label="Buscar"            
            prepend-icon="mdi-magnify"
        ></v-text-field>
          <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn
            outlined>
            Descargar
        </v-btn>
        
      
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">                        
            <v-btn
              color="#4EB9BB"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar admin
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.admin"
                      label="Administradorers"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">                  
                    <v-text-field
                      v-model="editedItem.area"
                      label="Area">
                      </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.correo"
                      label="Correo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"                    
                  >
                    <v-text-field                    
                      v-model="editedItem.estatus"
                      label="Estatus"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.detalle"
                      label="Detalle"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="600px">
          <v-card>
            <v-card-title class="text-h5">¿Esta seguro de eliminar este administrador?</v-card-title>
            <v-card-text>
                <v-container>
                    <v-list-item>
            
                        <v-list-item-avatar>
                                    <img src='../assets/usuario.png' alt="avatar">
                        </v-list-item-avatar>
                        <div>
                            <v-list-item-title >{{ editedItem.admin }}</v-list-item-title>
                            <v-list-item-subtitle>{{ editedItem.correo }}</v-list-item-subtitle>
                        </div>                                     
                    </v-list-item> 
                    
                </v-container>
            </v-card-text>                
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.detalle="{ item }">
         <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn  color="#4EB9BB"
                        fab
                        small                     
                        @click="editItem(item)"
                        dark
                        router 
                        v-bind="attrs"
                        v-on="on">
                          <v-icon >mdi-pencil</v-icon>
                       </v-btn>                
            </template>
            <span>Editar Admin...</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn  color="red"
                        fab
                        small                     
                        @click="deleteItem(item)"
                        dark
                        router 
                        v-bind="attrs"
                        v-on="on">
                          <v-icon >mdi-delete</v-icon>
                       </v-btn>                
            </template>
            <span>Eliminar Admin...</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn  color="blue"
                        fab
                        small                     
                        @click="deleteItem(item)"
                        dark
                        router 
                        v-bind="attrs"
                        v-on="on">
                            <v-icon >mdi-eye-outline</v-icon>
                        </v-btn>                
            </template>
            <span>Ver Admin...</span>
        </v-tooltip>
    </template>
    <template v-slot:no-data>               
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
    </v-app>
  
</template>

<script>
  export default {
    name: 'AdministradoresComponent',
    data: () => ({
      buscar: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Administradores', value: 'admin' },
        { text: 'Area', value: 'area' },
        { text: 'Correo', value: 'correo' },
        { text: 'Estatus', value: 'estatus' },
        { text: 'Detalles', value: 'detalle', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        admin: '',
        area: '',
        correo: '',
        estatus: '',
        detalle: '',
      },
      defaultItem: {
        admin: '',
        area: '',
        correo: '',
        estatus: '',
        detalle: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Administrador' : 'Editar Administrador'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            img:'../assets/usuario.png',
            admin: 'Gustavo Korsgaard',
            area: 'Recursos Humanos',
            correo: 'Gustavo.Korsgaard@gmail.com',
            estatus: 'Activo'
          },
          {
            img:'../assets/usuario.png',
            admin: 'Maria Dias',
            area: 'Recursos Humanos',
            correo: 'Maria.Dias@gmail.com',
            estatus: 'Activo'
          },
          {
            img:'../assets/usuario.png',
            admin: 'Maren Stanton',
            area: 'Recursos Humanos',
            correo: 'Maren.Stanton@gmail.com',
            estatus: 'Activo'
          },
          {
            img:'../assets/usuario.png',
            admin: 'Paltyn Ekstrom',
            area: 'Recursos Humanos',
            correo: 'Paltyn.Ekstrom@gmail.com',
            estatus: 'Activo'
          },
          {
            img:'../assets/usuario.png',
            admin: 'Kierra Bergson',
            area: 'Recursos Humanos',
            correo: 'Kierra.Bergson@gmail.com',
            estatus: 'Activo'
          },
          {
            img:'../assets/usuario.png',
            admin: 'Talan Rosser',
            area: 'Recursos Humanos',
            correo: 'Talan.Rosser@gmail.com',
            estatus: 'Activo'
          },          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
