<template>
  <div>
    <!-- Nav bar -->  
  


     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <router-link to="/Show" class="nav-link">Sneakers</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-text" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link to="/Sing" class="nav-link">ผู้ชาย</router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/Sing" class="nav-link">ผู้หญิง</router-link>
            </li>
          
            <li class="nav-item">
             <router-link to="/Sing" class="nav-link">เด็ก</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Item" class="nav-link">Log in</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/Sing" class="nav-link">Sing up</router-link>
            </li>
          </ul>


        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>