<template>
    <div class="of">
        <div class="tp">
            <h1>我们的产品</h1>
            <span>独特的环境和地理优势；采用优质的糯高粱；秉承传统酿造工艺</span>
        </div>
        <div class="bt ovhd">
            <ul>
                <li v-for="id in cpob" :key="id.old" @click="cpobon(id)" :class="{xzz:id.oll}">
                    <a >{{id.bname}}</a>
                </li>
            </ul>
        </div>
        <div class="cp ovhd">
            <div class="fr na" @click="addn"><img src="../assets/img/right.png" /></div>
            <div class="fl na" @click="subn()"><img src="../assets/img/left.png" /></div>
            <div class="str ovhd">
                <ul>
                    <li v-for="cp in cpob" :key="cp.old" class="ovhd" :class="{dspn:!cp.oll}">
                            <div class="im fr"><img :src=cp.imgsrc :alt=cp.bname /></div>
                            <div class="zw fl">
                                <article>
                                    <h2>{{cp.bname}}</h2>
                                    <p>{{cp.text}}</p>
                                </article>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      cpob: [
        {bname: '生态粮油', oll: true, old: 0, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/cp1.jpg')},
        {bname: '健康食品', oll: false, old: 1, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/tea.png')},
        {bname: '调养茶品', oll: false, old: 2, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/cp1.jpg')},
        {bname: '理疗产品', oll: false, old: 3, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/tea.png')},
        {bname: '辅助用品', oll: false, old: 4, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/cp1.jpg')},
        {bname: '旅游疗养', oll: false, old: 5, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。', imgsrc: require('../assets/img/tea.png')}
      ],
      cpobl: 0
    }
  },
  methods: {
    cpobon: function (a) {
      this.cpob[this.cpobl].oll = false
      a.oll = true
      this.cpobl = a.old
    },
    addn: function () {
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
      console.log(this.cpobl >= 5 ? this.cpobl = 0 : this.cpobl += 1)
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
    },
    subn: function () {
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
      this.cpobl <= 0 ? this.cpobl = 5 : this.cpobl -= 1
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
    }
  }
}
</script>
<style>
.of {
    margin-top: 3rem;
}
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
    /* margin: 1rem; */
    text-align: center;
    width: 100%;
}
.of .bt ul{
    /* display: block; */
    margin: 2rem auto;
}
.of .bt ul li {
    display: inline-block;
    width: 6.3rem;
    height: 1rem;
    line-height: 1rem;
    margin: 0 2%;
    border: 1px solid #ccc;
    border-radius: 10%;
    padding: 1rem 1rem;
    color: #666;
}

.of .bt ul li a {
    font-size: 1.3rem;
}
.of .bt .xzz {
    background: #633;
    color: #fff;
}
.of .cp li {
    /* border: 1px solid #000; */
}
.of .cp .str {
    margin: 0 10rem;
}
.of .cp .str .im {
    margin-top: 5rem;
    width: 40%;
    max-width: 40rem;
}
.of .cp .str .zw {
    margin-top: 5rem;
    width: 40%;
    padding: 4%
}
.of .cp .str .im img {
    width: 80%;
}
.of .cp .na {
    width: 10%;
}
.of .cp .na img{
    margin: 8rem 3rem;
}
 @media only screen and (max-width: 870px) {
    .of .bt ul li {
        width: 1rem;
        height: 4rem;
        margin: 0 4%;
    }
    .of .cp .na {
        display: none;
    }
    .of .cp .str {
        margin: 0;
    }
    .of .cp .str li div {
        float: none;
    }
    .of .cp .str .im,.of .cp .str .zw{
        width: 96%;
        padding: 2%;
    }
}
@media only screen and (max-width: 500px) {
    .of .bt ul li {
        width: 1rem;
        height: 4rem;
        margin: 0 2.4%;
    }
}
</style>
