/* =====================================================================
   🌻 THE ONE FILE YOU EDIT 🌻
   Everything on the shelf, the writing list, and the little notes on the
   homepage comes from here. Change the text between the quotes, save,
   push to GitHub, done.

   The films / books / music / poets below are STARTER PICKS based on the
   kind of stuff you said you love. Swap them for your real favourites!
   ===================================================================== */

window.SITE = {

  /* ---- little homepage notes ---- */
  currentlyReading: "The Kite Runner (with chai, obviously)",
  onRepeat: "Phoebe Bridgers, on loop since November",
  links: {
    linkedin: "https://www.linkedin.com/",   // ← put your profile link
    email: "",                                // ← e.g. "hello@yourmail.com" (leave "" to hide)
    instagram: ""                             // ← optional, leave "" to hide
  },

  /* ---- WRITING ----
     kind: "essay" | "review" | "poem"
     url:  the file inside the posts/ folder (copy posts/_template.html to start a new one) */
  posts: [
    {
      title: "hi, welcome in",
      kind: "essay",
      date: "15 Nov 2026",
      blurb: "the first post on a brand-new corner of the internet. grab a chai, sit wherever.",
      url: "posts/welcome.html"
    }
    // , { title: "...", kind: "poem", date: "...", blurb: "...", url: "posts/my-poem.html" }
  ],

  /* ---- THE SHELF ---- */
  films: [
    { title: "10 Things I Hate About You", year: "1999", note: "my forever comfort movie. the poem scene gets me every time." },
    { title: "Before Sunrise",  year: "1995", note: "two strangers, one night, all the talking in the world." },
    { title: "Dil Chahta Hai",  year: "2001", note: "friendship, Goa, and growing up without noticing." },
    { title: "Piku",            year: "2015", note: "families, road trips, and very loud love." },
    { title: "Lady Bird",       year: "2017", note: "for every girl who couldn't wait to leave home, and then missed it." },
    { title: "Little Women",    year: "2019", note: "sisters, writing, and choosing your own life." }
  ],

  books: [
    { title: "The Kite Runner",      author: "Khaled Hosseini",    note: "read it with chai, cried anyway.",                 color: "#e9c862", h: 240 },
    { title: "Normal People",        author: "Sally Rooney",       note: "the way it gets the quiet parts right.",           color: "#a9b99a", h: 230 },
    { title: "Pride and Prejudice",  author: "Jane Austen",        note: "comfort read. the banter never gets old.",         color: "#f6e7a1", h: 250 },
    { title: "Norwegian Wood",       author: "Haruki Murakami",    note: "a winter of a book.",                               color: "#d8c29d", h: 215 },
    { title: "Jane Eyre",            author: "Charlotte Brontë",   note: "\"I am no bird.\" enough said.",                   color: "#dfe6d3", h: 245 },
    { title: "Anna Karenina",        author: "Leo Tolstoy",        note: "long, devastating, worth every page.",              color: "#c9d4bb", h: 265 },
    { title: "The Great Gatsby",     author: "F. Scott Fitzgerald",note: "green lights and the ache of wanting.",             color: "#d8c29d", h: 200 },
    { title: "Intermezzo",           author: "Sally Rooney",       note: "grief, brothers, and loving people badly.",         color: "#b8c6a8", h: 235 }
  ],

  music: [
    { title: "Phoebe Bridgers",  sub: "for 2am thoughts" },
    { title: "Taylor Swift",     sub: "folklore & evermore, on winter loop" },
    { title: "Kishore Kumar",    sub: "for chai on the balcony" },
    { title: "R.D. Burman",      sub: "old-film magic" },
    { title: "Hozier",           sub: "for long walks in the cold" },
    { title: "Lata Mangeshkar",  sub: "mummy's playlist, now mine" }
  ],

  poets: [
    { name: "Mirza Ghalib",   note: "every sher is a whole life in two lines." },
    { name: "Faiz Ahmad Faiz",note: "love and revolution in the same breath." },
    { name: "Gulzar",         note: "makes the moon sound like an old friend." },
    { name: "Amrita Pritam",  note: "fierce, tender, unforgettable." },
    { name: "Sarah Kay",      note: "the spoken-word poet who made me want to perform." },
    { name: "Rudy Francisco", note: "slam poetry that lands like a hug." }
  ],

  /* ---- shers on the homepage card (click it to flip to the next one) ----
     these are classical (public-domain), add your favourites! */
  shers: [
    {
      deva: "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले\nबहुत निकले मिरे अरमान लेकिन फिर भी कम निकले",
      roman: "hazaaron khwahishen aisi ki har khwahish pe dam nikle / bahut nikle mere armaan lekin phir bhi kam nikle",
      poet: "Ghalib"
    },
    {
      deva: "दिल-ए-नादाँ तुझे हुआ क्या है\nआख़िर इस दर्द की दवा क्या है",
      roman: "dil-e-nadaan tujhe hua kya hai / aakhir is dard ki dawa kya hai",
      poet: "Ghalib"
    },
    {
      deva: "पत्ता पत्ता बूटा बूटा हाल हमारा जाने है\nजाने न जाने गुल ही न जाने बाग़ तो सारा जाने है",
      roman: "patta patta boota boota haal hamara jaane hai / jaane na jaane gul hi na jaane baagh to saara jaane hai",
      poet: "Mir Taqi Mir"
    }
  ]
};
