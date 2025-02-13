<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">{WebsiteName}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
      <li class="md:mx-4">
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter"
          class="border border-primary">Social Media</a
        >
      </li>
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2"><a href="/contact_us">Get in touch</a></li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/search">Search</a></li>
        <li>
          <a
            href="https://github.com/CriticalMoments/CMSaasStarter"
            class="border border-primary">★ us on Github</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="link link-hover mb-1" href="/">Overview</a>
      <a class="link link-hover my-1" href="/pricing">Pricing</a>
      <a class="link link-hover my-1" href="/blog">Blog</a>
      <a class="link link-hover my-1" href="/contact_us">Contact Us</a>
      <a class="link link-hover my-1" href="instagram.com">Social Media</a>
    </nav>
    <aside>
      <span class="footer-title opacity-80">Message</span>
      <a class="max-w-[260px]" href="/">
        <div class="font-bold text-3xl mb-1">Startopia</div>
        <div class="font-medium mb-3">Fueling Startup Growth</div>
        <div class="font-light">
          Turning bold ideas into successful ventures—because startups deserve
          to scale, not struggle.
        </div>
      </a>
    </aside>
  </footer>
</div>
