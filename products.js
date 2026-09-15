const PRODUCTS = [
  {
    "id": "baby-electric-nail-trimmer",
    "name": "Baby Electric Nail Trimmer & Care Set",
    "category": "Baby Care",
    "description": "Compact baby nail-care device with multiple attachments and storage case.",
    "image": "images/baby-electric-nail-trimmer.jpg"
  },
  {
    "id": "baby-grooming-kit",
    "name": "Baby Grooming & Care Kit",
    "category": "Baby Care",
    "description": "Multi-piece newborn grooming set in a portable zip case.",
    "image": "images/baby-grooming-kit.jpg"
  },
  {
    "id": "formula-snack-container",
    "name": "Stackable Baby Formula / Snack Container",
    "category": "Feeding",
    "description": "Compact multi-compartment container for measured portions and snacks.",
    "image": "images/formula-snack-container.jpg"
  },
  {
    "id": "baby-toddler-footwear",
    "name": "Baby & Toddler Footwear",
    "category": "Clothing",
    "description": "Soft baby footwear in assorted colours and styles.",
    "image": "images/baby-toddler-footwear.jpg"
  },
  {
    "id": "newborn-gift-set",
    "name": "Newborn Clothing & Accessory Gift Set",
    "category": "Gifts",
    "description": "Curated newborn clothing and accessory set suitable for gifting.",
    "image": "images/newborn-gift-set.jpg"
  },
  {
    "id": "baby-nest-lounger",
    "name": "Baby Nest / Newborn Lounger",
    "category": "Nursery",
    "description": "Padded baby nest-style resting product for supervised use.",
    "image": "images/baby-nest-lounger.jpg"
  },
  {
    "id": "knitted-newborn-set",
    "name": "Knitted Newborn Gift Sets",
    "category": "Gifts",
    "description": "Coordinated knitted newborn accessories and gift sets.",
    "image": "images/knitted-newborn-set.jpg"
  },
  {
    "id": "double-stroller",
    "name": "Double Baby Stroller",
    "category": "Travel",
    "description": "Two-seat stroller format for families travelling with two young children.",
    "image": "images/double-stroller.jpg"
  },
  {
    "id": "single-stroller-canopy",
    "name": "Single Baby Stroller \u2013 Canopy Style",
    "category": "Travel",
    "description": "Compact stroller with canopy, harness seating and storage.",
    "image": "images/single-stroller-canopy.jpg"
  },
  {
    "id": "single-stroller-full-canopy",
    "name": "Single Baby Stroller \u2013 Full-Canopy Style",
    "category": "Travel",
    "description": "Full-canopy stroller with reclining seating and storage.",
    "image": "images/single-stroller-full-canopy.jpg"
  },
  {
    "id": "baby-bath-care-set",
    "name": "Baby Bath & Care Set",
    "category": "Bath & Care",
    "description": "Multi-piece infant bathing and care set for home use.",
    "image": "images/baby-bath-care-set.jpg"
  },
  {
    "id": "baby-bouncer-seat",
    "name": "Baby Bouncer / Infant Seat",
    "category": "Nursery",
    "description": "Portable infant seating and bouncer-style product.",
    "image": "images/baby-bouncer-seat.jpg"
  },
  {
    "id": "bottle-warmer",
    "name": "Bottle / Feeding Warmer \u2013 Branded Range",
    "category": "Feeding",
    "description": "Bottle-warming product; brand authenticity should be verified before sale.",
    "image": "images/bottle-warmer.jpg"
  },
  {
    "id": "foldable-baby-bath",
    "name": "Foldable Baby Bath",
    "category": "Bath & Care",
    "description": "Space-saving infant bath design that folds for storage.",
    "image": "images/foldable-baby-bath.jpg"
  },
  {
    "id": "children-gift-baskets",
    "name": "Children's Gift & Activity Baskets",
    "category": "Gifts",
    "description": "Curated children's gift baskets with themes and contents that may vary.",
    "image": "images/children-gift-baskets.jpg"
  },
  {
    "id": "compact-travel-stroller",
    "name": "Compact Travel Stroller",
    "category": "Travel",
    "description": "Lightweight travel stroller format with canopy and harness seating.",
    "image": "images/compact-travel-stroller.jpg"
  },
  {
    "id": "video-baby-monitor",
    "name": "Video Baby Monitor with Parent Unit",
    "category": "Nursery",
    "description": "Camera and handheld parent display for home baby monitoring.",
    "image": "images/video-baby-monitor.jpg"
  },
  {
    "id": "baby-fruit-feeder",
    "name": "Baby Fruit Feeder / Silicone Food Feeder",
    "category": "Feeding",
    "description": "Reusable feeding accessory for soft fruit and complementary foods.",
    "image": "images/baby-fruit-feeder.jpg"
  },
  {
    "id": "baby-play-gym",
    "name": "Baby Play Gym / Activity Mat",
    "category": "Play",
    "description": "Padded activity mat with overhead arches and hanging sensory toys.",
    "image": "images/baby-play-gym.jpg"
  },
  {
    "id": "bunny-comforter",
    "name": "Bunny Comforter / Security Blanket",
    "category": "Gifts",
    "description": "Soft bunny-shaped comforter blankets in pastel colourways.",
    "image": "images/bunny-comforter.jpg"
  },
  {
    "id": "muslin-swaddle",
    "name": "Muslin Baby Swaddle / Receiving Blanket Set",
    "category": "Textiles",
    "description": "Lightweight muslin-style baby blankets in assorted patterns.",
    "image": "images/muslin-swaddle.jpg"
  },
  {
    "id": "hooded-baby-towel",
    "name": "Hooded Baby Towel / Bath Wrap",
    "category": "Bath & Care",
    "description": "Soft hooded baby towels with animal-inspired designs.",
    "image": "images/hooded-baby-towel.jpg"
  },
  {
    "id": "baby-floor-seat",
    "name": "Baby Floor Seat / Inflatable Support Seat",
    "category": "Seating",
    "description": "Inflatable-style infant floor seat with supported central seating.",
    "image": "images/baby-floor-seat.jpg"
  },
  {
    "id": "adjustable-bath-seat",
    "name": "Adjustable Baby Bath Seat / Bath Support",
    "category": "Bath & Care",
    "description": "Infant bath support seat; specifications and safety information must be confirmed.",
    "image": "images/adjustable-bath-seat.jpg"
  },
  {
    "id": "wooden-cot-mobile",
    "name": "Wooden Baby Cot Mobile / Hanging Mobile",
    "category": "Nursery",
    "description": "Decorative wooden nursery mobile with hanging shapes.",
    "image": "images/wooden-cot-mobile.jpg"
  },
  {
    "id": "toddler-potty",
    "name": "Toddler Potty Training Toilet",
    "category": "Bath & Care",
    "description": "Child-sized potty-training toilet with cleanable components.",
    "image": "images/toddler-potty.jpg"
  },
  {
    "id": "wooden-nursery-mobile",
    "name": "Wooden Nursery Mobile / Cot Hanging Decoration",
    "category": "Nursery",
    "description": "Natural-wood nursery mobile with soft-toned decorative shapes.",
    "image": "images/wooden-nursery-mobile.jpg"
  },
  {
    "id": "kidilo-g308",
    "name": "Kidilo G308 Infant Car Seat / Carrier",
    "category": "Travel",
    "description": "Branded infant car-seat/carrier model; authenticity and compliance must be verified.",
    "image": "images/kidilo-g308.jpg"
  }
];