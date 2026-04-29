import { createFileRoute } from "@tanstack/react-router";
import pasta from "@/assets/pasta.jpg";
import garlicBread from "@/assets/garlic-bread.jpg";
import pizza from "@/assets/pizza.jpg";
import nachos from "@/assets/nachos.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import mojito from "@/assets/mojito.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Bungalow Café | Pasta, Pizza, Coffee & More" },
      { name: "description", content: "Explore our menu: handcrafted pastas, wood-fired pizzas, snacks, beverages and desserts at The Bungalow Café, Surat." },
      { property: "og:title", content: "Menu — The Bungalow Café" },
      { property: "og:description", content: "Pastas, pizzas, snacks, beverages & desserts." },
      { property: "og:image", content: pasta },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string; img?: string };
type Category = { id: string; title: string; items: Item[] };

const categories: Category[] = [
  {
    id: "pasta",
    title: "Pasta",
    items: [
      { name: "Pink Sauce Pasta", desc: "Our signature creamy tomato pasta with herbs.", price: "₹280", img: pasta },
      { name: "Alfredo Penne", desc: "Classic white sauce with parmesan & garlic.", price: "₹260" },
      { name: "Arrabbiata Spaghetti", desc: "Spicy red sauce with chilli flakes.", price: "₹250" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      { name: "Margarita Pizza", desc: "Fresh mozzarella, basil, tomato.", price: "₹220", img: pizza },
      { name: "Farmhouse", desc: "Onion, capsicum, tomato, mushroom.", price: "₹280" },
      { name: "Paneer Tikka", desc: "Spiced paneer, onion, coriander.", price: "₹320" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { name: "Garlic Bread with Cheese", desc: "Toasted bread, garlic butter, melted cheese.", price: "₹180", img: garlicBread },
      { name: "Loaded Nachos", desc: "Corn chips, cheese sauce, salsa, jalapeños.", price: "₹240", img: nachos },
      { name: "Peri Peri Fries", desc: "Crispy fries tossed in peri peri spice.", price: "₹160" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      { name: "Cappuccino", desc: "Espresso, steamed milk, foamy art.", price: "₹140", img: cappuccino },
      { name: "Iced Coffee", desc: "Bold espresso over ice with cream.", price: "₹160", img: icedCoffee },
      { name: "Virgin Mojito", desc: "Mint, lime, soda — refreshing.", price: "₹150", img: mojito },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Cheesecake", desc: "Baked classic with berry compote.", price: "₹220", img: cheesecake },
      { name: "Choco Lava Cake", desc: "Warm cake, molten chocolate centre.", price: "₹200" },
      { name: "Tiramisu", desc: "Coffee-soaked layers, mascarpone cream.", price: "₹240" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Menu</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Crafted with love.</h1>
          <p className="mt-5 text-muted-foreground text-lg">
            From signature pastas to slow-pulled espresso — a little something for every mood.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="px-5 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl md:text-4xl text-primary">{cat.title}</h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-5 rounded-3xl bg-card p-5 border border-border/40 shadow-soft">
                    {item.img && (
                      <img src={item.img} alt={item.name} className="h-24 w-24 rounded-2xl object-cover shrink-0" loading="lazy" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="font-display text-lg text-primary whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.desc && <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
