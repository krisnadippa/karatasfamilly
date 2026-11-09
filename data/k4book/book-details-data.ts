import { BookDetail } from "@/types/k4book";

export const defaultBookDetail: BookDetail = {
  id: "half-blood-prince",
  title: "Harry Potter: Half Blood Prince",
  subtitle: "And The Half-Blood Prince",
  author: "JK Rowling",
  bookNumber: 6,
  synopsis:
    "Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.",
  descriptionParagraphs: [
    "The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry, where he discovers more about Lord Voldemort's past and the prophecy that foretells his defeat.",
    "With action-packed sequences, shocking twists, and moments of heart-wrenching tragedy, \"Half-Blood Prince\" is a must-read for any fan of the Harry Potter series.",
  ],
  editors: "J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg",
  language: "Standard English (USA & UK)",
  paperbackSpecs: {
    details: "paper textured, full colour",
    pages: 345,
    isbn: "987 3 32564 455 B",
  },
  highlightReview: {
    reviewerName: "Roberto Jordan",
    reviewerAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Sgjxva07arzLBX068n7PJJMfn_Of3l6jwwQLDHm6EsDT3k3KxpQVQ-YwYSF4sLrU7idXzT17ksrBxDtXNRbZ4RZWveZhKglmrtOOBezYFoaRvJHCvHt_TxRkOT-41fJ5T09vBd7d7REFBBOyTeaBuh4SR761eTgxR8Fch4DK91qdcAunPE3uaMuiTDad7Nxf905k_qr5mVbX1km0f4-gH2ErOYpJh0Np6OQamT2a",
    quote:
      "What a delightful and magical book it is! It indeed transports readers to the wizarding world.",
  },
  ratingsSummary: {
    average: 4.8,
    totalRatings: 12450,
    totalReviews: 1820,
    distribution: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],
  },
  reviews: [
    {
      id: "rev-1",
      reviewerName: "Eleanor Vance",
      reviewerAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0WTe39SHFBJKv-hLFTIJRhFjfAHI4zY0GSKrwNaYNfOddUoJUnWjXptEvx_-VyZQOGT8X_mvV5aTbV9LdN3FEAaeQxfEKwWDcNE8FJ2JMTk1IIyrnhPoMU0GGchsI_6f5ahm59SOMo5WOmg4anFFF8vA-BmH3DNIp_gy729BQyiDfpgT1TxoXZttGS5w3pMrlAQ7D8BJchUuaGxePt5IAJRD05lIji12jCcN_bECA",
      reviewerRole: "Pembaca Terverifikasi",
      isVerified: true,
      date: "14 Oktober 2023",
      format: "Format Fisik Hardcover",
      rating: 5,
      content:
        "Buku keenam ini bagi saya adalah puncak eksplorasi kedalaman psikologis karakter Tom Riddle. Rowling merajut masa lalu Voldemort melalui ingatan Pensieve dengan begitu elegan, mencekam, dan menyayat hati. Tragedi di Menara Astronomi tetap menjadi salah satu momen sastra fantasi paling berkesan.",
      quote:
        "\"It is the unknown we fear when we look upon death and darkness, nothing more.\" — Albus Dumbledore",
      helpfulCount: 142,
    },
    {
      id: "rev-2",
      reviewerName: "Julian Hayes",
      reviewerAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Sgjxva07arzLBX068n7PJJMfn_Of3l6jwwQLDHm6EsDT3k3KxpQVQ-YwYSF4sLrU7idXzT17ksrBxDtXNRbZ4RZWveZhKglmrtOOBezYFoaRvJHCvHt_TxRkOT-41fJ5T09vBd7d7REFBBOyTeaBuh4SR761eTgxR8Fch4DK91qdcAunPE3uaMuiTDad7Nxf905k_qr5mVbX1km0f4-gH2ErOYpJh0Np6OQamT2a",
      reviewerRole: "Kolektor Buku",
      isVerified: false,
      date: "29 September 2023",
      format: "E-Book Reader",
      rating: 4,
      content:
        "Dinamika antara buku ramuan milik Sang Pangeran Berdarah Campuran dan Harry sangat adiktif. Sifat buku ini terasa lebih dewasa daripada seri-seri sebelumnya, dengan sentuhan romansa remaja Hogwarts yang memberi jeda manis di tengah kegelapan yang kian mendekat.",
      helpfulCount: 88,
    },
    {
      id: "rev-3",
      reviewerName: "Maya Dewi",
      reviewerInitials: "MD",
      reviewerRole: "Spoiler Ringan",
      isVerified: false,
      date: "12 Agustus 2023",
      format: "Ulasan Populer",
      rating: 5,
      content:
        "Perjalanan Harry dan Dumbledore ke gua Horcrux menghadirkan sensasi dingin dan merinding tiada tara. Buku yang menyingkap tabir kegelapan masa lalu dan membentuk panggung yang sempurna bagi klimaks Relikui Kematian.",
      quote:
        "\"Dumbledore's betrayal felt impossible, until the truth began to peel away.\"",
      helpfulCount: 63,
    },
  ],
};

export const allBookDetails: Record<string, BookDetail> = {
  "half-blood-prince": defaultBookDetail,
  "harry-potter-6": defaultBookDetail,
};

export function getBookDetailById(id: string): BookDetail {
  return allBookDetails[id] || defaultBookDetail;
}

