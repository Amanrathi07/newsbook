import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class newsbox extends Component {

  articles = [
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Lucia Mutikani",
      "title": "US job growth misses expectations in August - Reuters",
      "description": "Labor market momentum is slowing, with the closely watched employment report also showing the economy added 86,000 fewer jobs in June and July than previously reported.",
      "url": "https://www.reuters.com/markets/us/us-job-growth-misses-expectations-august-unemployment-rate-slips-42-2024-09-06/",
      "urlToImage": "https://www.reuters.com/resizer/v2/52J72RXTFNKQXEGEULRPIRHNAM.jpg?auth=335823f74151477f9774f40b5006291a9b4ea0d2b7a58a515a6edf5b883144ab&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-09-06T14:15:00Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Ann Saphir",
      "title": "Fed might deliver upsized rate cut as US job growth cools - Reuters",
      "description": "Federal Reserve policymakers got a green light to start a round of interest rate cuts this month after a government report on Friday showed U.S. employers added far fewer workers than economists had expected in August and July.",
      "url": "https://www.reuters.com/markets/rates-bonds/fed-seen-delivering-upsized-rate-cut-us-job-growth-cools-2024-09-06/",
      "urlToImage": "https://www.reuters.com/resizer/v2/52LE33EE6FKZVNSAQOLC6RIH7E.jpg?auth=7dd647e25999f469fded5bc9c421c9f51aa6d0372eb3768d82eb20ae4e14b1c3&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-09-06T13:49:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Thomson Reuters StreetEvents",
      "title": "Q3 2024 Broadcom Inc Earnings Call - Yahoo Finance",
      "description": "Q3 2024 Broadcom Inc Earnings Call",
      "url": "https://finance.yahoo.com/news/q3-2024-broadcom-inc-earnings-134554046.html",
      "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
      "publishedAt": "2024-09-06T13:45:54Z",
      "content": "Participants\r\nHock Tan; President, Chief Executive Officer, Director; Broadcom Inc\r\nKirsten Spears; Chief Financial Officer, Chief Accounting Officer; Broadcom Inc\r\nVivek Arya; Analyst; BofA Global R… [+39700 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Newyorkfed.org"
      },
      "author": null,
      "title": "‘E’ Is for Equipoise - Federal Reserve Bank of New York",
      "description": "",
      "url": "https://www.newyorkfed.org/newsevents/speeches/2024/wil240906",
      "urlToImage": null,
      "publishedAt": "2024-09-06T12:47:35Z",
      "content": "Introduction\r\nGood morning. I always appreciate the opportunity to speak before members of the Council on Foreign Relations.1\r\nBefore I get started, let me give the standard Fed disclaimer that the v… [+9030 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Investing.com",
      "title": "Super Micro Computer stock slips as JPMorgan cuts rating on uncertainty - Yahoo Finance",
      "description": "JPMorgan analysts on Friday cut their rating on Super Micro Computer (NASDAQ: NASDAQ:SMCI) shares from Overweight to Neutral. SMCI stock slipped less than 1%...",
      "url": "https://finance.yahoo.com/news/super-micro-computer-stock-slips-124410721.html",
      "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
      "publishedAt": "2024-09-06T12:44:10Z",
      "content": "JPMorgan analysts on Friday cut their rating on Super Micro Computer (NASDAQ: NASDAQ:SMCI) shares from Overweight to Neutral. SMCI stock slipped less than 1% in premarket trading.\r\nThe move comes as … [+1960 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Michael Dorgan",
      "title": "LL Flooring, hardware store once known as Lumber Liquidators, to close all 400 stores in bankruptcy proceeding - Fox Business",
      "description": "National retailer LL Flooring, previously known as Lumber Liquidators, has announced it will close resulting in around 2,000 workers losing their jobs.",
      "url": "https://www.foxbusiness.com/economy/ll-flooring-hardware-store-once-known-lumber-liquidators-close-all-400-stores-bankruptcy-proceeding",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/08/0/0/ll-flooring-2.jpg?ve=1&tl=1",
      "publishedAt": "2024-09-06T12:32:00Z",
      "content": "National retailer LL Flooring, previously known as Lumber Liquidators, has announced it is getting out of business after 30 years following a failed effort to find a buyer just weeks after filing for… [+4048 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Benzinga"
      },
      "author": "Shanthi Rexaline",
      "title": "Tesla Won Some Brownie Points By Not Doing Anything Wrong Like GM, Volkswagen, Says Industry Watcher, Calls FSD Elon Musk's 'Passion Project' - Benzinga",
      "description": "Tesla has weathered the EV downturn better than most others in the industry and it has strong brand appeal, says an industry watcher.",
      "url": "https://www.benzinga.com/markets/equities/24/09/40747427/tesla-won-some-brownie-point-by-not-doing-anything-wrong-like-gm-volkswagen-says-industry-watche",
      "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/09/06/Tesla-TSLA_0.jpeg?width=1200&height=800&fit=crop",
      "publishedAt": "2024-09-06T11:40:45Z",
      "content": "Tesla, Inc. TSLA on Thursday gave an ambitious timeline for bringing its full self-driving technology to Asia and Europe, and an industry watcher weighed in on the announcement.\r\nWhat Happened: The F… [+2234 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Theron Mohamed",
      "title": "Trump takes near-$4 billion hit on Truth Social since May — and the stock faces a fresh selling spree - Business Insider",
      "description": "Donald Trump's Truth Social holding has tanked in value since his return to X and Kamala Harris' nomination, and selling restrictions will ease soon.",
      "url": "https://www.businessinsider.com/donald-trump-truth-social-tmtg-stock-wealth-election-harris-x-2024-9",
      "urlToImage": "https://i.insider.com/66dad4d51d8d2deb96b9c294?width=1200&format=jpeg",
      "publishedAt": "2024-09-06T11:12:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "The Wall Street Journal",
      "title": "Companies Finally Find a Use for Virtual Reality at Work - The Wall Street Journal",
      "description": null,
      "url": "https://www.wsj.com/articles/companies-finally-find-a-use-for-virtual-reality-at-work-9dddf8db",
      "urlToImage": null,
      "publishedAt": "2024-09-06T11:00:00Z",
      "content": null
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Eleanor Pringle",
      "title": "Bill Gates identifies the biggest burden being passed on to his children after seeing his daughter harassed online - Fortune",
      "description": "Microsoft co-founder Bill Gates said seeing his daughter Phoebe harassed online made him think about the problems with misinformation.",
      "url": "https://fortune.com/2024/09/06/bill-gates-misinformation-burden-generations-freedom-speech-rules/",
      "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-1401834894-e1725618225965.jpg?resize=1200,600",
      "publishedAt": "2024-09-06T10:54:00Z",
      "content": "There are many problems billionaire tech tycoon Bill Gates is hoping to help solve: eradicating polio, water sanitization and agricultural development to name a few. But one frontier he worries is be… [+4138 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "The Motley Fool",
      "title": "Got $5,000? These 3 High-Yielding Dividend Stocks Are Trading Near Their 52-Week Lows - The Motley Fool",
      "description": null,
      "url": "https://www.fool.com/investing/2024/09/06/got-5000-these-3-high-yielding-divdiend-stocks-are/",
      "urlToImage": null,
      "publishedAt": "2024-09-06T10:15:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Samantha Subin, Pia Singh",
      "title": "S&P 500 futures fall as traders gear up for big August jobs report: Live updates - CNBC",
      "description": "S&P 500 futures wobbled Friday as investors assessed a weaker-than-expected August jobs report and its implication on U.S. monetary policy.",
      "url": "https://www.cnbc.com/2024/09/05/stock-market-today-live-updates.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108030028-1725567816901-gettyimages-2170415689-ms2_1668_urvrj81i.jpeg?v=1725574034&w=1920&h=1080",
      "publishedAt": "2024-09-06T10:05:00Z",
      "content": "S&amp;P 500 futures wobbled Friday as investors assessed a weaker-than-expected August jobs report and its implication on U.S. monetary policy.\r\nFutures tied to the broad market index hovered near th… [+1351 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Breck Dumas",
      "title": "US job market in 'bad shape,' executive recruiter says - Fox Business",
      "description": "The slowing labor market is flashing troubling signs, according to a longtime executive recruiter, who says the U.S. is in a \"job market recession\" right now.",
      "url": "https://www.foxbusiness.com/economy/us-job-market-bad-shape-according-e-recruiter",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/08/0/0/US-JOB-FAIR-GETTY.jpg?ve=1&tl=1",
      "publishedAt": "2024-09-06T10:00:00Z",
      "content": "Economists largely agree that the labor market is \"cooling,\" but one recruiting industry veteran says that is a significant understatement.\r\nBrian Howard is the founder and president of the Howard Gr… [+2869 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Matt Egan",
      "title": "America is pumping so much oil that gas could be below $3 by Thanksgiving - CNN",
      "description": "The oil market is in another tailspin. OPEC+ is scrambling to stop the bleeding. And gas prices are falling fast – with more to come.",
      "url": "https://www.cnn.com/2024/09/06/business/gas-prices-opec-trump-harris/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2157178178-1-copy.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-06T10:00:00Z",
      "content": "The oil market is in another tailspin. Producer group OPEC+ is scrambling to stop the bleeding. And gas prices are falling fast, with more to come.\r\nAll of this is music to the ears of drivers.\r\nUS g… [+4705 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "The Wall Street Journal",
      "title": "The 35-Year-Old CEO Plotting Red Lobster’s Comeback - The Wall Street Journal",
      "description": null,
      "url": "https://www.wsj.com/business/hospitality/the-35-year-old-ceo-plotting-red-lobsters-comeback-3c79d1a3",
      "urlToImage": null,
      "publishedAt": "2024-09-06T09:30:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Megan Cassella",
      "title": "Eighty-eight corporate leaders endorse Harris in new letter, including CEOs of Yelp, Box - CNBC",
      "description": "The letter is meant as a political show of force for Kamala Harris in a tight race with Donald Trump. The first presidential debate is less than a week away.",
      "url": "https://www.cnbc.com/2024/09/06/harris-endorsed-trump-murdoch-yelp-snap-ripple.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108027437-17249680422024-08-29t214644z_1892325114_rc2xp9ahq88f_rtrmadp_0_usa-election-harris.jpeg?v=1724968076&w=1920&h=1080",
      "publishedAt": "2024-09-06T09:11:46Z",
      "content": "WASHINGTON Eighty-eight current and former top executives from across corporate America have endorsed Vice President Kamala Harris for president in a new letter shared exclusively with CNBC.\r\nAmong t… [+12315 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WKMG News 6 & ClickOrlando"
      },
      "author": "Robert Breuer",
      "title": "Over one-third of Americans struggle to afford groceries. Here are 10 ways you can save - WKMG News 6 & ClickOrlando",
      "description": "The continued higher costs have forced Americans to make changes to their spending habits.",
      "url": "https://www.clickorlando.com/news/local/2024/09/06/over-one-third-of-americans-struggle-to-afford-groceries-here-are-10-ways-to-save/",
      "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/anyclip/l2OgxpEBCn68at4T_bpM/1725614425731_1920x1080_thumbnail.jpg?_a=DATAfRfiZAA0",
      "publishedAt": "2024-09-06T09:00:00Z",
      "content": "ORLANDO, Fla. Earlier this month the Federal Trade Commission and the Department of Justice hosted their first ever public meeting of the Strike Force on Unfair and Illegal Pricing\r\n.\r\nFTC Chair Lina… [+4085 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "POLITICO",
      "title": "‘A huge mistake’: Trump’s crypto allies cringe over family’s startup - POLITICO",
      "description": null,
      "url": "https://www.politico.com/news/2024/09/06/trump-family-crypto-startup-00177566",
      "urlToImage": null,
      "publishedAt": "2024-09-06T09:00:00Z",
      "content": null
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Axios",
      "title": "Airline rewards programs under scrutiny by U.S. - Axios",
      "description": null,
      "url": "https://www.axios.com/2024/09/05/airline-rewards-programs-scrutiny-dot",
      "urlToImage": null,
      "publishedAt": "2024-09-06T08:52:42Z",
      "content": null
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Brittany Kasko",
      "title": "Airline passenger captures 'manspreading' moment in viral TikTok, sparking debate - Fox News",
      "description": "A TikTok video went viral after a flight passenger showed footage of a man spreading his legs into her space midflight. The video sparked a debate on social media.",
      "url": "https://www.foxnews.com/travel/airline-passenger-captures-manspreading-moment-viral-tiktok-sparking-debate",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/plane-split2.jpg",
      "publishedAt": "2024-09-06T08:00:00Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+3815 chars]"
    }
  ]

  constructor() {
    super();

    this.state = {
      articles: this.articles,

    }

  }

  render() {
    return (<>

      <div className="container">
        <h2 className='mt-3'>Top-Headlins</h2>

        <div className="row mt-3">
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <Newsitem  title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
              </div>

            )
          })}
        </div>


      </div>
    </>
    )
  }
}
