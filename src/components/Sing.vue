<template>
<div id="sing">
   
    <h1 class="subtitle has-text-centered">Singup</h1>
    <hr />

        
    <div class="field has-addons">
       
      <div class="control is-expanded">
        <input class="input" v-model="Name" type="text" placeholder="Name" />
      </div>
</div>
     <div class="field has-addons">
       
   
       <div class="control is-expanded">
        <input class="input" v-model="Address" type="text" placeholder="Address" />
      </div>

</div>
 <div class="field has-addons">
       
       <div class="control is-expanded">
        <input class="input" v-model="Tel" type="text" placeholder="Tel" />
      </div>
      </div>
 <div class="field has-addons">
       
       <div class="control is-expanded">
        <input class="input" v-model="Email" type="text" placeholder="Email" />
      </div>
      </div>
       

<center>
        
        <a align = "center" class="button is-info" @click="addItem" >Submit</a>
   </center>
        


    </div>

  
  
</template>

<script>
import axios from "axios";
export default {
  name: "singss",
  data() {
   
    return {
      items: [],
      Name: "",
      Address:"",
      Tel:"",
      Email:"",
       editedNAME: "",
      editedADD:"",
       editedTEL:"",
        editedMAIL:"",
     
      selected: {}
    };
  },
  async mounted() {
    const response = await axios.get("api/users/");
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const response = await axios.post("api/users/", {
     
        Name: this.Name,
        
        Address: this.Address,
        Tel: this.Tel,
        Email: this.Email
      });
      this.items.push(response.data);

      this.Name = "";
      this.Address = "";
      this.Tel = "";
      this.Email = "";
    },
    async removeItem(item, i) {
      await axios.delete("api/users/" + item._id);
      this.items.splice(i, 1);
    },
    select(item) {
      this.selected = item;
      this.editedNAME = item.Name;
       this.editedADD = item.Address;
       this.editedTEL = item.Tel;
       this.editedMAIL = item.Email;
    },
    isSelected(item) {
      return item._id === this.selected._id;
    },
    unselect() {
      this.selected = {};
      this.editedNAME = "";
      this.editedADD = "";
      this.editedTEL = "";
      this.editedMAIL = "";
      
    },
    async updateItem(item, i) {
      const response = await axios.put("api/users/" + item._id, {
    
        Name: this.editedNAME,
        Address:this.editedADD ,
        Tel:this.editedTEL ,
        Email:this.editedMAIL 
      });
      this.items[i] = response.data;
      this.unselect();
    }
  }
};
</script>

<style>
#singss {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
</style>



