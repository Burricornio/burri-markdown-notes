<template>
  <article v-html="markdowm" class="mdscss" />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ActiveNoteHTML',
  props: {
    body: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const marked = require('marked')

    const markdowm = computed(() => marked(props.body))

    return { markdowm }
  }
}
</script>

<style>
.mdscss {
  font-size: 1rem;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.mdscss h1 {
  font-size: 3em;
  font-weight: bold;
}
.mdscss h2 {
  font-size: 2.25em;
  font-weight: bold;
}
.mdscss h3 {
  font-size: 1.5em;
  font-weight: bold;
}
.mdscss h4 {
  font-size: 1rem;
  font-weight: bold;
}
.mdscss strong {
  font-weight: bold;
}
.mdscss em {
  font-style: italic;
}
.mdscss small {
  font-size: 0.667em;
}
.mdscss code {
  font-family: Consolas, monaco, monospace;
}
.mdscss li {
  line-height: 1.5em;
}
.mdscss p {
  line-height: 1.5em;
}
.mdscss blockquote {
  margin-left: 0;
  padding-left: 0.5rem;
  border-left: 0.5rem solid #ddd;
}
.mdscss pre {
  background: #f8f8f8;
  padding: 1em;
}
.mdscss * + * {
  margin-top: 1.5rem;
}
.mdscss li + li {
  margin-top: 0;
}
</style>
