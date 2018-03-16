<template>
    <div class="of">
        <div class="tp">
            <h1>我们的产品</h1>
            <span>独特的环境和地理优势；采用优质的糯高粱；秉承传统酿造工艺</span>
        </div>
        <div class="bt ovhd">
            <ul>
                <li v-for="id in dt" :key="id">
                    <div>
                        <img src="../assets/img/ico.png" />
                        <h2>{{id.id}}</h2>
                    </div>
                    <div>
                        <span>{{id.vl}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        dt:[
          {id : '企业文化',vl: '仲景养生中国长寿之乡——广西巴马县，自古就有“70不算老，80满地跑，90也敢下河洗澡”的民俗。可能您不知道，巴马人长寿的秘诀就在于一种神奇的食物，这种食物可以抗癌、润肠通便、帮助睡眠。' },        
          {id : '发展历程',vl: '仲景养生中国长寿之乡——广西巴马县，自古就有“70不算老，80满地跑，90也敢下河洗澡”的民俗。可能您不知道，巴马人长寿的秘诀就在于一种神奇的食物，这种食物可以抗癌、润肠通便、帮助睡眠。' },        
          {id : '企业愿景',vl: '仲景养生中国长寿之乡——广西巴马县，自古就有“70不算老，80满地跑，90也敢下河洗澡”的民俗。可能您不知道，巴马人长寿的秘诀就在于一种神奇的食物，这种食物可以抗癌、润肠通便、帮助睡眠。' },        
          {id : '店面加盟',vl: '仲景养生中国长寿之乡——广西巴马县，自古就有“70不算老，80满地跑，90也敢下河洗澡”的民俗。可能您不知道，巴马人长寿的秘诀就在于一种神奇的食物，这种食物可以抗癌、润肠通便、帮助睡眠。' }
        ]
    }
  }
}
</script>
<style>
.of .tp {
    text-align: center;
    font-size: 1.5rem;
    color: #333;
}
.of .tp span {
    color: #666;
    display: block;
    font-size: 1rem;
}
.of .bt {
    margin: 2rem;
}
.of .bt ul li {
    float: left;
    width: 19.7%;
    margin: 0 1%;
    border: 1px solid #ccc;
    padding: 1.5%;
    list-style-type: none;
}
.of .bt ul li h2{
    font-size: 1.5rem;
}
.of .bt ul li div {
    margin-top: .5rem;
}
.of .bt ul li div span {
    color: #666;
    font-size: 1rem;
} 
 @media only screen and (max-width: 870px) {
    .of .bt ul li {
    width: 44%;
    margin: 1%;
    }
.of .bt {
    margin: .5rem;
}
} 
</style>
