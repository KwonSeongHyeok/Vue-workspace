<template lang="">
  <div>
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name : 'ContainerComponent',
    components : {
        Post : Post,
    },
};
</script>

<style>
</style>
