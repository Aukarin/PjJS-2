<template>

  <div id="app">
    
    

    
    <h1 class="subtitle has-text-centered">Admin</h1>
    <hr />

        
    <div class="field has-addons">
       
      <div class="control is-expanded">
        <input class="input" v-model="Name" type="text" placeholder="Name" />
      </div>

     
    <select class="control is-expanded"  placeholder="Type" v-model="Type" >
        <option selected> ผู้ชาย </option>
        <option >ผู้หญิง</option>
        <option >เด็ก</option>
    </select>


       <div class="control is-expanded">
        <input class="input" v-model="Color" type="text" placeholder="Color" />
      </div>

       <div class="control is-expanded">
        <input class="input" v-model="Price" type="text" placeholder="Price" />
      </div>
       <div class="control">
        <a class="button is-info" @click="addItem" :disabled="!Name || !Type || !Color || !Price " >Add</a>
      </div>
        </div>


    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <div class="columns">
        <input class="column input" v-if="isSelected(item)" v-model="editedNAME" />
        <input class="column input" v-if="isSelected(item)" v-model="editedTYPE" />
        <input class="column input" v-if="isSelected(item)" v-model="editedCOLOR" />
        <input class="column input" v-if="isSelected(item)" v-model="editedPRICE" />
        <p v-else class="column">
          <span class="tag is-primary">{{ i + 1}}</span>
           
          {{ item.Name }}
          <br>
          {{ item.Type}}
           <br>
          {{ item.Color }} สี
           <br>
          {{ item.Price }}
        </p>

        
        <div class="column is-narrow">
          <span
            class="icon has-text-primary"
            @click="isSelected(item) ?  unselect() : select(item)"
          >
            <i class="material-icons">{{isSelected(item) ? 'close': 'edit'}}</i>
          </span>

          <span
            class="icon has-text-info"
            @click="isSelected(item) ? updateItem(item, i) : removeItem(item, i)"
          >
            <i class="material-icons">{{isSelected(item) ? 'save': 'delete'}}</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
   
    return {
      items: [],
      Name: "",
      Type:"",
      Color:"",
      Price:"",
       editedNAME: "",
      editedTYPE:"",
       editedCOLOR:"",
        editedPRICE:"",
     
      selected: {}
    };
  },
  async mounted() {
    const response = await axios.get("api/bucketListItems/");
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const response = await axios.post("api/bucketListItems/", {
     
        Name: this.Name,
        
        Type: this.Type,
        Color: this.Color,
        Price: this.Price
      });
      this.items.push(response.data);
      this.Name = "";
      this.Type = "";
      this.Color = "";
      this.Price = "";
    },
    async removeItem(item, i) {
      await axios.delete("api/bucketListItems/" + item._id);
      this.items.splice(i, 1);
    },
    select(item) {
      this.selected = item;
      this.editedNAME = item.Name;
       this.editedTYPE = item.Type;
       this.editedCOLOR = item.Color;
       this.editedPRICE = item.Price;
    },
    isSelected(item) {
      return item._id === this.selected._id;
    },
    unselect() {
      this.selected = {};
      this.editedNAME = "";
      this.editedTYPE = "";
      this.editedCOLOR = "";
      this.editedPRICE = "";
      
    },
    async updateItem(item, i) {
      const response = await axios.put("api/bucketListItems/" + item._id, {
    
        Name: this.editedNAME,
        Type:this.editedTYPE ,
        Color:this.editedCOLOR ,
        Price:this.editedPRICE 
      });
      this.items[i] = response.data;
      this.unselect();
    }
  }
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
</style>