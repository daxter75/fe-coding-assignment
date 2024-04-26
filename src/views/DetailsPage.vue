<template>
  <div class="detail-page">
    <h3 class="title">{{ detailsData.title }}</h3>
    <div v-if="detailsData.images">
      <img
        v-for="image in detailsData.images"
        :key="image"
        :src="image"
        style="max-height: 200px; margin-right: 10px"
      />
    </div>
    <p v-html="detailsData.description"></p>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../config';

export default {
  data() {
    return {
      itemId: this.$route.params.itemId,
      detailsData: [],
    };
  },

  mounted() {
    this.getDetails();
  },

  methods: {
    getDetails() {
      const apiUrl = config.BASE_URL + '/listings/' + this.itemId;

      axios
        .get(apiUrl)
        .then((response) => {
          this.detailsData = response.data[0];
        })
        .catch((error) => {
          console.error('error fetching', error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.detail-page {
  display: grid;
  justify-items: center;
}

.title {
  color: $color-primary;
  font-size: xx-large;
  background-color: $color-grey;
  padding: 8px 48px;
  border: 1px solid $color-darkgrey;
  border-radius: 8px;
}

img {
  padding: 4px;
  border: 1px solid $color-darkgrey;
  border-radius: 20px;
}
</style>
