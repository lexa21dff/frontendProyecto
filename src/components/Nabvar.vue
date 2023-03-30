<template>
<div>
  <b-navbar class="nav" >
    <b-navbar-nav>
      <b-nav-item href="#">Inicio</b-nav-item>
      <b-nav-item href="#">proyecto</b-nav-item>

      <b-nav-item-dropdown text="User" class="user">
        <b-dropdown-item href="#">Inicio sesion</b-dropdown-item>
        <b-dropdown-item href="#">Cerrar sesion</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<style>
.user{
  right: 0;
}
.nav {
  background-color: #0eef86; /* color de fondo que deseas usar */
}

</style>