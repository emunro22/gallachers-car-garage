export interface BlogBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  category: string;
  body: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "interim-vs-full-service-whats-included",
    title: "Interim Service or Full Service: What's Actually Included",
    excerpt:
      "A quick breakdown of what we check, top up, and inspect on an interim service versus a full service, so you know exactly what you're paying for.",
    date: "2026-03-04",
    category: "Servicing",
    body: [
      {
        type: "paragraph",
        text: "\"Do I need an interim or a full service?\" is one of the questions we get asked most at the garage. Both keep your car reliable, safe, and fuel-efficient, but they cover different ground, and knowing the difference helps you book the right one.",
      },
      {
        type: "heading",
        text: "Interim Service",
      },
      {
        type: "paragraph",
        text: "An interim service is designed to keep things ticking over between full services, typically every 6 months or 6,000 miles for cars doing higher mileage. It covers the essentials:",
      },
      {
        type: "list",
        items: [
          "Oil and filter change",
          "Fluid top-ups (screenwash, coolant, brake fluid level check)",
          "Brake check",
          "Tyre inspection, including tread depth and pressure",
        ],
      },
      {
        type: "heading",
        text: "Full Service",
      },
      {
        type: "paragraph",
        text: "A full service is a more thorough job, usually carried out annually or every 12,000 miles. It includes everything from the interim service plus a full multi-point vehicle health check, covering suspension components, exhaust, steering, lights, battery condition, and more. We'll flag anything that needs attention now or in the near future, with no pressure to get unnecessary work done.",
      },
      {
        type: "paragraph",
        text: "Whichever service you're due, we stamp your service book afterwards to maintain your vehicle's service history, which matters if you ever come to sell the car.",
      },
      {
        type: "paragraph",
        text: "Not sure which one your car needs? Check your service book or give us a call on 01698 711111 and we'll advise based on your vehicle's age and mileage.",
      },
    ],
  },
  {
    slug: "what-your-engine-warning-light-is-telling-you",
    title: "What Your Engine Warning Light Is (and Isn't) Telling You",
    excerpt:
      "The engine warning light can mean anything from a loose fuel cap to a serious fault. Here's how our diagnostic equipment tells the difference.",
    date: "2026-04-18",
    category: "Diagnostics",
    body: [
      {
        type: "paragraph",
        text: "Modern vehicles rely on complex electronic systems, and when something goes wrong, a warning light on the dashboard is usually the first sign. The trouble is, the same light can mean a dozen different things, from something trivial to something that needs attention straight away.",
      },
      {
        type: "paragraph",
        text: "We use advanced diagnostic equipment to read the fault codes stored by your car's engine management system and pinpoint exactly what's causing the issue. That covers engine management faults, ABS issues, airbag warnings, transmission problems, and electrical faults.",
      },
      {
        type: "heading",
        text: "Reading the Code Is Only Half the Job",
      },
      {
        type: "paragraph",
        text: "A fault code points us toward the system involved, but it doesn't always tell us the root cause on its own. Our experienced mechanics don't just read the code: they interpret it, cross-check it against the symptoms, and confirm the actual fault before recommending any work. That's the difference between fixing the problem and just clearing the light.",
      },
      {
        type: "list",
        items: [
          "A basic diagnostic scan typically takes 30 to 60 minutes",
          "More complex electrical fault finding can take longer, depending on the issue",
          "We'll explain what we find in plain terms before any repair goes ahead",
        ],
      },
      {
        type: "paragraph",
        text: "Whatever might seem like a minor issue could lead to expensive damage if left unresolved, particularly with emissions and transmission-related faults. Don't ignore a warning light. Bring your vehicle in for a diagnostic check and get a clear answer.",
      },
    ],
  },
  {
    slug: "brake-warning-signs-worth-booking-in-for",
    title: "Brake Warning Signs Worth Booking In For",
    excerpt:
      "Squealing, grinding, or a pull to one side under braking are your car's way of asking for attention. Here's what each sign usually means.",
    date: "2026-05-27",
    category: "Brakes",
    body: [
      {
        type: "paragraph",
        text: "Your brakes are your vehicle's most important safety feature, and they rarely fail without warning first. Catching the early signs means a simpler, cheaper repair, and it keeps you safer on the road in the meantime.",
      },
      {
        type: "list",
        items: [
          "Squealing or grinding noises when braking, often a sign the pads are worn",
          "The car pulling to one side under braking",
          "A spongy or soft brake pedal",
          "A brake warning light on the dashboard",
          "Vibration through the pedal or steering wheel when slowing down",
        ],
      },
      {
        type: "paragraph",
        text: "If you notice any of these, don't delay. Bring it to us for a thorough brake inspection. We'll diagnose the issue and give you an honest quote before carrying out any work, whether that's brake pads, discs, calipers, or a brake fluid change.",
      },
      {
        type: "heading",
        text: "Why We Include a Free Brake Inspection",
      },
      {
        type: "paragraph",
        text: "Every service at our garage includes a free brake inspection as part of the multi-point vehicle health check. Brakes wear gradually, and a lot of drivers don't notice the change until it's more pronounced, so a regular check catches problems before they become a safety issue.",
      },
      {
        type: "paragraph",
        text: "We use quality brake components and our experienced mechanics ensure every brake job is done to the highest standard. Your safety is our priority, and we never cut corners on brake work.",
      },
    ],
  },
  {
    slug: "winter-car-care-battery-and-tyres",
    title: "Winter Car Care: Batteries, Tyres, and What to Check Before the Cold Sets In",
    excerpt:
      "Cold weather is harder on batteries and tyres than any other time of year. A few checks now can save you an unwanted breakdown later.",
    date: "2026-10-12",
    category: "Seasonal",
    body: [
      {
        type: "paragraph",
        text: "Cold weather puts extra strain on two parts of your car that don't get much attention the rest of the year: the battery and the tyres. Neither fails without reason, but both are far more likely to let you down once temperatures drop.",
      },
      {
        type: "heading",
        text: "Batteries",
      },
      {
        type: "paragraph",
        text: "A battery that's been struggling quietly through summer often reveals itself on the first cold morning, when the engine needs more current to turn over and the battery has less capacity to give. If your car has been slower to start recently, or the interior lights seem dimmer than usual, it's worth having the battery tested before it lets you down completely. We offer battery testing and replacement for all vehicles.",
      },
      {
        type: "heading",
        text: "Tyres",
      },
      {
        type: "paragraph",
        text: "Tyre grip drops in cold, wet conditions, and worn tread makes that worse. Check your tread depth and tyre pressures regularly over winter, tyre pressures typically drop slightly as temperatures fall, and both matter more when the road is wet or icy. We stock quality tyres at competitive prices and can check tread depth and pressure as part of any visit.",
      },
      {
        type: "list",
        items: [
          "Get your battery tested if starting has felt sluggish",
          "Check tread depth and tyre pressure before winter sets in",
          "Keep an eye on wiper blades and screenwash, both work harder in winter",
          "Book any brake or suspension concerns in before the weather turns, rather than after",
        ],
      },
      {
        type: "paragraph",
        text: "None of this needs to be complicated. A quick check now is a lot less hassle than a breakdown on a cold morning. Call 01698 711111 and we'll fit you in.",
      },
    ],
  },
  {
    slug: "servicing-your-work-van-transit-sprinter-vivaro",
    title: "Servicing Your Work Van: What Blantyre Businesses Should Know",
    excerpt:
      "If your van is off the road, your business is too. Here's how we keep light commercial vehicles running with minimal downtime.",
    date: "2026-06-30",
    category: "Vans & Light Commercial",
    body: [
      {
        type: "paragraph",
        text: "For a lot of our customers, a van isn't just transport, it's how the business runs. A day off the road for an unplanned repair costs more than the repair itself, which is why regular servicing matters even more for light commercial vehicles than it does for the family car.",
      },
      {
        type: "paragraph",
        text: "We work on every make and model: from family hatchbacks and saloons to Transit vans, Sprinters, and everything in between, including light commercial vehicles up to 3.5 tonnes. Our workshop is fully equipped with modern tools and diagnostic equipment to handle both older and newer vehicles.",
      },
      {
        type: "heading",
        text: "What We Cover",
      },
      {
        type: "list",
        items: [
          "Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, and other light commercial vehicles",
          "Interim and full servicing to keep your van reliable between jobs",
          "Brake, suspension, and exhaust repairs for vehicles carrying regular loads",
          "Diagnostics for engine management and electrical faults",
          "Honest, upfront pricing before any work begins",
        ],
      },
      {
        type: "paragraph",
        text: "Vans that carry heavier, more regular loads put more strain on brakes, suspension, and tyres than the average car, so we pay close attention to those areas at every service. If something's due for attention, we'll flag it clearly rather than let it turn into a bigger, more expensive job later.",
      },
      {
        type: "paragraph",
        text: "If your van's due a service, or something doesn't feel right, call us on 01698 711111. We'll get you back on the road with as little downtime as possible.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
