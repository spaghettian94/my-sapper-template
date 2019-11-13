<script>
  import Nav from '~/components/Nav';

  export let segment;
</script>

<style lang="scss" src="./common.scss" scoped></style>

<Nav {segment} />

<main>
  <slot />
</main>
