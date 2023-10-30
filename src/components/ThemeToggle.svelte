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
  class="relative h-[22px] w-[42px] rounded-full bg-zinc-200 dark:bg-zinc-600"
>
  <div
    class="absolute -left-[0px] -top-[0px] h-[22px] w-[22px] rounded-full bg-sky-500 transition-all dark:translate-x-[20px] dark:bg-sky-900"
  ></div>
  <div
    class="absolute left-[4px] top-[4px] w-[14px] text-yellow-300 dark:text-zinc-400"
  >
    <slot name="light" />
  </div>
  <div
    class="absolute right-[4px] top-[4px] w-[13px] text-zinc-400 dark:text-sky-100"
  >
    <slot name="dark" />
  </div>
</button>
