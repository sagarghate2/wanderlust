const sampleListings = [
  
    {
      title: "Cozy beach front",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1114237414014272578/original/927f5ab5-9b4f-4680-8c9a-25c8b53e0311.jpeg?im_w=720",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-858470516437524672/original/18c275fb-cb16-4be0-bb68-ec3632e0ec85.jpeg?im_w=720",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/b8dfd0aa-b653-42f7-9bb1-d765dd7b41d3.jpg?im_w=720",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/f6929fa1-c685-45c8-bbe7-cb37202466bc.jpg?im_w=720",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/0e219ec7-e6bf-4b16-bbdd-a91e5d902534.jpg?im_w=720",
      },
      price: 800,
      location: "Bengaluru",
      country: "India",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTg4MDc5MTk1NzM4NDQxMzM3/original/803d2073-06fe-421b-9501-a341b48e1205.jpeg?im_w=720",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-983147632386913636/original/fa637b1a-9616-418c-8119-0ae31bba3106.jpeg?im_w=720",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1074607843996876120/original/2b58fc78-d276-493d-ad01-0f61ed8d6ace.jpeg?im_w=720",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-11328326/original/18061d4b-0d10-4f10-be94-ba60838bb8fe.jpeg?im_w=720",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/94667c63-1718-492e-8e3c-09827fe17ddf.jpg?im_w=720",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1209817827077336705/original/842dad00-6b84-4c8a-b7c7-3d4634fe7f90.jpeg?im_w=720",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/426e8d8f-aa0a-485e-9106-92699101f9c2.jpg?im_w=720",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzExODU2NjM%3D/original/d2a650e6-3386-45f5-a6b4-e5fb7a2449aa.jpeg?im_w=720",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/c6cd1389-673f-4425-85da-ae7c9d89cf21.jpg?im_w=720",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      owner : "676a7177ac49899332505e8b",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/d3d84c77-1122-4dd1-9e65-244b60516a37.jpg?im_w=720",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/7a80a62a-11f0-4dc6-a55e-5811e8dbb474.png?im_w=720",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-923429851971227198/original/0c18d0f8-ef54-4967-bde0-6b05b51cb43f.jpeg?im_w=720",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/1957add4-09a2-4774-bc95-313dad50b18d.jpg?im_w=720",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1263494110599364188/original/843dce6a-9035-4d05-878a-b9cbb26c7a4d.jpeg?im_w=720",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/3385ada7-4bb0-4db3-9b87-50c0be2339ba.jpg?im_w=720",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/d06ec2fa-3c7e-4bd5-864e-25374e0450c8.jpg?im_w=720",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-993483545320883163/original/503a16d5-9a46-4b6b-a13e-a7d79b3134db.jpeg?im_w=720",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-807948064760796364/original/251641e0-b8b7-4ded-ac53-5fa2bbb335a6.jpeg?im_w=720",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46109666/original/0ed8e865-b52b-4c28-9aec-756eb8c225f3.jpeg?im_w=720",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-624892699755656283/original/80eb68f7-f7f8-4cd5-a2cc-b6fc423d9178.jpeg?im_w=720",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/57c2edfa-8d6f-4adf-beb3-329e0e21664b.jpg?im_w=720",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
      owner : "676a7177ac49899332505e8b",
    },

  ];

  const transformedListing = sampleListings.map(item => ({
               listing : item
  }));
  
  module.exports = { data: sampleListings };


  beachfront