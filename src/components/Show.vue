<template>

  <div id="app">
    
    

    

    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <div class="columns">
        <p class="column">
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