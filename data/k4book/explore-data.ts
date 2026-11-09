import {
  ExploreBook,
  NewReleaseBook,
  CuratedBoxSet,
  ReadingClubSpotlight,
} from "@/types/k4book";

export const exploreCategories = [
  { id: "all", label: "✨ All Hits", count: 148 },
  { id: "fantasy", label: "Fantasy & Sci-Fi" },
  { id: "mystery", label: "Mystery & Thriller" },
  { id: "history", label: "Historical Fiction" },
  { id: "self-dev", label: "Self Development" },
  { id: "classics", label: "Literary Classics" },
  { id: "romance", label: "Romance" },
  { id: "poetry", label: "Poetry" },
  { id: "philosophy", label: "Philosophy" },
] as const;

export const explorePopularBooks: ExploreBook[] = [
  {
    id: "notw",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmqUPuQT3oDPxR1XZ_whi3hBuCZVD_RGNJp-mngxciP6jS0UGXih0oIXG6A1GlbkU2-tlZczFqO6GQMywBdaX72n-wlsDLTnLSSbSQ5xeR_b96uwc64GOTsLWDTxKNniozuBdeCp-bn-Dv_AdKN965K4jRNoLxGApzwD1jW9CHdhrv9mSQPZFo8NWymwaDBD-4CJopGqDE6LVG5nyOuXbMbVnrU4cKUbg9a413kgFM",
    rating: 4.9,
    genre: "Epic Fantasy",
    genreCategory: "fantasy",
    pages: 662,
    previewSnippet:
      "My name is Kvothe, pronounced nearly the same as 'quothe.' Names are important as they tell you a great deal about a person...",
  },
  {
    id: "wok",
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz2CKP6yUIQnHsHR2EDusezB58BjMLitvsqumvnBJh4kO8QVklVuUGtHLio-95uG7SJJ8nF1DlEEWX5tDhCVSFFOz7b8LA6jTfCAYzT2SdI0TUkg42KXfutBvaHnINuamCkTWwkQNn0r3bj66ULOgfz8VLOgHHApiJWnEIO8ayz5D0P9YWBqjQZwk5Rob2bUnCtL5uQMdmehQdkOOePZ5yNIxvw4SwdN1dVmO6h6TJ",
    rating: 4.9,
    genre: "High Fantasy",
    genreCategory: "fantasy",
    pages: 1007,
    previewSnippet:
      "Szeth-son-son-Vallano, Truthless of Shinovar, wore white on the day he was to kill a king...",
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPaK_F51CsgZLGv56agbpJywTQELVTty0w9tZB9iSciRnvHeTxa5MpSOeB5gB5FTR2lfLjajhsi2OFVem2VHDR-opKFyXCtOwM8ARp9QMWbQj72zE_5wPJM03aKwmQGFdXXchzXsSPKYPclPsas2GmH8wUjCHjGXLXhqXMndaeCAnHj-xZ3N7L-tsqs6T5R_7SY5R9nyj-To_YGGd4plf1p6OT1NDUMVK-Vup3ypEq",
    rating: 4.8,
    genre: "Science Fiction",
    genreCategory: "fantasy",
    pages: 688,
    previewSnippet:
      "A beginning is the time for taking the most delicate care that the balances are correct...",
  },
  {
    id: "got",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZS4-Kpy98CkxuuPbvZ8VQJYWTAouMppPIsyUcd84buFs-GOEiR38cC-GYI-bOkiaUMWmqPRlVfXSTF0r739RWW7dyDaMPoWthI_sQm35zcVIZ4iLfeXP9JhrVAk5t-akSLeadL3codY6Fs-PoHtmgGYEOB-UbCnWPlnBf4-KO41KjgLKrTI3b9nKW81r--UJiX9hQBG01ySfxZ1tQAYnPKtg6eod5krizYbBHHMBR",
    rating: 4.9,
    genre: "Dark Fantasy",
    genreCategory: "fantasy",
    pages: 835,
    previewSnippet:
      "We should start back, Gared urged as the woods began to grow dark around them. The wildlings are dead...",
  },
  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm3Y0hdFQj3-g5JdTboJjgso6t4myfrEirxYdMLQf6q29O5suKbrIfPbt2nxNlYaC_K8SWhU0DMgruAeXzE8a-EZXtRh0e2RD04kcTWGyX9OslZfNrIuBb6Aa5T5NEZNJkOHiT8re4lpXjGNsJ3qHIZzSH1NT2QgFJtmEhLNvsd0LkFOhXUHIAHzIHAlH729qVqaYomOQNJogLz8PTtP5ZAnY-G0q_lNOkpGTMVeZL",
    rating: 4.7,
    genre: "Mythology",
    genreCategory: "classics",
    pages: 393,
    previewSnippet:
      "When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother...",
  },
];

export const newReleasesBooks: NewReleaseBook[] = [
  {
    id: "ice-horse",
    title: "The Ice Horse: A Legend of Fire",
    author: "George R.R. Martin",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtweT8Sa9A5UBOsECfTwylqO8hrgCEQ54wbMZhnHyaRb90My17vIzdjsi6yJq472t3Vdkdv2Dgv5ThkIPrShNqGTqR8c_OeSfSTfoRkxcfo0naNmPwNi3bi5SPGiutCzd8Qtj0c-T9uX3PH971ZqdpbmEAOp8HJMHNZ-zJ3fyFhN_t4P_hRrPJ28LWqQbbZXrxDrRp6VU-_axVoNeA6FZCHcSmVhEqmvm1-ynGjYzf",
    badgeText: "Just Added",
    badgeVariant: "primary",
    editionInfo: "Vol. II Released",
    description:
      "An enchanting, winter-bound tale of a brave young girl, a mythical ice creature, and an impending fiery invasion.",
    estimatedHours: 4,
    genreCategory: "fantasy",
  },
  {
    id: "babel",
    title: "Babel: An Arcane History",
    author: "R.F. Kuang",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACqtXaeTtPcYMR0xsOGrmN1c9AMhIpWjulSln8WFU7NM81HTQLmO3pzY0O07MUDNLhjDrVQGE_XTwyKEqpdhpI6a_CvE-Fo6MQVtxyI7Bg5dkWMNSVPRu5B_K1gSdCP0Kng_ftdX3nWhHYXxh95Uu8vBm37wPjOSFLNl97HazO47GPDPNA6DE18KUl4x-KHHs-UxJ0lkDR0j90nNqkgoEkUgnua_qNU5hsl9fhGPe2",
    badgeText: "Bestseller",
    badgeVariant: "surface",
    editionInfo: "544 pages",
    description:
      "A dark academic inquiry into the magic of language, translation, imperial resistance, and student revolution in Victorian England.",
    estimatedHours: 9,
    genreCategory: "history",
  },
  {
    id: "tomorrow",
    title: "Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDf2exSJR3lKlmLHLsVV_QIUbBAp2m8MOB2LLQwhdTPNQA_w_CEdYyYWWN7kwVu0sq4ZjZDd5ChVEYeAlMeVXTrOIcmhMoGG2ng7gcohHQ-EFh_LT4JJxnTUdaUwwpM3ssEW8J-spmMXdn4Lgwf86DdHyaOUufsn601Veawq_AVXs7WQGNY7psMoFNg6Oma1ypmgLmwZx1jMVnWnhTkrac4aIyxjJnM-zgOX6fyR9q4",
    badgeText: "Editor's Pick",
    badgeVariant: "tertiary",
    editionInfo: "416 pages",
    description:
      "Two childhood friends collaborate as video game designers, navigating fame, identity, creative brilliance, and enduring love.",
    estimatedHours: 6,
    genreCategory: "romance",
  },
  {
    id: "atlas-six",
    title: "The Atlas Six",
    author: "Olivie Blake",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBCCSu_34_CvggDIPN3wrSL8-jRE5ruv7VPwjM4n7uzHjhLkd1m-BvrT1CJCgelmyIa5N6w-KjftqgBL_9hftE0ww_HTrl3Gxz9-WCwnLAbegSKXaTK0nTFDmpk4klk5pxZgCfYIGToAvu-lrqTrK2gU_RCZvK8yYVl7XVT_foJ7NW7zuymz4qpNZzjdgzDbYVaRu3Mnae7tdc5aJolSwn59oEenLUawRQGZYEVkJU",
    badgeText: "Just Added",
    badgeVariant: "primary",
    editionInfo: "384 pages",
    description:
      "The Alexandrian Society recruits six extraordinary magicians every decade. Only five will survive the initiation.",
    estimatedHours: 7,
    genreCategory: "fantasy",
  },
];

export const curatedBoxSets: CuratedBoxSet[] = [
  {
    id: "box-kingkiller",
    title: "The Kingkiller Chronicle",
    author: "Patrick Rothfuss",
    tag: "Complete Trilogy",
    featureBadge: {
      icon: "headphones",
      label: "Audio",
    },
    volumes: [
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD90IGfro55TVGkqu9qzrh1Y_PMnMlmOZb7JnTYt-rbbrKD19uSv4ktNGU59yxKZEpdhcZaIH0D3ESBu39eobcmI6ws6_2A6k-BxEvmW71bIRBwnDoOEb_LWXiFl5O84f6ico8rMJ7QM6xGw9kgV-y6Lxvs0OUoek5qD3uOiu9-l76atACExZRshNB7T9hStR63k5dq5fvOQKYEdYfyczcg4Jj6eX_7TTHjvHH3KVm7",
        alt: "Volume 1",
      },
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAIK5zRXB6pImGIonnO2ic1POkGCXdXPqHz8UMrGwbhcmyuSAe66VpQyt4YX18hsT0_AEih7FL8SnUjIXROOeMjcZMndMz3leisPIrfoUjF8XLKQuWiVo8or-fEZY-9WbhpShcWzjre-p_nGOKSZCWiJbLeC_d9xoHdc3iTG4JRQffpHHU4eINSRvIcvAECENj83N5q03Trlq2RJS6wexgLABydF7nzG0j6wanRQ4rd",
        alt: "Volume 2",
      },
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuChtIsF0kXj6pisl38OfO13HnYRX4I9fm211ueffM19_lYgrh3aGV2XP5nGhnSC2O8o5zIyWiSPqs5Cjkbsck--uSoKu2GtOTbN6IGZLwhTDSRmk1dZ8TFBYZbawCqK4-a1Hkc4mTzZYPANN3DMpy5OVH7hbpShNu6fBhIM2VBbQxZrVLvIHdog4wi8e_hWUTpNPqMhXp6zWo00ZF9jcU-haGxLcH0Sy3vHpa1wjvh5",
        alt: "Volume 3",
      },
    ],
    activeReadersCount: "5.2k",
    totalVolumesText: "Explore 3 Volumes →",
  },
  {
    id: "box-stormlight",
    title: "The Stormlight Archive",
    author: "Brandon Sanderson",
    tag: "The Cosmere Epic",
    featureBadge: {
      icon: "auto_stories",
      label: "Illustrated",
    },
    volumes: [
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB3-972bAyLe8K1xLYb9JCcvSI4eg4E5bi5DNqyoWuori_o6ruc6pC4Sg7jHLue-JfEcRNAHYK-txDCUJRWD8sfxBbvzAkUWomi_KLNGVa-uoiLHS-zDa9fBoLbXlkuOgy8obi8oXJ8FdfydDZqaY5zzahKIPmZhcWyJ3C6_ykz3_lLteCsA5HrdyWcbLcH1WCBNxSkNO8J6aR7EDnFzqm5aGMwCDfpJHT7fN7kgl0r",
        alt: "Volume 1",
      },
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJwEeuVs7qbLj7b74D37g18pH0Ry6XWS1WRgidkm29Jsf-gqqdOitYVFR--2o4ELpxokI522vJsBGSc_1G3KejdddSMxgrD0z9oSXvSz9aqg1jsM4bh_W-b1raxrOAAroBF45yYF80s3qwgxvpuJqPqk-5TBjeIIbUc-WT4JJtbzITkC8FwExkDJ2dmfVgcpwY77WWKxsgSGtDkFN5SgX_fi8NMJpT5R-USZEKfRF",
        alt: "Volume 2",
      },
      {
        coverImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCan479LFd_bjMxv9NjLC73e4M1BbXd5R0yBgTt0TRiTlKAvJXf76q-udeee8KUnFlE2DNmj9VqYplPsXleV1Afi6s46yNvcTwMq4AnKLuyTeyieOJ1uwDALQnqRDJaAMuJQJ3W5o51e6vZZ4it4vDNXTWfk68ZIFYrnwxP6q21iS0oe-ukYd2DYXa5K8Q1ACJ7ekwXB1-cpR2JzPrYh_kV01ChhpBRc8nABCSFgeuI",
        alt: "Volume 3",
      },
    ],
    activeReadersCount: "8.9k",
    totalVolumesText: "Explore 4 Volumes →",
  },
];

export const clubSpotlight: ReadingClubSpotlight = {
  id: "club-wizarding",
  title: "The Wizarding Legacy",
  description:
    "Read alongside 14,000 members this month with synchronized chapter discussions and exclusive marginalia annotations.",
  progressPercent: 72,
  currentChapter: "Chapter 18",
  newNotesCount: "340 new notes today",
};

