<template>
   <div class="top_nav">
            <div class="navt" id="navt">
                <ul>
                    <li v-for="nav in nav" :key="nav.id" >
                        <keep-alive>
                          <router-link :to="nav.href" @click.native=navon(nav) :class="{butline2:nav.btl}" tag="a">
                            {{nav.text}}
                          </router-link>
                        </keep-alive>
                    </li>
                </ul>
            </div>
            <div class="navo ovhd">
                <router-link to="/">
                    <img src="@/assets/img/lg.png" alt="仲景养汇城" />
                </router-link>
            </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        {text: '首页', href: '/index', btl: true, id: 0},
        {text: '关于我们', href: '/about', btl: false, id: 1},
        {text: '公司产品', href: '/of', btl: false, id: 2},
        {text: '在线商城', href: '/online', btl: false, id: 3}
      ],
      navl: 0
    }
  },
  methods: {
    navon: function (a) {
      console.log('a' + a)
      this.nav[this.navl].btl = false
      a.btl = true
      console.log(a.id)
      this.navl = a.id
      console.log(this.nav[this.navl].btl)
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
.top_nav a p {
    font-size: 2rem;
}
.top_nav .navo a img {
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
    .top_nav .navt ul{
        display: none;
    }
} 
</style>
