import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const FullMenu = () => {
  const menuSections = [
    {
      title: "Artisanal Chats",
      description: "Interactive fusion dishes that spark conversation",
      items: [
        {
          name: "Creamy Avocado Chattak Puri",
          description: "A delightful fusion of creamy avocado on a crispy puri base with tangy chutneys",
          price: "₹285",
          dietary: ["Vegetarian", "Gluten-Free"]
        },
        {
          name: "Nadru Burrata Papdi Chat", 
          description: "Crispy lotus stem and fresh burrata cheese on a classic papdi with mint chutney",
          price: "₹325",
          dietary: ["Vegetarian"]
        },
        {
          name: "Heirloom Tomato Bruschetta Chat",
          description: "Heritage tomatoes with basil oil on artisanal sourdough with microgreens",
          price: "₹295",
          dietary: ["Vegan", "Organic"]
        }
      ]
    },
    {
      title: "Small Plates",
      description: "Elegant appetizers perfect for sharing",
      items: [
        {
          name: "Amaranth Coated Hara Bhara Kebab",
          description: "A healthy twist on a classic, coated in nutritious amaranth with yogurt dip",
          price: "₹275",
          dietary: ["Vegetarian", "Protein-Rich"]
        },
        {
          name: "Memory Lane Cheese Fondue",
          description: "A comforting and shareable classic, perfect for mingling with artisanal bread",
          price: "₹425",
          dietary: ["Vegetarian"]
        },
        {
          name: "Truffle Mushroom Crostini",
          description: "Wild mushrooms with truffle oil on toasted baguette slices",
          price: "₹385",
          dietary: ["Vegetarian", "Gourmet"]
        }
      ]
    },
    {
      title: "Soups & Salads",
      description: "Fresh and nourishing combinations",
      items: [
        {
          name: "Turkish Shepherd's Salad",
          description: "A refreshing and vibrant mix of fresh vegetables with olive oil and herbs",
          price: "₹245",
          dietary: ["Vegan", "Gluten-Free"]
        },
        {
          name: "Creamy Corn Soup with Kurkure Chat",
          description: "A playful and textural soup experience with crispy kurkure toppings",
          price: "₹225",
          dietary: ["Vegetarian"]
        },
        {
          name: "Quinoa Power Bowl",
          description: "Superfood salad with roasted vegetables, avocado, and tahini dressing",
          price: "₹315",
          dietary: ["Vegan", "Protein-Rich", "Gluten-Free"]
        }
      ]
    },
    {
      title: "Main Courses",
      description: "Signature dishes that define our culinary philosophy",
      items: [
        {
          name: "Saffron Risotto Primavera",
          description: "Arborio rice with seasonal vegetables, finished with saffron and parmesan",
          price: "₹485",
          dietary: ["Vegetarian", "Gluten-Free"]
        },
        {
          name: "Artisanal Pasta Carbonara",
          description: "House-made pasta with truffle cream, organic eggs, and aged cheese",
          price: "₹445",
          dietary: ["Vegetarian"]
        },
        {
          name: "Mediterranean Herb-Crusted Portobello",
          description: "Grilled portobello with quinoa stuffing, roasted vegetables, and red wine jus",
          price: "₹425",
          dietary: ["Vegan", "Gluten-Free"]
        },
        {
          name: "Paneer Tikka Masala Reimagined",
          description: "House-made paneer in a smoky tomato curry with naan and basmati rice",
          price: "₹395",
          dietary: ["Vegetarian"]
        }
      ]
    },
    {
      title: "Artisanal Beverages",
      description: "Crafted infusions and signature drinks",
      items: [
        {
          name: "Lavender Honey Lemonade",
          description: "House-made lavender syrup with fresh lemon and local honey",
          price: "₹185",
          dietary: ["Vegan", "Organic"]
        },
        {
          name: "Spiced Chai Martini",
          description: "Traditional chai spices with premium spirits and vanilla foam",
          price: "₹325",
          dietary: ["Vegetarian"]
        },
        {
          name: "Cucumber Mint Cooler",
          description: "Refreshing blend of cucumber, mint, lime, and sparkling water",
          price: "₹165",
          dietary: ["Vegan", "Gluten-Free"]
        }
      ]
    },
    {
      title: "Sweet Endings",
      description: "Decadent desserts to complete your journey",
      items: [
        {
          name: "Dark Chocolate Avocado Mousse",
          description: "Rich and creamy with raspberry coulis and candied mint",
          price: "₹285",
          dietary: ["Vegan", "Gluten-Free"]
        },
        {
          name: "Rose & Pistachio Kulfi",
          description: "Traditional Indian ice cream with modern presentation and edible flowers",
          price: "₹245",
          dietary: ["Vegetarian", "Gluten-Free"]
        },
        {
          name: "Seasonal Fruit Tart",
          description: "Vanilla custard tart with fresh seasonal fruits and honey glaze",
          price: "₹265",
          dietary: ["Vegetarian"]
        }
      ]
    }
  ];

  const getDietaryColor = (dietary: string) => {
    switch (dietary) {
      case "Vegan": return "bg-green-100 text-green-800";
      case "Vegetarian": return "bg-blue-100 text-blue-800";
      case "Gluten-Free": return "bg-purple-100 text-purple-800";
      case "Organic": return "bg-orange-100 text-orange-800";
      case "Protein-Rich": return "bg-red-100 text-red-800";
      case "Gourmet": return "bg-[#FED6AB] text-[#a97a50]";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Menu | MOAI Restaurant, Artisanal Vegetarian Fine Dining, Bangalore"
        description="MOAI's vegetarian fine dining menu in Jayanagar and Koramangala: artisanal chats, soups, mains, desserts, and drinks. Pure veg and vegan-friendly."
        canonical="https://www.moaiveg.com/menu"
        ogImage="https://www.moaiveg.com/og-image-menu.jpg"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Menu", item: "https://www.moaiveg.com/menu" },
        ]}
      />
      <header>
        <Navigation />
      </header>
      
      {/* Hero Section */}
      <main id="main-content">
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-royal-entrance shimmer-text">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover our complete collection of artisanal vegetarian dishes, each crafted with passion 
            and the finest ingredients for vegetarian fine dining in Bangalore, including vegan and multi-cuisine options.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {menuSections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="animate-royal-entrance"
              style={{ animationDelay: `${sectionIndex * 0.2}s` }}
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4 shimmer-text">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {section.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex}
                    className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border hover:royal-glow group"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                          {item.name}
                        </h3>
                        <span className="text-[#FED6AB] font-bold text-xl ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.dietary.map((diet, dietIndex) => (
                          <span 
                            key={dietIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getDietaryColor(diet)}`}
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chef's Special */}
      {/* <section className="py-20 bg-gradient-to-r from-primary/10 to-[#FED6AB]/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 animate-royal-entrance">
              Chef's Special Tasting Menu
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our complete culinary journey with a carefully curated selection 
              of our signature dishes, perfectly paired and thoughtfully presented.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-primary mb-3">5-Course Discovery</h3>
                  <p className="text-muted-foreground mb-4">
                    A curated journey through our most beloved dishes
                  </p>
                  <div className="text-2xl font-bold text-[#FED6AB]">₹1,485</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-primary mb-3">7-Course Premium</h3>
                  <p className="text-muted-foreground mb-4">
                    The complete MOAI experience with wine pairings
                  </p>
                  <div className="text-2xl font-bold text-[#FED6AB]">₹2,185</div>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="animate-bounce-elegant">
              Reserve Tasting Menu Experience
            </Button>
          </div>
        </div>
      </section> */}

      </main>

      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default FullMenu;