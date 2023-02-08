<template>
  <div>
    <v-app-bar
      dark
      color="info"
      class="px-5"
      elevation="0"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title>اپسول</v-toolbar-title>
      <v-spacer />
      <v-badge
        content="18"
        left
        overlap
        color="error"
      >
        <v-icon size="24">
          mdi-bell-outline
        </v-icon>
      </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
