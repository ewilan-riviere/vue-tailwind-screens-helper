<template>
  <div>
    <p>
      This is a block of code.
    </p>
    <code-info ext="js" path="path/to/index.js">
      <code-example></code-example>
    </code-info>
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
