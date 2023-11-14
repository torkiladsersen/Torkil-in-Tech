<script lang="ts">
  function toggleScheme(enableDarkScheme = false) {
    if (enableDarkScheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    sessionStorage.setItem("darkScheme", darkScheme.toString());
  }

  let darkScheme = document.documentElement.classList.contains("dark");

  $: toggleScheme(darkScheme);
</script>

<button
  on:click={() => (darkScheme = !darkScheme)}
  class="relative flex items-stretch gap-2 px-2"
  ><div class="dark:text-zinc-500">light</div>
  <div class=" w-0.5 bg-black dark:bg-white"></div>
  <div class="text-zinc-500 dark:text-white">dark</div>
</button>
