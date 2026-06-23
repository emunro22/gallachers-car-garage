import SeoServicePage from "@/components/SeoServicePage";

export default function CarRepairNearMe() {
  return (
    <SeoServicePage
      title="Car Repair Near Me"
      heading="Car Repair"
      headingHighlight="Near Me in Blantyre"
      intro="Looking for reliable car repair near you? Gallachers Car Garage in Blantyre, South Lanarkshire offers expert car and van repairs at honest, competitive prices."
      paragraphs={[
        "If you're searching for car repair near me in Blantyre, Hamilton, Bothwell, Uddingston, Cambuslang, or anywhere in South Lanarkshire, Gallachers Car Garage is your local trusted mechanic. We handle everything from minor repairs to major engine work on all makes and models.",
        "Our experienced mechanics use modern diagnostic equipment to quickly identify faults and get your vehicle back on the road. We believe in honest, transparent pricing — you'll always know exactly what's wrong and how much it will cost before we start any work.",
        "Whether your car needs a simple brake pad change, a full clutch replacement, suspension work, or a complete engine rebuild, we've got you covered. We also work on vans and light commercial vehicles up to 3.5 tonnes.",
      ]}
      bulletPoints={[
        "All makes and models of cars and vans repaired",
        "Light goods vehicles up to 3.5 tonnes",
        "MOT testing station",
        "Full servicing — interim and major services",
        "Brakes, clutches, suspension, exhausts",
        "Timing belt and wet belt replacement",
        "Engine diagnostics and fault finding",
        "Tyres and battery replacement",
        "Free, no-obligation quotes",
        "Competitive prices with no hidden charges",
      ]}
      faqs={[
        {
          question: "Where can I find a good car repair garage near me in South Lanarkshire?",
          answer: "Gallachers Car Garage is located at Unit 7a, 7b Forrest Street, Blantyre, G72 0JP. We're just off the main road and serve the whole of South Lanarkshire including Hamilton, Bothwell, Uddingston, and East Kilbride.",
        },
        {
          question: "How much does car repair cost?",
          answer: "Costs vary depending on the repair needed. We offer free, no-obligation quotes and always explain what work is required before we start. Our prices are very competitive compared to other garages and main dealers in the area.",
        },
        {
          question: "Do you repair vans as well as cars?",
          answer: "Yes, we repair all types of cars and vans including light commercial vehicles up to 3.5 tonnes. From Transits to Sprinters, we've got you covered.",
        },
      ]}
    />
  );
}
