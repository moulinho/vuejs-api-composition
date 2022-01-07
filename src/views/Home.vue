<template>
  <div>
    <Formulaire @newData="getNewData" />
    <Shower v-for="item in data" :key="item" :list="item" />
  </div>
</template>

<script>
import Formulaire from "@/components/Formulaire.vue";
import Shower from "@/components/Shower.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    Formulaire,
    Shower,
  },

  setup() {
    let data = ref([]);
    let updata = ref([]);

    const getNewData = function(newData) {
      data.value = newData.value;
    };
    onMounted(() => {
      data.value = JSON.parse(localStorage.getItem("dataUser"));
      data.value = JSON.parse(localStorage.getItem("dataUser"));
    });

    return {
      getNewData,
      data,
      updata,
    };
  },
};
</script>

<style></style>
