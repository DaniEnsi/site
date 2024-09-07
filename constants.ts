export const DATE_FORMAT: object = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const PLAYLIST_IDS = [
  "0bMTUisUt7pIiGQzguAETA", // 2024
  "7a2g42UzPgZoSvDYrsYY7M", // 2023
  "6jVpWQPYp1FwkZVwfRegha", // 2022
  "5ELpvH94Dq0GuGLiqGVWEM", // 2021
  "0JTXCwse1adXIUppeiJny9", // 2020
  "7Dj8dS13NyO60tl3VRoI5V", // 2019
  "5RiBqFIoVt0VuIl3QdwbWF", // 2018
  "53dkKdbZ5EHilxdOB30i4X", // 2017
];
export const intro = `Hello, moin, servus. I'm Daniel, a web and mobile developer with a passion for machine learning, currently studying Mechanical Engineering at [TUM](https://www.tum.de/en/) in Munich.

Based in Scharbeutz, Germany, I blend coding with engineering, working on projects that span web, mobile, and machine learning domains.

My passion for technology extends beyond my studies. I love to experiment with new technologies and frameworks, always looking for ways to improve and innovate. You can check out some of my projects on [GitHub](https://github.com/daniensi).

I'm always eager to connect on tech and engineering topics. Reach out via [email](mailto:dan@x70.one) or [Twitter](https://twitter.com/daniensi).`;

export const posts = [
  {
    title: "The Art of Scoping",
    slug: "the-art-of-scoping",
    publishedDate: "2023-01-27T00:00:00.000+01:00",
    coverUrl: null,
    coverAlt: null,
    metaDescription: "Scoping software is difficult. In this quick post, I'm outlining an example of scoping done right.",
    tags: ["product design"],
    body: "Scoping software is difficult. Commit too much, and you're wasting time that you could've spent learning from your users. Commit too little and watch nobody adopt your incomplete feature. It's a balancing act -- the difference between an MVP (Minimum Viable Product) and SLC (Simple, Lovable, and Complete).\n\nWhen looking for examples of what makes a great MVP, you usually read about companies that aim to achieve product-market fit. Maybe early Airbnb or Uber. But how does this apply when building features and capabilities for an existing service that's well beyond that point?\n\n---\n\nI recently observed a great example of this kind of scoping done right. A couple months ago, Stripe released [Stripe Apps](//stripe.com/apps). Apps allow developers to extend the UI of the Stripe Dashboard with additional functionality and views.\n\nFrom what I could tell while browsing Twitter, Stripe only took a couple months to launch the first version of Apps. Scoping a complex project like this down to a well-rounded product must've been challenging. Not just in the broad strokes, but I'm sure it required making tough decisions on lots of details along the way.\n\nYet one of those decisions in particular caught my eye. To enable developers to build apps, Stripe had to build an entire [component library](//stripe.com/docs/stripe-apps/components) to support common use cases -- on top of the core functionality. One of the components developers would likely need to build a Stripe app is a date picker, to filter payment-related information by a date range. If you've ever designed or built a date picker, you know what a time-consuming task that can be. Safe to say, it would take a long time to get it right.\n\n![A full date picker, including a popover calendar](//images.ctfassets.net/zgqdqhjfxb5o/sNNqRxG0VOJQqU16Kt6Uv/f65913669705ba1aabdcd417b7025708/full.png)\n\nSo what did they do? Instead of scoping it out of the first release, or building a full-featured date picker with a popover calendar and everything, they launched with a [masked input field](//stripe.com/docs/stripe-apps/components/datefield) for dates. This enabled their users to effectively solve one of the most common use cases when building an app from the beginning. They were able to release it in a short amount of time on par with their quality standards. On top, they kept the option of iterating on it in the future, without breaking any existing behavior.\n\n![A simple masked input field for dates](//images.ctfassets.net/zgqdqhjfxb5o/71W2A07oSJ058JDrFcNagm/bae8436e9b606871ee5f3b5f238a1e0b/scoped.png)\n\nThis low-level, almost invisible decision may seem trivial, but it's one of the hundreds of decisions you have to make when scoping and building software. Finding that sweet spot of not too much, not too little, to get it out on time and in the right quality is the art of scoping."
  },
  {
    title: "Avoiding Font Piracy On Github & Netlify",
    slug: "avoiding-font-piracy-github-netlify",
    publishedDate: "2018-03-05T00:00:00.000+01:00",
    coverUrl: null,
    coverAlt: null,
    metaDescription: "After reading How Github became the web's largest font piracy site (and how to fix it) I was wondering how I can avoid uploading/publishing font files on Github",
    tags: ["webdev"],
    body: "After reading [How Github became the web's largest font piracy site (and how to fix it)](https://pixelambacht.nl/2017/github-font-piracy/) I was wondering how I can avoid uploading/publishing font files on Github, considering that most of my sites are deployed by Netlify and require the complete source to be public.\n\n![Screenshot](https://i.imgur.com/1mU1HfG.png)\n\nAt first I tried to encrypt the fonts using a 7z archive. Unfortunately, 7zip can not be used inside Netlify deploys, so I decided to try and download an archive from a secret, remote location before building the project:\n\n```json\n\"scripts\": {\n  \"build\": \"npm run fonts:fetch && gatsby build\",\n  \"fonts:fetch\": \"wget -O Dia.zip $SECRET_FONTS_URL; unzip Dia.zip -d ./static/fonts; rm Dia.zip\",\n}\n```\n\nI run an NPM Script called fonts:fetch, which will download a zip file from a secret location specified inside an environment variable. This zip file can then be extracted to a desired location.\n\nInside my deploy settings, I can then set that secret URL. Pretty sleek if you ask me!"
  },
  {
    title: "Don't Ship Mediocre",
    slug: "dont-ship-mediocre",
    publishedDate: "2013-11-23T12:00:00.000+02:00",
    coverUrl: null,
    coverAlt: null,
    metaDescription: "I wrote this post about 10 years ago. I wanted to include it as I still very much stand by it. Living by principle and all that.",
    tags: null,
    body: "<Note>\n  I wrote this post about 10 years ago. I wanted to include it as I still very much stand by it. Living by principle and all that.\n</Note>\n\nIn the last couple of weeks, I have made quite a bit of experience when it comes to shipping projects and designs. Today I want to share one of the lessons I've learned from doing that.\n\n> Don't ship mediocre.\n\nExplanation needed?\n\nIf you know that something about your design could be executed better, __then change it__. There is no excuse for not doing it.\n\nI often find myself ignoring bugs or things I could do better: I just want to ship the project and disregard some of the small things – details I could present better; mostly because motivation or time is lacking.\n\nBut finally, as a designer, you always have to try to get the best out of every project, because everything you do represents – and defines you."
  }
];

export const siteSettings = {
  siteTitle: "Daniel Ensminger",
  siteDescription: "Your site description",
  siteUrl: "https://yoursite.com",
  avatarurl: "https://i.vgy.me/TOa8CI.jpg"
};



export const photos = [
      {
        id: "5n03tgJmEdA9cKlKAeUQnV",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/0iZp3DdukpxZ1AzBqm7d6/0cb609ff6e26f97ce53c899287eb01ba/IMG_5818.jpg",
        exif: {
          ISO: "250",
          Make: "Apple",
          Model: "iPhone 14 Pro",
          FNumber: "2.8",
          LensMake: "Apple",
          latitude: "35.088653",
          LensModel: "iPhone 14 Pro back triple camera 9mm f/2.8",
          longitude: "135.762847",
          FocalLength: "9",
          GPSLatitude: [
            "35",
            "5.31918",
            "0"
          ],
          ExposureTime: "0.016666666666666666",
          GPSLongitude: [
            "135",
            "45.77082",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2023-11-24T12:02:49.000Z",
          FocalLengthIn35mmFormat: "77"
        },
        description: "Doing the work",
        width: "3024",
        height: "4032"
      },
      {
        id: "1skOms8yGlVbxWWVyevG2M",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/aTTPu6WnWMKFtTnFv5lMv/80507b67d82f9c7b1360399e096649b8/IMG_5157-2.jpg",
        exif: {
          ISO: "64",
          Make: "Apple",
          Model: "iPhone 14 Pro",
          FNumber: "1.8",
          LensMake: "Apple",
          latitude: "34.535992",
          LensModel: "iPhone 14 Pro back triple camera 6.86mm f/1.78",
          longitude: "135.907119",
          FocalLength: "6.86",
          GPSLatitude: [
            "34",
            "32.15952",
            "0"
          ],
          ExposureTime: "0.0003333333333333333",
          GPSLongitude: [
            "135",
            "54.42714",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2023-11-21T12:27:45.000Z",
          FocalLengthIn35mmFormat: "48"
        },
        description: "Hasedera",
        width: "3024",
        height: "4032"
      },
      {
        id: "1IpAuzOgHjQ89pGGU6Rdpj",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/1KfKsPLs26lOJATZe60ht6/03c50b575084479f279ea7acfaf6b1f8/DSCF0359.jpg",
        exif: {
          ISO: "160",
          Make: "FUJIFILM",
          Model: "X-T30 II",
          FNumber: "2.8",
          LensMake: "FUJIFILM",
          LensModel: "XF27mmF2.8 R WR",
          FocalLength: "27",
          ExposureTime: "0.000625",
          DateTimeOriginal: "2024-02-16T12:16:02.000Z",
          FocalLengthIn35mmFormat: "41"
        },
        description: "Jordans",
        width: "6240",
        height: "4160"
      },
      {
        id: "1gpUGuGMDLrxel0JMELdYD",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/5hBhHISUMz4sLLA9lvMQWr/cb20f8540117fd9f1257a325cbecfbc5/IMG_4964.jpg",
        exif: {
          ISO: "640",
          Make: "Apple",
          Model: "iPhone 14 Pro",
          FNumber: "1.8",
          LensMake: "Apple",
          latitude: "34.682261",
          LensModel: "iPhone 14 Pro back camera 6.86mm f/1.78",
          longitude: "135.830411",
          FocalLength: "6.86",
          GPSLatitude: [
            "34",
            "40.93566",
            "0"
          ],
          ExposureTime: "0.03333333333333333",
          GPSLongitude: [
            "135",
            "49.82466",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2023-11-20T16:11:34.000Z",
          FocalLengthIn35mmFormat: "24"
        },
        description: "Nara 003",
        width: "5614",
        height: "7485"
      },
      {
        id: "1rPU8elyBQYnsvdM2flV1A",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/1UVKtN4TWz09MqC7QrOl8K/f4739b1c8787149c619c53c57a80257d/DSCF0309.jpg",
        exif: {
          ISO: "12800",
          Make: "FUJIFILM",
          Model: "X-T30 II",
          FNumber: "2.8",
          LensMake: "FUJIFILM",
          LensModel: "XF27mmF2.8 R WR",
          FocalLength: "27",
          ExposureTime: "0.00025",
          DateTimeOriginal: "2024-02-15T10:07:45.000Z",
          FocalLengthIn35mmFormat: "41"
        },
        description: "Dexter 001",
        width: "4160",
        height: "6240"
      },
      {
        id: "38CafBdRty6jUoindP0Dkp",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/6vW45y7zvBsAvgH302N7VN/84fde96c3d9520cfec0767e742298f8b/IMG_5439.jpg",
        exif: {
          ISO: "50",
          Make: "Apple",
          Model: "iPhone 14 Pro",
          FNumber: "2.8",
          LensMake: "Apple",
          latitude: "34.682072",
          LensModel: "iPhone 14 Pro back dual camera 9mm f/2.8",
          longitude: "135.843444",
          FocalLength: "9",
          GPSLatitude: [
            "34",
            "40.92432",
            "0"
          ],
          ExposureTime: "0.008333333333333333",
          GPSLongitude: [
            "135",
            "50.60664",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2023-11-23T08:27:21.000Z",
          FocalLengthIn35mmFormat: "77"
        },
        description: "Nara 001",
        width: "3024",
        height: "4032"
      },
      {
        id: "6i6LfAz8P4RwuG9lQ91S5R",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/3ZThoChgk6gSUetAgmBRJN/24edf1ca40757200b841f305aefb7397/DSCF0207-Enhanced-NR.jpg",
        exif: {
          ISO: "1250",
          Make: "FUJIFILM",
          Model: "X-T30 II",
          FNumber: "2",
          latitude: "50.423642",
          LensModel: "21.0 mm",
          longitude: "9.204566",
          FocalLength: "12",
          GPSLatitude: [
            "50",
            "25.41852",
            "0"
          ],
          ExposureTime: "25",
          GPSLongitude: [
            "9",
            "12.27396",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2024-02-12T20:28:55.000Z",
          FocalLengthIn35mmFormat: "18"
        },
        description: "Astro 002",
        width: "6240",
        height: "4160"
      },
      {
        id: "3vPiqhHVW9xShXHJdEoqhO",
        url: "https://images.ctfassets.net/zgqdqhjfxb5o/1wcqnv3cTs3dRs2UGjfFPE/5099b95f413022c608386d90d002bb0b/IMG_6690.jpg",
        exif: {
          ISO: "32",
          Make: "Apple",
          Model: "iPhone 14 Pro",
          FNumber: "2.8",
          LensMake: "Apple",
          latitude: "35.200489",
          LensModel: "iPhone 14 Pro back camera 9mm f/2.8",
          longitude: "139.030247",
          FocalLength: "9",
          GPSLatitude: [
            "35",
            "12.02934",
            "0"
          ],
          ExposureTime: "0.0013333333333333333",
          GPSLongitude: [
            "139",
            "1.81482",
            "0"
          ],
          GPSLatitudeRef: "N",
          GPSLongitudeRef: "E",
          DateTimeOriginal: "2023-11-27T12:31:36.000Z",
          FocalLengthIn35mmFormat: "77"
        },
        description: "Fuji x Torii",
        width: "4032",
        height: "3024"
      }
    ]