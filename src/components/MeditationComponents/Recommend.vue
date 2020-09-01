<template>
  <div class="recommend">
    <van-swipe indicator-color="#FFFFFF">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
    <div class="start">
      <p class="section-title">入门</p>
      <div class="start-list">
        <div class="start-item" v-for="item in 6 ">
          <img
              src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=644397205,1235585350&fm=179&app=42&f=JPEG?w=121&h=140&s=32D7A9764E734C8654E7A9FB02009039"
              alt="">
          <p class="class-title">7天基础冥想训练</p>
          <p class="class-hour">7课时</p>
        </div>
      </div>
    </div>
    <div class="hot">
      <div class="section-title">
        热门
      </div>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
    <div class="start">
      <p class="section-title">限时免费</p>
      <div class="start-list">
        <div class="start-item" v-for="item in 6 ">
          <img
              src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=644397205,1235585350&fm=179&app=42&f=JPEG?w=121&h=140&s=32D7A9764E734C8654E7A9FB02009039"
              alt="">
          <p class="class-title">7天基础冥想训练</p>
          <p class="class-hour">7课时</p>
        </div>
      </div>
    </div>
    <div class="hot">
      <div class="section-title">
        放松
      </div>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
    <div class="hot">
      <div class="section-title">
        专注
      </div>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
    <div class="hot">
      <div class="section-title">
        习惯
      </div>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
    <div class="hot">
      <div class="section-title">
        睡眠
      </div>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      images: [
        'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=644397205,1235585350&fm=179&app=42&f=JPEG?w=121&h=140&s=32D7A9764E734C8654E7A9FB02009039',
        'https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/20a2b33533fa828b5baaa7dffa1f4134960a5a99.jpg',
      ],
    }
  }
}
</script>

<style lang="scss">
.recommend {
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .section-title {
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
  }

  .van-swipe__indicator {

  }

  .van-swipe__indicator--active {
    width: 10px;
    height: 5px;
    border-radius: 4px;
  }


  .van-swipe {
    width: 349px;
    height: 150px;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .start {
    width: 349px;
    margin-top: 20px;

    .start-list {
      height: 100%;
      display: flex;
      overflow-x: scroll;
      //overscroll-behavior: contain;

      &::-webkit-scrollbar {
        display: none;
      }

      .start-item {
        border-radius: 5px;
        box-sizing: border-box;
        width: 109px;
        height: 100%;
        flex-shrink: 0;
        margin-right: 10px;

        img {
          width: 100%;
          border-radius: 5px;
        }

        .class-title {
          font-size: 14px;
          font-weight: 500;
        }

        .class-hour {
          font-size: 10px;
          color: #5EC0FE;
        }
      }
    }
  }

  .hot {
    margin-top: 20px;
  }

}
</style>