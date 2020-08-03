<template>
  <div>
    <p>
      This is a block of code.
    </p>
    <code-block ext="js" path="path/to/index.js">
      <code-example></code-example>
    </code-block>
    <p>
      It's sooo beautiful!
    </p>
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
