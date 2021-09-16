<template>
  <div>
    <div id="headline">
        <h1>{{ $store.state.headline }}</h1>
    </div>
    <div id="role">
        <h2>{{ $store.state.role }}</h2>
    </div>
    <div id="bio">
        <p>{{ $store.state.bio }}</p>
        <p>{{ $store.state.bio2 }}</p>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>