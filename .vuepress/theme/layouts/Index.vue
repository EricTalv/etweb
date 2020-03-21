<template>

  <div class="container-fluid">
    <div class="row">
     <div class="col-md-6 centerOffset">
      <LogoHorizontal />
    </div>
    <div class="col-md-6">
      <div class="text-center mt-c">

         <a href="/about" type="button" class="m-3 customButton">
           About
         </a> 
         <a href="/projectslist" type="button" class="m-3 customButton">
          Projects            
        </a> 
        <a href="/contact" type="button" class="m-3 customButton">
          Contact
        </a>
        </div>
    </div>
  </div>
</div>

</template>

<script scoped>
  import LogoHorizontal from '../../components/LogoHorizontal.vue'

  export default {
    components: {
      LogoHorizontal
    },
  }
</script>

<style scoped>

html, body {
  height: 100%;
}


.page-enter-active, .page-leave-active {
  transition: all .30s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

.centerOffset {
  text-align: center !important;
  margin-top: 10vh !important;
}

.mt-c {

    margin-top:5rem !important;

}

.customButton {

  color: black !important;
  text-decoration: none !important;

  border: 0px;
  background-color: transparent;
  outline: none !important;

  border-left: 1px solid black;
  border-right: 1px solid black;
  width:10rem;
  transition: all .5s !important;
}

.customButton:hover {
  font-size: 20px;
  color: #FF1F1F!important;
}



@media screen and (min-width: 567px) {
  .mt-c {
     margin-top: 20rem !important;
  }
}



</style>
