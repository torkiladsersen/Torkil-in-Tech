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
  class="relative flex items-stretch gap-2 border-2 text-indigo-700 dark:text-lime-400 hover:-translate-y-px hover:text-indigo-600 dark:hover:text-lime-300 dark:hover:border-lime-300 hover:border-indigo-600 border-indigo-700 dark:border-lime-400 rounded-3xl py-1 px-2 shadow-indigo-400/20 hover:shadow-indigo-400/30 dark:shadow-lime-400/30 dark:hover:shadow-lime-400/40 shadow-lg transition-all duration-75"
  >
    <div class="iconify ph--sun-bold opacity-100 dark:opacity-50"></div>
    <div class="iconify ph--moon-bold opacity-50 dark:opacity-100"></div>
</button>
