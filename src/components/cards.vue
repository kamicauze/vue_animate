<template>
    <div class="card-parent"  @mouseover="show= true">
        <h1 class="title">Title</h1>

         <transition-group   name="stagger-fade" tag="div" class="flex-parent" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
             
         <card v-if="show"  v-for="(card, index) in cards" :data-index="index" :card="card" :key= card.index />

         </transition-group>
    </div>
</template>
<script>
import card from "../components/card.vue"
import Velocity from 'velocity-animate'
export default {
    components:{
        card
    },
  data(){
      return{
          loading:false,
          cards:[
          {index:'0',color:'#F9423A'},
          {index:'1',color:' #707372'},
          {index:'2',color:'#2CD5C4'}
        ],
        show: false,
      }
  },
  methods:{
    beforeEnter(el) {
  
      el.style.opacity = 0
      
    },
    enter(el ,done){
    var delay = el.dataset.index * 500
    setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, tranform: 'translate(-30px)',transition: "all ease 5s" },
          { complete: done }
        )
      }, delay)
    },
    leave(el ,done){
      var delay = el.dataset.index * 500
      console.log(delay) 
       setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, tranform: 'translate(30px)' },
          { complete: done }
        )
      }, delay)
    }
  }
  }

</script>
<style>
.card-parent{

    width: 500px;
    height: 500px;
    position: relative;
    background-color: aliceblue;
    box-sizing: border-box;
    padding: 15px;
    transform: translate(-50%);
    left:50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;

    
}
.flex-parent{
   width: 100%;
   display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card-parent h1{
    width: 100%;
    color: crimson;

}

</style>

