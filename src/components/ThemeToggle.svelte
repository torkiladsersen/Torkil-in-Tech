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

<button on:click={() => (darkScheme = !darkScheme)}>
  <div
    class="relative flex h-[22px] w-[40px] items-stretch gap-1.5 rounded-3xl border border-black p-1 text-xs shadow-lg shadow-orange-900/20 transition-all duration-75 hover:-translate-y-px hover:shadow-orange-900/30 dark:border-white dark:shadow-orange-700/20 dark:hover:shadow-orange-700/30 sm:h-[28px] sm:w-[52px] sm:gap-2 sm:border-2 sm:text-base"
  >
    <div
      class="absolute left-0 top-0 h-[20px] w-[21px] rounded-full bg-black transition-transform dark:translate-x-[17px] dark:bg-white sm:-left-px sm:-top-px sm:h-[26px] sm:w-[27px] sm:dark:translate-x-[24px]"
    ></div>
    <div
      class="iconify text-white opacity-100 ph--sun-bold dark:opacity-50"
    ></div>
    <div
      class="iconify text-black opacity-50 ph--moon-bold dark:opacity-100"
    ></div>
  </div>
</button>
