<template>
    <div class="discount">
        <h4>지금 결제하면 {{discountMount}}% 할인</h4>
    </div>
</template>

<script>
export default{
    name: 'DiscountComponent',
    data() {
        return{
            discountMount : 30,
        }   
    },

    mounted(){
        setInterval(() => {
            if(this.discountMount > 0){
                this.discountMount--;
            }
        }, 1000);
    },
}
</script>

<style>

</style>