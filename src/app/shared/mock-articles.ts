import { Article, STATUS } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Feeling at Home: Between Human and AI', 
    slug: 'feeling-at-home-between-human-and-ai', 
    body: 'I’m waiting, eyes glued to the dark room on my screen, headphones in my ears, listening for the sound of him. I hear a knock. I scramble to toggle the lock switch and type out a message to him, knowing every second I take adds to the delay between us. I hear the buzz of the door unlocking.', 
    category: 2,
    author: 'Admin',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 2,
    title: 'The Radical Honesty of Vanity', 
    slug: 'the-radical-honesty-of-vanity', 
    body: 'Thus, a lie is wrong, because its effect is to mislead, and because it tends to destroy the confidence of man in man; it is also mean, because it is cowardly — because it proceeds from not daring to face the consequences of telling the truth…',
    category: 4, 
    author: 'James Harden',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 3,
    title: 'Why do all Pixar movies have the same story?', 
    slug: 'why-do-all-pixar-movies-have-the-same-story', 
    body: 'Last weekend, I took my son to the cinema. It was a gesture to make me feel like a good father, albeit one £40 less rich by the time tickets and treats were bought.', 
    category: 4,
    author: 'James Harden',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 4,
    title: 'Style on Demand', 
    slug: 'style-on-demand', 
    body: 'The world of print-on-demand fashion has revolutionized the side hustle and merchandising game for many entrepreneurs. There is no risk in launching a new T-shirt design in your store because there is no preprinting and inventory required.', 
    category: 3, 
    author: 'Lauren Mccarthy',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 5,
    title: 'What Happens to Farming When Water Is 10x More Expensive & Labor Is Scarce?', 
    slug: 'what-happens-to-farming-when-water-is-10x-more-expensive-labor-is-scarce', 
    body: 'I haven’t written much about Homebrew’s investments in the agriculture space but there are two of note, and both are based on beliefs which might be controversial to some.',
    category: 3, 
    author: 'Admin',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 6,
    title: 'First Class', 
    slug: 'first-class',
    body: 'Last winter, midway through my hourlong commute into Midtown', 
    category: 4, 
    author: 'James Harden',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 7,
    title: 'Mapping Global Travel Time to Urban Resources', 
    slug: 'mapping-global-travel-time-to-urban-resources', 
    body: 'How long does it take you to travel to the nearest major city? What if you live far from even the nearest road? The answer to these questions will determine how easily you can access the many resources that a major city provides, from emergency health services to economic markets.', 
    category: 1, 
    author: 'Matt Hancher',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 8,
    title: 'The Imaginative Powers of a Brain on Autopilot', 
    slug: 'the-imaginative-powers-of-a-brain-on-autopilot', 
    body: 'You’re in the shower, or you’re brushing your teeth, or you’re blow-drying your hair. Suddenly, brilliance strikes: You come up with the perfect idea', 
    category: 2, 
    author: 'Lauren Mccarthy',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 9,
    title: '10 Things I Learned from an Artist’s Heart to Heart', 
    slug: '10-things-i-learned-from-an-artists-heart-to-heart', 
    body: 'Last week I wrote about the Japanese philosophy wabi-sabi, and how I try to keep those ideals in mind when I draw. I described my personal wabi-sabi art philosophy as', 
    category: 1, 
    author: 'Matt Hancher',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 10,
    title: 'Writing, Lying, and the Art of Crafting a Better Story', 
    slug: 'writing-lying-and-the-art-of-crafting-a-better-story', 
    body: 'The sun has gone down. The dog is hungry. So are you, but you don’t notice. You’ve lost all concept of time because you’re completely focused on what you’re doing. Just one more paragraph, you tell yourself. Another ten', 
    category: 2, 
    author: 'James Harden',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 11,
    title: 'Android App Ideas: How to Dominate Google Play', 
    slug: 'android-app-ideas-how-to-dominate-google-play', 
    body: 'Coming up with an app idea is just the beginning. But what about what comes after? How do you know if your idea has potential to scale, or if there’s a sizable number of users who encounter the problems that you’re trying to solve?', 
    category: 3, 
    author: 'Lauren Mccarthy',
    status: STATUS.draft,
    created: Date.now()
  },
  {
    id: 12,
    title: 'What exactly is an entrepreneur?', 
    slug: 'what-exactly-is-an-entrepreneur', 
    body: 'Entrepreneurs are everybody’s favourite heroes. Politicians want to clone them. Popular television programmes such as “The Apprentice” and “Dragons’ Den” lionise them. School textbooks praise them. When the author of this blog was at Oxford “entrepreneur” was a dirty word. Today the ', 
    category: 3, 
    author: 'Admin',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 13,
    title: 'Fighting Mortality With Glittery Shit', 
    slug: 'fighting-mortality-with-glittery-shit', 
    body: 'Whenever I find myself existentially despairing and also nursing a self-inflicted emotional wound — which is often — I like to curl up with Melissa Broder’s poetry book, The Last Sext. It accompanies a box of Easy Mac and Tove Lo’s new album to create the perfect atmosphere of “fuck-the-patriarchy, death-is-imminent, someone-please-text-me-back, no-not-you, new-makeup-will-heal-me” on a Friday night.', 
    category: 4, 
    author: 'Matt Hancher',
    status: STATUS.published,
    created: Date.now()
  },
  {
    id: 14,
    title: 'What a Little-Known Ursula K. Le Guin Essay Taught Me About Being a Woman', 
    slug: 'what-a-little-known-ursula-k-le-guin-essay-taught-me-about-being-a-woman', 
    body: 'discovered Ursula K. Le Guin quite by accident — on the library shelf, but not in the science fiction section. I was browsing the literary journals, which were stood up like little jewels in the entranceway of the library at Willamette University in Salem, Oregon.', 
    category: 4, 
    author: 'Matt Hancher',
    status: STATUS.published,
    created: Date.now()
  },
];