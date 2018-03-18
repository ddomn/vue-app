<template>
  <div class="ts ovhd">
    <div class="tp">
      <h2>我们的特色</h2>
      <span>适合各类场合，在哪里它都是亮点</span>
    </div>
    <div class="bt">
      <ul>
        <li v-for="imgs in imgs" :key="imgs.imgalt">
            <img :src="imgs.imgsrc" :alt="imgs.imgalt" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
        {imgalt: '特色产品1', imgsrc: require('../assets/img/ts1.png')},
        {imgsrc: require('../assets/img/ts2.png'), imgalt: '特色产品2'},
        {imgsrc: require('../assets/img/ts3.png'), imgalt: '特色产品3'},
        {imgsrc: require('../assets/img/ts4.png'), imgalt: '特色产品4'},
        {imgsrc: require('../assets/img/ts5.png'), imgalt: '特色产品5'},
        {imgsrc: require('../assets/img/ts6.png'), imgalt: '特色产品6'}
      ]
    }
  }
}
</script>

<style>
.ts {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  background: #f3f3f3;
  width: 100%;
}
.ts span{
  display: block;
  color: #666;
  margin: 1rem 0;
}
.ts .bt ul{
  width: 100%;
  text-align: center;
}
.ts .bt ul li {
  display: inline-block;
  margin:1rem;
  width: 11rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: .5rem  .5rem 0 .5rem;
}
.ts .bt ul li img{
  width: 100%;
  height: 100%;
}
</style>
