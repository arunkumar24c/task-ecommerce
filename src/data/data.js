const shoes = [
  {
    id: 1,
    title: " Dhoni",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp84GpeXDbYT--Rr8mCZCdJFPBpDiEjxa34g&usqp=CAU",
    description:
      "Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team",
    price: 175,
    originalPrize: 249,
    offers: "18% offer",
    rating: 4.9,
    category: "Sports",
  },
  {
    id: 2,
    title: "Virat",
    image:
      "https://img.favpng.com/18/13/23/virat-kohli-india-national-cricket-team-indian-premier-league-australia-national-cricket-team-png-favpng-hEegWp7stimP4exYwf0uheKZL.jpg",
    description:
      "Virat Kohli is an Indian international cricketer and the former captain of the India national team who plays as a right-handed batsman",
    price: 239,
    originalPrize: 759,
    offers: "11% offer",
    rating: 4.9,

    category: "Sports",
  },
  {
    id: 3,
    title: "Sachin",
    image:
      "https://i.pinimg.com/originals/83/6c/c4/836cc47064357a49f2c81b434b866d39.jpg",
    description:
      "Sachin Tendulkar was the most complete batter of his time, the most prolific run-maker of all time, and arguably the biggest cricket icon the game has ever ...",
    price: 209,
    originalPrize: 439,
    offers: "22% offer",
    rating: 4.8,

    category: "Sports",
  },
  {
    id: 4,
    title: "Rohit",
    image:
      "https://p1.hiclipart.com/preview/621/822/464/sports-day-rohit-sharma-indian-cricketer-batsman-tshirt-sleeve-team-sport-uniform-png-clipart.jpg",
    description:
      "Rohit represented the new-age Indian cricketer: An attacking right-hander who went for the big shots with impunity and cleared the field with a ...",
    price: 149,
    originalPrize: 275,
    offers: "13% offer",
    rating: 4.2,

    category: "Sports",
  },
  {
    id: 5,
    title: "yuviraj Sing",
    image:
      "https://i.pinimg.com/236x/d7/1e/36/d71e36b2093c7751ea9c970730b716d5.jpg",
    description:
      "Get live cricket scores, cricket updates of upcoming International, domestic and T20 matches. ",
    price: 140,
    originalPrize: 334,
    offers: "22% offer",
    rating: 4.7,

    category: "Sports",
  },
  {
    id: 6,
    title: "Pant",
    image:
      "https://i.pinimg.com/originals/35/8a/ba/358aba06d2eb9117e7db721f39805c10.jpg",
    description:
      "Whether elite athletes are racing or training, they look to Zoom Air for a fast, responsive ride and that snappy, quick-off-the-ground feel that helps optimise their quest for speed.",
    price: 129,
    originalPrize: 244,
    offers: "15% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 7,
    title: "STEVE SMITH",
    image:
      "https://img.favpng.com/20/8/1/steve-smith-australia-national-cricket-team-india-national-cricket-team-west-indies-cricket-team-the-ashes-png-favpng-3WX1T82VVdbCtFfJSvA9f6Q5x.jpg",
    description:
      "smith is good cricketer and he  is number 1 batsman for world",
    price: 700,
    originalPrize: 1499,
    offers: "24% offer",
    rating: 4.7,
    category: "Education",
  },
  {
    id: 8,
    title: "MAXWELL",
    image:
      "https://www.seekpng.com/png/detail/269-2692372_maxwell-was-bagged-by-mumbai-indians-for-a.png",
    description:
      "Maxwell is good cricketer and he  is number 1 allrounder  for world",
    price: 349,
    originalPrize: 649,
    offers: "29% offer",
    rating: 4.9,

    category: "Education",
  },
  {
    id: 9,
    title: "KL RAGUL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6BY0yosUspSfmyHhG8Z_UY7HpiCWgUcp5P69fFq4nQvGoR4c6ELKdkxAvhEqRU60yFs&usqp=CAU",
    description: "While Ragul scored many runs to indian team ",
    price: 159,
    originalPrize: 223,
    offers: "10% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 10,
    title: "MATHEW WADE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Fw5E8GjX-pDO3w9LPutaizGUbTFer2hh2tEuRoRTGNVS3SDKQoEBEhQr6Wml198bI0Q&usqp=CAU",
    description:
      "mathew wade is good wicket keeeper batsman for the austrialia team",
    price: 199,
    originalPrize: 323,
    offers: "7% offer",
    rating: 4.9,
    category: "Education",
  },
  {
    id: 11,
    title: "Indian Education",
    image:
      "https://m.media-amazon.com/images/I/81pVd0atsVL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      " the act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment",
    price: 165,
    originalPrize: 349,
    offers: "19% offer",
    rating: 4.3,
    category: "Education",
  },
  {
    id: 12,
    title: "Nature",
    image:
      "https://m.media-amazon.com/images/I/51UV7jk-LlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "First published in 1869, Nature is the world's leading multidisciplinary science journal. Nature publishes the finest peer-reviewed research that drives ...",
    price: 179,
    originalPrize: 349,
    offers: "16% offer",
    rating: 4.8,
    category: "Nature",
  },
  {
    id: 13,
    title: "FINCH",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDkc8v7x4Q-w9VfCug-LnM3_g_M82vVbG1t_zoGZ533ZrIm8M47YkPfN5HyE449_s114&usqp=CAU",
    description: "finich is good batsman and good capitan for austrialia team ",
    price: 190,
    originalPrize: 349,
    offers: "10% offer",
    rating: 4.5,
    category: "Education",
  },
  {
    id: 14,
    title: "BHUVNESHWAR KUMAR",
    image: "https://wallpaper.dog/large/17293202.jpg",
    description:
      "BHUVNESHWAR KUMAR has taken many wicket for team india and he has taken 1st wicket in his 1st ball of the carear",
    price: 195,
    originalPrize: 419,
    offers: "15% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 15,
    title: "Human Nature",
    image:
      "https://m.media-amazon.com/images/I/71fEmwof+BL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      " Human nature is a concept that denotes the fundamental dispositions and characteristics—including ways of thinking",
    price: 130,
    originalPrize: 359,
    offers: "26% offer",
    rating: 4.3,
    category: "Nature",
  },
  {
    id: 16,
    title: "Nature Stories",
    image:
      "https://m.media-amazon.com/images/I/618vEeTqruL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "Nature stories are one of the best stories to tell to your kids during bedtime or while having a walk in the garden. Parents should often take their kids to ...",
    price: 249,
    originalPrize: 369,
    offers: "28% offer",
    rating: 4.2,
    category: "Nature",
  },
  {
    id: 17,
    title: "Amazing Nature",
    image:
      "https://m.media-amazon.com/images/I/81MmYpGZTJL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "on Nature: The Earth we live in abounds with wonders, mysteries and miracles. Out of these, the most spectacular, spontaneous and ...",
    price: 310,
    originalPrize: 624,
    offers: "30% offer",
    rating: 4.3,
    category: "Nature",
  },
  {
    id: 18,
    title: "Tree",
    image:
      "https://m.media-amazon.com/images/I/518xXBLylwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves.",
    price: 320,
    originalPrize: 549,
    offers: "25% offer",
    rating: 4.0,
    category: "Nature",
  },
  {
    id: 19,
    title: "Nature The Only Healer",
    image:
      "https://m.media-amazon.com/images/I/41H1wOzKkjL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "Nature the only Healer delineates the only way that is available to humanity to remain disease-free and live healthy is the natural way. To do so means to .",
    price: 424,
    originalPrize: 749,
    offers: "33% offer",
    rating: 4.1,
    category: "Nature",
  },
  {
    id: 20,
    title: "Learning And Teaching",
    image:
      "https://m.media-amazon.com/images/I/81kqcrPmkEL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Learn2teach. Step by Step guide to Effective Online Teaching. ... Teach to Learn and you may Learn to Teach ...",
    price: 520,
    originalPrize: 739,
    offers: "31% offer",
    rating: 4.7,
    category: "Education",
  },
  {
    id: 21,
    title: "Jadaja",
    image: "https://wallpapercave.com/wp/wp5190695.jpg",
    description:
      "jadaja is a leading wicket taker for india and he is best alrounder for india ",
    price: 229,
    originalPrize: 369,
    offers: "17% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 22,
    title: "Hacking Health",
    image:
      "https://m.media-amazon.com/images/I/71rS9ZMgOoL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Mukesh bansal's book Hacking health is just did wonders in my life. This book includes all health related information the way you can improve your health and ... ",
    price: 1000,
    originalPrize: 1290,
    offers: "65% offer",
    rating: 4.4,
    category: "Education",
  },
  {
    id: 23,
    title: "The One And Only IVan",
    image:
      "https://m.media-amazon.com/images/I/71xDzmky7dL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "The One and Only Ivan is a 2012 novel written by Katherine Applegate and illustrated by Patricia Castelao. It is about a silverback gorilla named Ivan who ",
    price: 1330,
    originalPrize: 1790,
    offers: "75% offer",
    rating: 4.5,
    category: "Nature",
  },
  {
    id: 24,
    title: "Rain Forest",
    image:
      "https://m.media-amazon.com/images/I/41TYg2oqGwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "A rainforest is an area of tall, mostly evergreen trees and a high amount of rainfall. Rainforests are Earth's oldest living ecosystems, with some surviving in ...",
    price: 180,
    originalPrize: 240,
    offers: "13% offer",
    rating: 4.1,
    category: "Nature",
  },
  {
    id: 25,
    title: "Forest Nature",
    image:
      "https://m.media-amazon.com/images/I/7127R-VmyOL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, ...",
    price: 789,
    originalPrize: 880,
    offers: "12% offer",
    rating: 4.4,
    category: "Nature",
  },
];

export default shoes;
