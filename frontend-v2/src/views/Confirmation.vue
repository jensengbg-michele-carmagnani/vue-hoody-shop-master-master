<template>
  <main id="confirmation">
      <h1>{{ confirmation.msg }}</h1>
      <p>Order number: {{ confirmation.orderNr }} </p>

  </main>
</template>

<script>
export default {
    name: 'Confirmation',
    computed: {
        confirmation(){
            return this.$store.state.confirmed;
        }
    }
}
</script>

<style>

</style>