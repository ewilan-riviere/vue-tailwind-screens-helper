<template>
  <div>
    <code-block ext="js" path="path/to/index.js">
      <code-example></code-example>
    </code-block>
  </div>
</template>

<script>
import codeExample from './code.md'
export default {
  components: {
    codeExample,
  },
}
</script>
