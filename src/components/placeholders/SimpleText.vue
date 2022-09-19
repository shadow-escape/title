<script>
export default {
  name: 'SimpleText',
  template: '<span v-html="value"></span>',
  props: {
    value: String
  }
}
</script>
