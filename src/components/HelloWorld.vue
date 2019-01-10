<template>
  <div class="hello">
    <div>
      <h1>vuex common模块</h1>
      <p>name:{{ commonName }}</p>
      <p>module:{{ commonModule }}</p>
      <div>
        <div>
          <input type="text" v-model="common.name" placeholder="请输入name值" />
          <input
            type="text"
            v-model="common.module"
            placeholder="请输入module值"
          />
        </div>
        <button @click="changeCommonName">修改name</button>
        <button @click="changeCommonModule">修改module</button>

        <button @click="changeCommonAll">action修改全部</button>
      </div>
    </div>
    <hr />
    <div>
      <h1>vuex shop模块</h1>
      <p>name:{{ shopName }}</p>
      <p>module:{{ shopModule }}</p>
      <div>
        <input type="text" v-model="shop.name" placeholder="请输入name值" />
        <input type="text" v-model="shop.module" placeholder="请输入module值" />
      </div>
      <button @click="changeShopName">修改name</button>
      <button @click="changeShopModule">修改module</button>

      <button @click="changeShopAll">全部修改</button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Vuex Module",
      common: {
        name: "",
        module: ""
      },
      shop: {
        name: "",
        module: ""
      }
    };
  },
  computed: {
    ...mapGetters("common", {
      commonModule: "module",
      commonName: "name"
    }),
    ...mapGetters("shop", {
      shopModule: "module",
      shopName: "name"
    })
  },
  methods: {
    ...mapMutations("common", {
      setCommonName: "SET_NAME",
      setCommonModule: "SET_MODULE"
    }),
    ...mapMutations("shop", {
      setShopName: "SET_NAME",
      setShopModule: "SET_MODULE"
    }),
    ...mapActions("common", {
      setCommonAction: "commonAction"
    }),
    ...mapActions("shop", ["shopAction"]),
    changeCommonName() {
      this.setCommonName(this.common.name);
    },
    changeCommonModule() {
      this.setCommonModule(this.common.module);
    },
    changeCommonAll() {
      this.setCommonAction(this.common);
    },
    changeShopName() {
      this.setShopName(this.shop.name);
    },
    changeShopModule() {
      this.setShopModule(this.shop.module);
    },
    changeShopAll() {
      this.shopAction(this.shop);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
