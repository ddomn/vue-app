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
                <a href="#">
                    <img src="@/assets/img/lg.png" alt="仲景养汇城" />
                </a>
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
