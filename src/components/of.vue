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
            <div class="fr na" @click="addn()"><img src="../assets/img/right.png" /></div>
            <div class="fl na" @click="subn()"><img src="../assets/img/left.png" /></div>
            <div class="str ovhd">
                <ul>
                    <li v-for="cp in cpob" :key="cp.old" class="ovhd" :class="{dspn:!cp.oll}">
                        <div class="">
                            <div class="fr im"><img src="../assets/img/cp1.jpg" :alt=cp.bname /></div>
                            <div class="fl zw">
                                <h2>{{cp.bname}}</h2>
                                <article>{{cp.text}}</article>
                            </div>
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
        {bname: '生态粮油', oll: true, old: 0, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'},
        {bname: '健康食品', oll: false, old: 1, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'},
        {bname: '调养茶品', oll: false, old: 2, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'},
        {bname: '理疗产品', oll: false, old: 3, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'},
        {bname: '辅助用品', oll: false, old: 4, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'},
        {bname: '旅游疗养', oll: false, old: 5, text: '绿色生态粮油加工、生产技术规范，并经有机认证得到的一切农副产品，是指在生产加工中不使用化学农药、化肥、化学防腐剂和添加剂，因此它是真正的源于自然、富营养、高品质的安全环保生态食物。'}
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
      console.log('1' + this.cpobl)
      if (this.cpob === 5) {
        this.cpob = 0
        console.log(this.cpobl)
      } else {
        this.cpob += 1
        console.log(this.cpobl)
      }
      this.cpobl === 5 ? this.cpobl++ : this.cpobl = 0
      this.cpob[this.cpobl].oll = true
      console.log('2' + this.cpobl)
    },
    subn: function () {
      console.log(this.cpob[this.cpobl].oll)
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
      console.log(this.cpobl)
      if (this.cpob === 0) {
        this.cpob = 5
        console.log(this.cpobl)
      } else {
        this.cpob -= 1
        console.log(this.cpobl)
      }
      console.log(this.cpobl)
      this.cpob[this.cpobl].oll = !this.cpob[this.cpobl].oll
      console.log(this.cpob[this.cpobl].oll)
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
    margin: 1rem;
}
.of .bt ul li {
    float: left;
    width: 6.3%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    margin: 0 3.5%;
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
    border: 1px solid #000;
}
.of .cp .str {
    margin: 0 10rem;
}
.of .cp li .str .zw{
    width: 40%;
}
.of .cp li .str .zw{
    margin-top: 5rem;
    width: 40%;
}
.of .cp li .str img {
    /* width: 80%; */
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
        margin: 0 6%;
        padding: 1rem .8rem;
    }
}
@media only screen and (max-width: 780px) {
    .of .bt ul li {
        width: 1rem;
        height: 4rem;
        margin: 0 5%;
        padding: 1rem .8rem;
    }
    .of .cp .na {
        display: none;
    }
}
@media only screen and (max-width: 560px) {
    .of .bt ul li {
        width: 1rem;
        height: 4rem;
        margin: 0 3.18%;
        padding: 1rem .8rem;
    }
    .of .cp .na {
        display: none;
    }
    .of .bt {
        margin: 1rem 0rem;
    }
}
</style>
