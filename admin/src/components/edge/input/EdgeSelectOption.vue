<template>
  <option :value="item.id">{{ item.name }}</option>
</template>

<script>
export default {
  name: "EdgeSelectOption",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
};
</script>
