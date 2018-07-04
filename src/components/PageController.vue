<template>
    <nav class="controller">
        <button v-if="option.arrowsType" class="prev-btn" :class="{moving:option.arrowsType === 'animate'}" @click="changePage(prevIndex)"></button>
        <ul v-if="option.navbar">
          <template v-for="(opt, index) in options" v-if="currentPage !== 1">
            <li v-if="index !== 0" @click="changePage(index + 1)" :class="{current:option.highlight && (index + 1) === currentPage}" :key="'controller-'+(index+1)" :data-index="(index + 1)" class="controller-item">
              <span v-if="language === 0">{{opt.li}}</span>
              <span v-else class="liEn">{{opt.liEn}}</span>
            </li>
          </template>
        </ul>
        <button v-if="option.arrowsType" class="next-btn" :class="{moving:option.arrowsType === 'animate'}" @click="changePage(nextIndex)"></button>
    </nav>
</template>

<script>
export default {
  name: 'page-controller',
  props: {
    pageNum: Number,
    currentPage: Number,
    options: Array,
    language: Number,
    option: {
      arrowsType: '',
      navbar: true,
      highlight: true,
      loop: false        //是否开启滚动循环
    }
  },
  methods: {
    changePage (index) {
      this.$emit('changePage', index);
    }
  },
  computed: {
    nextIndex () {
      if (this.currentPage === this.pageNum) {
        if(this.option.loop){
            return 1
          }else{
            return this.pageNum
          }
      } else {
        return this.currentPage + 1;
      }
    },
    prevIndex () {
      if (this.currentPage === 1) {
        if(this.option.loop){
            return this.pageNum
          }else{
            return 1
          }
      } else {
        return this.currentPage - 1;
      }
    }
  },
  created () {
    if (this.option.navbar === undefined) {
      this.option.navbar = true;
    }
  },
  mounted () {
    let _this = this;
    let timer = null;
    let start = 0;
    // 滚轮处理
    function scrollHandler (direction) {
      // 防止重复触发滚动事件
      if (timer != null) {
        return;
      }
      if (direction === 'down') {
        _this.changePage(_this.nextIndex);
      } else {
        _this.changePage(_this.prevIndex);
      }
      timer = setTimeout(function() {
        clearTimeout(timer);
        timer = null;
      }, 1100);
    }
    // if (Object.hasOwnProperty.call(window,'onmousewheel')) {
    if (Object.hasOwnProperty.call(window,'onmousewheel')) {
      // 监听滚轮事件
      window.addEventListener('mousewheel',function (event) {   // IE/Opera/Chrome
        let direction = event.wheelDelta > 0 ? 'up':'down';
        scrollHandler(direction);
      },false);
    } else {
      window.addEventListener('DOMMouseScroll',function (event) {   // Firefox
        let direction = event.detail > 0 ? 'up':'down';
        scrollHandler(direction);
      },false);
    }
    // 移动端触摸事件处理
    window.addEventListener('touchstart', function (event) {
      start = event.touches[0].clientY;
    })
    window.addEventListener('touchmove', function (event) {
      event.preventDefault();
    })
    window.addEventListener('touchend', function (event) {
      let spacing = event.changedTouches[0].clientY - start;
      let direction;      
      if (spacing > 50) {
        direction = 'up';
        scrollHandler(direction);
      } else if (spacing < -50) {
        direction = 'down';
        scrollHandler(direction);
      }
    })
  }
}
</script>

<style scoped lang="scss">
.controller {
    position: fixed;
    right: 30px;
    top: 50%;
    z-index: 99;
}
.controller ul {
    transform: translate3d(0,-50%,0);
    list-style: none;
    margin: 0;
    padding: 0;
}
.controller-item {
    position: relative;
    cursor: pointer;
    width: 10px;
    height: 10px;
    margin-top: 30px;
    border-width: 1px;
    border-color: rgb(51, 239, 237);
    border-style: solid;
    transition: background-color 0.3s ease 0s;

    span {
      font-size: 18px;
      font-family: "Microsoft YaHei";
      color: rgb(49, 62, 72);
      position: absolute;
      right: 24px;
      top: -7px;
      width: 120px;
      text-align: right;
    }
    .liEn {
      font-family: 'arial';
      font-size: 14px;
      width: 145px;
      top: -3px;
    }
}
.controller-item:hover {
    background-color: rgba(51, 239, 237, 0.5);
}
.controller-item.current {
    background-color: rgb(51, 239, 237);

    span {
      color: rgb(186, 203, 221);
    }
}
.prev-btn,.next-btn {
  cursor: pointer;
  display: block;
  text-align: center;
  width: 20px;
  height: 20px;
  position: fixed;
  left: 50%;
  margin-left: -10px;
  border: 4px solid #fff;
  background-color: transparent;
  outline: none;
}
.prev-btn {
  top: 80px;
  transform: rotate(-45deg);
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.next-btn {
  bottom: 80px;
  transform: rotate(45deg);
  border-top-color: transparent;
  border-left-color: transparent;
}
.prev-btn.moving {
  animation: prev-up-down 0.7s linear 0s infinite;
}
.next-btn.moving {
  animation: next-up-down 0.7s linear 0s infinite;
}
@keyframes next-up-down {
  0% {
    transform: translate3d(0,0,0) rotate(45deg);
  }
  25% {
    transform: translate3d(0,6px,0) rotate(45deg);
  }
  50% {
    transform: translate3d(0,0,0) rotate(45deg);
  }
  75% {
    transform: translate3d(0,-6px,0) rotate(45deg);
  }
  100% {
    transform: translate3d(0,0,0) rotate(45deg);
  }
}
@keyframes prev-up-down {
  0% {
    transform: translate3d(0,0,0) rotate(-45deg);
  }
  25% {
    transform: translate3d(0,-6px,0) rotate(-45deg);
  }
  50% {
    transform: translate3d(0,0,0) rotate(-45deg);
  }
  75% {
    transform: translate3d(0,6px,0) rotate(-45deg);
  }
  100% {
    transform: translate3d(0,0,0) rotate(-45deg);
  }
}
</style>
