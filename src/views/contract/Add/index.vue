<template>
  <div>
    <container :mode="'add'" />
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
