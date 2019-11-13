<script>
  import ErrorComponent from '~/commons/error/common';

  export let status;
  export let error;
</script>

<ErrorComponent {status} {error}>
  <slot/>
</ErrorComponent>
