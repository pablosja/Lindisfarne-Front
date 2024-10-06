<template>
  <header>
    <h2 class="font_basic_settings">Única Salida</h2>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>

header {
  background: var(--color-primary);
}

header::after {
    content: '';
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 2px;
    background: var(--color-header-gradient);
    z-index: 3;
}


.header-h2, header {
  padding: var(--size-s);
  text-align: center;
  position: relative;
  top: 0%;
  left: 0;
  min-width: 100vw;
}




h2 {
  font-family: var(--primary-font-family);
  font-size: var(--size-font-b);
}



</style>