export const blogInfo = {
  name: "Startopia Blogs",
  description: "Fueling Startup Growth with AI-Driven Strategies",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "SEO in 2025: The Ultimate Guide to Ranking #1 on Google",
    description:
      "Want to rank #1 on Google? Learn the latest SEO strategies, tips, and hacks to boost your website traffic and stay ahead of the competition!",
    link: "/blog/Saasblog",
    date: "2025-02-18",
  },

  {
    title: "Ai in 2025: Integrate Ai to your life style",
    description:
      "Want chatbots according to your requirements and needs? Learn the latest Ai strategies, tips, and hacks to boost your website traffic and stay ahead of the competition!",
    link: "/blog/AiBlog",
    date: "2025-03-04",
  },
  {
    title: "Product to Brand: Creating a Brand Strategy for Your Startup",
    description:
      "Want to turn your product into a brand? Learn how to create a brand strategy that resonates with your target audience and drives growth for your startup!",
    link: "/blog/Branding",
    date: "2025-03-05",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
