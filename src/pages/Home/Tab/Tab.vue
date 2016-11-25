<template>
  <div>
    <ul>
      <li><router-link to="/tab/profile">菜单一</router-link></li>
      <li><router-link to="/tab/posts">菜单二</router-link></li>
      <li>菜单三</li>
    </ul>
    <h1>{{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>



