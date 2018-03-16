<template>
  <div>
    <div class="mv">
      <div class="mvbg ovh">
          <div><img src="../assets/img/tea.png" class="imgs" /></div>
          <div>
            <img src="../assets/img/toptest.png" class="imgs" />
            <img src="../assets/img/ewm.jpg"  class="ewm"/>
          </div>
      </div>
    </div>
    <div class="about"></div>
    <div class="myfeat"></div>
    <div class="product"></div>
  </div>
</template>
<style>
.mv {
    background: url(../assets/img/topbg1.png);
}
.mv .mvbg{
    background: url(../assets/img/topbg2.png) no-repeat;
    background-size: 100% 100%;
    margin: auto;
    border: 1px solid;
    overflow: hidden;
}
.mv .mvbg .imgs{
    margin-top: 3rem;
    float: left;
    width: 40%;
}
.mv .mvbg .ewm{
    float: right;
    width: 10%;
    margin-top: 10%;
    margin-right: 17%;
}
</style>
