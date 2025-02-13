<script lang="ts">
  import { pricingPlans } from "./pricing_plans"

  // Function to open Gmail with a pre-filled email
  function contactUs(plan) {
    const subject = encodeURIComponent(
      `Interested in Startopia Plan: ${plan.name}`,
    )

    // Convert features into a bullet list format
    const featuresList = plan.features
      .map((feature) => `- ${feature}`)
      .join("%0A")

    const body = encodeURIComponent(`Hello Harsh,

I am interested in the ${plan.name} plan for my startup. Here are the details of this plan:

📌 **Plan Name:** ${plan.name}
💡 **Description:** ${plan.description}

✅ **Features Included:**
${featuresList}

I would like to know more about how your team can help with this plan. Looking forward to your response.

Thanks,  
[Your Name]  
[Your Startup Name]`)

    // Open Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=harshspalod@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    )
  }
</script>

<div class="flex flex-col lg:flex-row gap-10 place-content-center flex-wrap">
  {#each pricingPlans as plan}
    <div
      class="flex-none card card-bordered border-gray-200 shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {plan.description}
        </p>
        <div class="mt-auto pt-4 text-sm text-gray-600">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-400">{plan.priceIntervalName}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            <button
              on:click={() => contactUs(plan)}
              class="btn btn-primary w-[80%] mx-auto"
            >
              Choose {plan.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
