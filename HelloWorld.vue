<template>
  <div class="hello">
    <div @touchstart='start' @touchmove='move' @touchend='end' class='fa' ref='fa'>
      <div v-for='data in arr' :key="data" class='child'>
        {{data}}
      </div>
    </div>
    <footer>{{scrrollY}}111</footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: 30,
      transitionHeight: '',
      starty: '',
      flag: false,
      fa:''
    }
  },
  mounted () {
    this.fa = this.$refs.fa
  },
  methods: {
    start () {
      console.log(`点击事件高度: ${event.touches[0].pageY}, 
      body高度: ${document.body.clientHeight}, 
      视窗高度: ${window.screen.height}
      scroll高度: ${scrollY}
      `)
      this.starty = event.touches[0].pageY
      this.$refs.fa.style.position = 'relative'
      this.$refs.fa.style.transition = `transform .5s ease 0s`
    },
    move () {
      this.transitionHeight = event.touches[0].pageY - this.starty
      if (scrollY + screen.height > document.body.clientHeight - 10 && this.transitionHeight < 0 ) {
        this.flag = true
        this.$refs.fa.style.transform = `translateY(${this.transitionHeight}px)`
        console.log(this.$refs.fa.style.transform,scrollY)
      }
    },
    end () {
        this.$refs.fa.style.transition = 'transform .5s ease 0s'
        this.$refs.fa.style.transform = 'translateY(0px)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello{

}
@mixin flexed(){
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column wrap;
}
.fa{
  background: #fff;
  text-align: center;
  @include flexed();
}
.child{
  font-size: 6vw;
  width: 10vw;
  height: 10vw;
  @include flexed();
  border: 1px solid red;
  margin:2vw;
  font-size: green;
}
</style>
