<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "./../../../config"

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    scaleIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Core Features",
      header: true,
    },
    {
      name: "Strategy Call",
      freeIncluded: true,
      proIncluded: true,
      scaleIncluded: true,
    },
    {
      name: "SEO Audit",
      freeIncluded: false,
      proIncluded: true,
      scaleIncluded: true,
    },
    {
      name: "Lead Gen Templates",
      freeIncluded: false,
      proIncluded: true,
      scaleIncluded: true,
    },
    {
      name: "Branding Guide",
      freeIncluded: false,
      proIncluded: true,
      scaleIncluded: true,
    },

    {
      name: "Full SEO Optimization",
      freeIncluded: false,
      proIncluded: false,
      scaleIncluded: true,
    },
    {
      name: "Paid Ads Setup",
      freeIncluded: false,
      proIncluded: false,
      scaleIncluded: true,
    },
    {
      name: "Offline Marketing",
      freeIncluded: false,
      proIncluded: true,
      scaleIncluded: true,
    },
    {
      name: "Social Media Management",
      freeIncluded: false,
      proIncluded: false,
      scaleIncluded: true,
    },
    {
      name: "AI Chatbot Setup",
      freeIncluded: false,
      proIncluded: false,
      scaleIncluded: true,
    },
    {
      name: "Customer Support",
      freeIncluded: false,
      proIncluded: true,
      scaleIncluded: true,
    },
  ]
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">Pricing</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Totally free, scale to millions of users
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
    <h1 class="text-2xl font-bold text-center mt-24">Pricing FAQ</h1>
    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Is there a free plan available?
          </div>
          <div class="collapse-content">
            <p>
              Yes! Startopia offers a free plan where we discuss your startup’s
              needs and recommend the best strategy.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What services are included in the paid plans?
          </div>
          <div class="collapse-content">
            <p>
              Our Growth and Scale plans include branding, SEO, lead generation,
              sales optimization, social media marketing, and automation
              services.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Do you offer custom startup solutions?
          </div>
          <div class="collapse-content">
            <p>
              Yes! We tailor our services based on your startup's needs. Contact
              us for a custom plan.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            How does Startopia help with lead generation?
          </div>
          <div class="collapse-content">
            <p>
              We use data-driven strategies, cold outreach, LinkedIn campaigns,
              and SEO optimization to help you generate high-quality leads.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Can I upgrade my plan later?
          </div>
          <div class="collapse-content">
            <p>
              Absolutely! You can start with a basic plan and upgrade as your
              startup grows.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Do you provide SEO services for startups?
          </div>
          <div class="collapse-content">
            <p>
              Yes! Our SEO services include on-page, off-page, and technical SEO
              to improve your website ranking and visibility.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Does Startopia offer marketing services?
          </div>
          <div class="collapse-content">
            <p>
              Yes! We provide digital and offline marketing, including social
              media management, paid advertising, and college-level promotions.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            How does AI automation help startups?
          </div>
          <div class="collapse-content">
            <p>
              We implement AI chatbots and CRM automation to enhance customer
              engagement and streamline lead nurturing.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What kind of customer support do you offer?
          </div>
          <div class="collapse-content">
            <p>
              We offer email and chat support during business hours. For urgent
              queries, you can use our automated support system or check our
              FAQs.
            </p>
          </div>
        </div>
      </div>
    </div>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol
          id="checkcircle"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
          />
        </symbol>
      </defs>
    </svg>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
          />
        </symbol>
      </defs>
    </svg>

    <h1 class="text-2xl font-bold text-center mt-16">Plan Features</h1>
    <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
      Example feature table
    </h2>
    <div class="overflow-visible mx-auto max-w-xl mt-4">
      <table class="table">
        <thead
          class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur"
        >
          <tr>
            <th></th>
            <th class="text-center">Free</th>
            <th class="text-center">Growth</th>
            <th class="text-center">Scale</th>
          </tr>
        </thead>
        <tbody>
          {#each planFeatures as feature}
            {#if feature.header}
              <tr class="bg-base-200 font-bold">
                <td colspan="4">{feature.name} </td>
              </tr>
            {:else}
              <tr class="relative">
                <td>{feature.name} </td>
                <td class="text-center">
                  {#if feature.freeString}
                    {feature.freeString}
                  {:else if feature.freeIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.proString}
                    {feature.proString}
                  {:else if feature.proIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.scaleIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
