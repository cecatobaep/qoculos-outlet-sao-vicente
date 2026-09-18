/**
 * Catálogo de Produtos e Destaques - QÓculos Outlet São Vicente
 * Dados estruturados para fácil manutenção e escalabilidade.
 */

const CATALOG_DATA = [
  {
    id: "prod-1",
    name: "Ray-Ban Clubmaster Classic Optics",
    brand: "Ray-Ban",
    category: "grau",
    badge: "50% OFF",
    originalPrice: "R$ 720,00",
    outletPrice: "R$ 359,90",
    installments: "10x de R$ 35,99 sem juros",
    description: "Armação icônica retrô com detalhes em dourado e acetato tartaruga de alta resistência.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f68?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1591076482161-42ce6da69f68?auto=format&fit=crop&w=800&q=80",
    alt: "Armação de grau Ray-Ban Clubmaster em acetato e metal",
    tag: "Grau Masculino/Unissex"
  },
  {
    id: "prod-2",
    name: "Vogue Eyewear Butterfly Chic",
    brand: "Vogue Eyewear",
    category: "grau",
    badge: "Outlet Exclusivo",
    originalPrice: "R$ 590,00",
    outletPrice: "R$ 289,00",
    installments: "10x de R$ 28,90 sem juros",
    description: "Design borboleta contemporâneo em tons translúcidos com hastes ultrafinas e confortáveis.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    alt: "Armação feminina Vogue Eyewear estilo borboleta translúcida",
    tag: "Grau Feminino"
  },
  {
    id: "prod-3",
    name: "Oakley Holbrook™ Matte Black Prizm",
    brand: "Oakley",
    category: "solar",
    badge: "Destaque Solar",
    originalPrice: "R$ 840,00",
    outletPrice: "R$ 449,90",
    installments: "10x de R$ 44,99 sem juros",
    description: "Lentes com tecnologia Prizm para contraste aprimorado e armação leve O Matter™ resistente.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    alt: "Óculos de sol Oakley Holbrook preto fosco com lentes polarizadas",
    tag: "Solar Esportivo"
  },
  {
    id: "prod-4",
    name: "Armani Exchange Minimalist Urban",
    brand: "Armani Exchange",
    category: "grau",
    badge: "Mais Vendido",
    originalPrice: "R$ 640,00",
    outletPrice: "R$ 319,90",
    installments: "10x de R$ 31,99 sem juros",
    description: "Estrutura retangular em liga de titânio leve com ponteiras ergonômicas para uso prolongado.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    alt: "Armação Armani Exchange retangular minimalista em metal grafite",
    tag: "Grau Executivo"
  },
  {
    id: "prod-5",
    name: "Ray-Ban Aviator Degradê Polarizado",
    brand: "Ray-Ban",
    category: "solar",
    badge: "45% OFF",
    originalPrice: "R$ 890,00",
    outletPrice: "R$ 489,00",
    installments: "10x de R$ 48,90 sem juros",
    description: "O modelo aviador clássico e atemporal com lentes de cristal temperado e proteção UV400 completa.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    alt: "Óculos de sol Ray-Ban Aviador dourado com lente degradê",
    tag: "Solar Clássico"
  },
  {
    id: "prod-6",
    name: "HB Polytech Shield Ultraleve",
    brand: "Hot Buttered",
    category: "grau",
    badge: "Alta Durabilidade",
    originalPrice: "R$ 490,00",
    outletPrice: "R$ 249,90",
    installments: "10x de R$ 24,99 sem juros",
    description: "Armação nacional em polímero Polytech flexível, resistente a impactos e com ajuste perfeito.",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80",
    alt: "Armação HB em acetato preto fosco e hastes anatômicas",
    tag: "Grau Dia a Dia"
  },
  {
    id: "prod-7",
    name: "Lentes Digitais Blue Control Anti-Fadiga",
    brand: "Laboratório Próprio",
    category: "lentes",
    badge: "Tecnologia Ocular",
    originalPrice: "R$ 480,00",
    outletPrice: "R$ 229,00",
    installments: "10x de R$ 22,90 sem juros",
    description: "Filtro avançado contra luz azul nociva de computadores e smartphones + antirreflexo premium.",
    image: "https://images.unsplash.com/photo-1582142839970-2b9ffacceb09?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1582142839970-2b9ffacceb09?auto=format&fit=crop&w=800&q=80",
    alt: "Lentes oftálmicas tratadas com tecnologia de filtro de luz azul e antirreflexo",
    tag: "Lentes & Tratamentos"
  },
  {
    id: "prod-8",
    name: "Armação Flexível Infantil Kids Safe",
    brand: "Kids Collection",
    category: "infantil",
    badge: "Indestrutível",
    originalPrice: "R$ 380,00",
    outletPrice: "R$ 189,90",
    installments: "10x de R$ 18,99 sem juros",
    description: "100% silicone atóxico flexível, sem partes metálicas, com cordão elástico removível de segurança.",
    image: "https://images.unsplash.com/photo-1614715838608-dd527c46131d?auto=format&fit=crop&w=600&q=80",
    imageWebp: "https://images.unsplash.com/photo-1614715838608-dd527c46131d?auto=format&fit=crop&w=800&q=80",
    alt: "Armação infantil em silicone flexível colorida para crianças",
    tag: "Infantil Seguro"
  }
];

// Marcas disponíveis no Outlet
const BRANDS_DATA = [
  { name: "Ray-Ban", discount: "Até 50% OFF" },
  { name: "Oakley", discount: "Até 45% OFF" },
  { name: "Vogue Eyewear", discount: "Até 55% OFF" },
  { name: "Armani Exchange", discount: "Até 50% OFF" },
  { name: "Empório Armani", discount: "Até 40% OFF" },
  { name: "HB Eyewear", discount: "Até 60% OFF" },
  { name: "Grazi Eyewear", discount: "Até 50% OFF" },
  { name: "Zeiss Lentes", discount: "Alta Tecnologia" }
];
