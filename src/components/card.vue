<template>
  <div class="card" :style="{'background-color':card.color}">{{ card.index}}</div>  
</template>
<script>

export default {
  props:['card']  
}
</script>
<style>
.card{
    height: 150px;
    width: 150px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-size: 18pt;
    text-align: center
}
</style>
