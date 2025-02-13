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
          href="https://www.instagram.com/startopia.in/"
          class="border border-primary">Social Media</a
        >
      </li>
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshspalod@gmail.com
                &su=Startopia%20Collaboration%20Proposal
                &body=Hello%20Harsh,%0A%0A
                I%20am%20interested%20in%20Startopia's%20services%20for%20my%20startup.%0A
                I%20would%20like%20to%20know%20more%20about%20how%20your%20team%20can%20help%20with:%0A%0A
                -%20Talent%20Acquisition%0A
                -%20Investor%20Connections%0A
                -%20Marketing%20and%20Branding%0A
                -%20AI-powered%20Automation%0A
                -%20Other%20Services%20(please%20specify)%0A%0A
                It%20would%20be%20great%20to%20discuss%20further.%20Looking%20forward%20to%20your%20response.%0A%0A
                Thanks,%0A
                [Your%20Name]%0A
                [Your%20Startup%20Name]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </li>
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
        <li>
          <a
            href="https://www.instagram.com/startopia.in/"
            class="border border-primary">Social Media</a
          >
        </li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshspalod@gmail.com
                &su=Startopia%20Collaboration%20Proposal
                &body=Hello%20Harsh,%0A%0A
                I%20am%20interested%20in%20Startopia's%20services%20for%20my%20startup.%0A
                I%20would%20like%20to%20know%20more%20about%20how%20your%20team%20can%20help%20with:%0A%0A
                -%20Talent%20Acquisition%0A
                -%20Investor%20Connections%0A
                -%20Marketing%20and%20Branding%0A
                -%20AI-powered%20Automation%0A
                -%20Other%20Services%20(please%20specify)%0A%0A
                It%20would%20be%20great%20to%20discuss%20further.%20Looking%20forward%20to%20your%20response.%0A%0A
                Thanks,%0A
                [Your%20Name]%0A
                [Your%20Startup%20Name]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </a>
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

      <a
        class="link link-hover my-1"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=harshspalod@gmail.com&su=Startopia%20Collaboration%20Proposal&body=Hello%20Harsh,%0A%0AI%20am%20interested%20in%20Startopia's%20services%20for%20my%20startup.%20I%20would%20like%20to%20know%20more%20about%20how%20your%20team%20can%20help%20with:%0A%0A-%20Talent%20Acquisition%0A-%20Investor%20Connections%0A-%20Marketing%20and%20Branding%0A-%20AI-powered%20Automation%0A-%20Other%20Services%20(please%20specify)%0A%0AIt%20would%20be%20great%20to%20discuss%20further.%20Looking%20forward%20to%20your%20response.%0A%0AThanks,%0A[Your%20Name]%0A[Your%20Startup%20Name]"
        target="_blank"
      >
        Contact Us
      </a>

      <a class="link link-hover my-1" href="/">Social Media</a>
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
