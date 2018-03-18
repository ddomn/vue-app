<template>
   <div class="top_nav ovhd">
       <button class="but fr" @click="navshow()">
           <p></p>
           <p></p>
           <p></p>
       </button>
        <div class="navt" id="navt" :class="{navtt:navdsp}">
            <ul>
                <li v-for="nav in nav" :key="nav.id" >
                    <keep-alive>
                        <router-link :to="nav.href" @click.native=navon(nav) :class="{butline2:nav.ol}" tag="a">
                        {{nav.text}}
                        </router-link>
                    </keep-alive>
                </li>
            </ul>
        </div>
        <div class="navo">
            <img src="@/assets/img/lg.png" alt="仲景养汇城" />
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        {text: '首页', href: '/index', ol: true, id: 0},
        {text: '关于我们', href: '/about', ol: false, id: 1},
        {text: '公司产品', href: '/of', ol: false, id: 2},
        {text: '在线商城', href: '/online', ol: false, id: 3}
      ],
      navl: 0,
      navdsp: true
    }
  },
  methods: {
    navon: function (a) {
      console.log('a' + a)
      this.nav[this.navl].ol = false
      a.ol = true
      console.log(a.id)
      this.navl = a.id
      console.log(this.nav[this.navl].ol)
    },
    navshow: function () {
      this.navdsp = !this.navdsp
    }
  }
}
</script>
<style>
/* nav */
.top_nav {
    background-color: #f3f3f3;
    width: 100%;
    overflow: hidden;
}
.top_nav .but {
    border: 1px solid #300;
    border-radius: 20%;
    background: inherit;
    width: 3rem;
    height: 3rem;
    margin: .5rem;
    display: none;
    min-width: 30px;
    min-height: 30px;
}
.top_nav .but p{
    border: 1px solid #300;
    border-radius: 1px;
    height: 1px;
    background: #300;
    margin: .5rem;
}
.top_nav a p {
    font-size: 2rem;
}
.top_nav .navo{
    float: left;
    margin: .5rem 1rem;
}
.top_nav .navt {
    margin: auto;
    float: right;
    margin-right: 4rem;
}
.top_nav .navt ul li {
    list-style: none;
    float: left;
    margin: .8rem;
    height: 3rem;
}
.top_nav .navt ul li a {
    color: #300;
    font-size: 2rem;
    padding: .2rem;
}

 @media only screen and (max-width: 870px) {
    .top_nav .navt{
        margin-right: 1rem;
    }
    .top_nav .navtt{
        display: none;
        /* display: inline; */
        /* position: absolute; */
        /* right: 0; */
        /* top: 4rem; */
    background-color: #f3f3f3;
    }
    .top_nav .navt ul li{
        float: initial;
    }
    .top_nav .but {
        display: inline;
    }
}
</style>
