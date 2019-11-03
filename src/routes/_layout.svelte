<script>
  import Nav from '~/components/Nav';

  export let segment;
</script>

<style>
  main {
    position: relative;
    box-sizing: border-box;
    max-width: 56em;
    margin: 0 auto;
    padding: 2em;
    background-color: white;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
