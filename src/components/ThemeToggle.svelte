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
  class="relative h-[23px] w-[42px] rounded-full border-2 border-zinc-400 dark:border-zinc-400"
>
  <div
    class="absolute -left-[2px] -top-[2px] h-[23px] w-[23px] rounded-full border-2 border-zinc-900 bg-sky-500 transition-all dark:translate-x-[19px] dark:border-white dark:bg-sky-900"
  ></div>
  <div
    class="absolute left-[2px] top-[2px] w-[15px] text-yellow-300 dark:text-zinc-400"
  >
    <slot name="light" />
  </div>
  <div
    class="absolute right-[3px] top-[3px] w-[13px] text-zinc-400 dark:text-sky-100"
  >
    <slot name="dark" />
  </div>
</button>
