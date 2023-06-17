<template>
  <div>
    <container :mode="'edit'" />
  </div>
</template>
<script >
import Container from '../components/container'
export default {
  components: {
    'container': Container
  }
}
</script>
