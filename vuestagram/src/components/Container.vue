<template lang="">
  <div>
    <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i"/>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name : 'ContainerComponent',
    components : {
        Post : Post,
    },
   props : {
    게시물 : Object,
   }
};
</script>

<style>
</style>
