---
title: "The DeFi Collective - October Report"
meta_title: ""
description: "Every month, we report on the activities of our treasuries, the revenues it generated and the impact produced for supported project: welcome to the very first report, covering October, and expliciting the broader context of our accounting logic and activities."
date: 2023-11-30T05:00:00Z
image: "/images/tdc-october-report.png"
categories: ["Internal", "Monthly Treasury Report"]
author: "tokenbrice"
tags: ["TDC Monthly Report", "Liquidity Management", "Liquidity-driving Tokens", "Collective"]
draft: false
---

The DeFi Collective, a non-profit association harnessing all relevant onchain & offchain means to support the most resilient DeFi protocols, was officially introduced on October 16. Core to our mission is the management of a proprietary onchain treasury, including liquidity-driving positions currently on six different chains, allowing the Collective to direct liquidity to pairs involving tokens from supported projects and harness them directly when relevant. On top of supporting projects relevant to the Collective, this activity is **sustainably profitable**.

We sometimes describe the Collective as a militant organization here to promote a specific vision of DeFi, maximizing resilience, autonomy, and trustlessness. However, it’s only half of the story, as **the Collective also walks the talk by deploying its own assets where its mouth is**. The Collective itself is also living proof that supporting the highest quality of DeFi protocols can also prove to be a profitable behavior.

Indeed, the Collective has been self-sufficient from day one, generating more weekly revenues than its expenses. The surplus secured every month enables us to scale up our activity over time: an unstoppable snowball of public good support.

In this first Treasury Report, we will disclose data about the Collective revenues, expenses, and impact achieved so far. We will publish these reports every month — although this first one is unique and bulky, as we wanted to include the full context to help our readers understand the Collective activities and how they are synergetic to its mission.


## I. Where is the revenue coming from?

Let’s start with the most pressing question: where are the ants generating revenue from? From their treasury! But where does the treasury come from? Simple: teams and projects that resonate with the Collective’s vision can help it by supporting it with brainpower and resources. So far, the Liquity, Maverick, Cat-in-a-Box, DYAD, Diva, Retro, and Zero teams have supported the Collective in their own way, helping it build a proprietary treasury large enough to be sustainable from day one.

That treasury includes ETH, stablecoins, other volatile tokens, and sizeable liquidity-driving positions such as veVELO or veRAM. Such positions are essential to our activity, so let’s explain how they work.


### Introduction to Liquidity-driving tokens 

(For the sake of the example, we will use veVELO from the [Velodrome Finance](https://velodrome.finance/) exchange on Optimism, but the logic is similar for other liquidity-driving positions). 

Initially created by Curve with veCRV, the veToken model has been further refined by projects like Velodrome and Retro. It aims to **create a virtuous circle of alignment between the different participants of the decentralized exchange**: liquidity providers, token holders, and swappers.

A given amount of VELO tokens is emitted and allocated each week to incentivize liquidity providers. This amount decreases slightly every week.

Holders of the VELO token can lock them for up to four years to obtain veVELO. The longer they lock, the more veVELO they obtain; 1 VELO locked = 1 veVELO if locked for four years.

Holders of veVELO direct the VELO emission every week in a linear fashion: a wallet controlling 1% of the veVELO can direct 1% of all the VELO produced in a given week.

veVELO lockers also benefit from several revenue sources:

1. They get a weekly rebase, a given amount of veVELO to claim, and added to their existing position, helping them to compensate for the weekly inflation.
2. They get the trading fees collected on the pool they voted on; here, too, it’s linear – if a given veNFT represents 20% of the total votes on a pool, it gets 20% of the fees collected on the given pair.
3. They also potentially get vote incentives: incentives posted by projects looking to attract more votes to their pools to grow their liquidity.


### Liquidity-driving tokens (veNFTs) x The Collective

The ants are true liquidity-driving token addicts! Indeed, **it’s critical to our mission, as it allows us to direct liquidity to pairs of our choosing, the one involving tokens outputted by resilient, autonomous, and trustless projects** such as Liquity’s LUSD or CatInaBox’s boxETH.

While we do so, we also gain exposure to the trading fees collected on such pairs, which is **a sizeable income source** for the Collective.


### Revenue Breakdown

Through its onchain activities, the Collective generates three primary sources of revenue:

1. The trading fees collected thanks to our voting activity with the veNFT we control
2. The vote incentives collected thanks to our voting activity with the veNFT we control
3. And finally, the collective is also supplying liquidity and staking various tokens, helping it to secure a third yield source.

Most of our revenues are currently earned in stablecoins, ETH, and relevant DEX tokens such as Ramses’s RAM or Velodrome’s VELO.


## II. Accounting Logic

Before we dive into the metrics, allow us to clarify our accounting logic by explaining the main principles we enforce.


### Risk-adjusted accounting

Our accounting logic is “pessimistic,” meaning that if there is a spread with the effective data, it’s to the downside (revenues are under-estimated). The revenue, thus is price-adjusted for the risk carried by the denominating token, most of which is embodied in the liquidity-related risks (slippage and volatility). Why would we need such a principle in the first place? Simply because there are situations where accurate pricing of a given asset is impossible.

Let’s illustrate this with two examples:

1. The Collective controls a veRETRO position, allowing it to direct RETRO emissions to pools of its choice. Doing so earns trading fees generated on the pool and vote incentives. Some vote incentives earned include bveZERO, a token redeemable for veZERO once the Zero Exchange launches on Polygon zkEVM (fork of RETRO). Since those tokens are currently illiquid, they are not accounted for in our books (value = 0).
2. Several positions managed by the Collective generate yield in low-liquidity tokens, such as liqLIT. We thus need to account for the slippage we would face if we sell the tokens.

### Four weeks delta

Today's report covers the first four weeks of activity of the Collective treasuries while we just performed our 8th harvest. We report our contextualized accounting data with a four-week delta to protect our most profitable strategies.


### Realized = Claimed

Some yields are accrued continuously (such as emission-based LP yield), while some are delivered at a specific time (weekly rewards for a veNFT). Our monthly public reporting only considers realized yield; **unrealized (=unclaimed) yields are not included in our revenue figure**. Furthermore, we do not report revenue generated through capital gains in the reporting period.


### L1 vs L2 accounting Logic

Our base accounting logic and principles are the same across all layers, either mainnet or L2 — however, the temporality of the accounting changes to reflect the different gas costs of each layer. **On L2, we harvest and thus record our yields weekly** (Thursdays). However, **it happens at best only once a month on mainnet** — if the gas costs amount to less than 2% of the yield claimed. When the gas costs are too high compared to this figure, we simply delay the harvesting by as many months as necessary until the $ value of yield claimed represents &lt;2% of the $ value of the ETH expanded for gas.


### Tools & Solutions Used

The accounting process is currently basic, with the data in beefy Google Sheets documents and imputed weekly at each harvest. While our current accounting process allows us a deep level of accuracy and a breakdown of revenues between three distinct sources (Fees Collected, vote incentives Collected & LP yields) across six different chains, we are aware that the time dedicated to the task will scale up with the number of chains the Collective is present on, and protocols used. Thus, we are exploring solutions that could automate the process.

Parallel to our current sheets-based accounting, we started harnessing **[Den](https://www.onchainden.com/) bookkeeping features**, enabling us to tag, potentially according to rules, all our tokens inbound. As the rule-building process takes time, and we just started with Den, we are currently using the two solutions in parallel. This solution is particularly relevant to us, as we already use the Den UI to interact with our safe, enabling the annotation of transactions and the tagging of contracts we interact with.

To ease the accounting of gas expenses, we consolidate the execution of the transactions on one signing wallet as much as possible. We can quickly get the total gas expenditure per month and period using [Disiaque’s](https://twitter.com/disiaque_eth) [WhoSigned](http://gas.who-signed.xyz/) gas tracking tool.

Finally, we used **[Smoldapp’s Multisafe tool](https://smold.app/safe) to deploy our safe, enabling us to have the same address for our safes on all the chains we are active on** (mainnet, Arbitrum, Optimism, Base, Polygon-Pos, Polygon-zkEVM). It dramatically facilitates tracking the gas balance, accounting, and bridging operations.


## III. Treasury Report

The initial treasury of the Collective has been established thanks to a combination of donations and loans received from projects supportive of its vision, including the Liquity, Maverick, CatInAbox, DYAD, Diva, Retro, and Zero teams. Upon reception in early October, the total worth of these assets was $1,055M. Thanks to the productive deployment of these assets and the overall markets appreciating, by the end of October, the Collective was controlling north of $1.3M of its own assets.

**The primary exposure comprises liquidity-driving tokens**, including veAERO, veRAM, veRETRO, vlLIQ & vlAURA, making up about 40% of the total asset value. The rest of the exposure comprises tokens mobilized in liquidity-providing positions, most of which are stablecoins (>25% of the total asset value) and ETH, as well as ARB, MATIC, OP & LQTY.

The Collective is active on six chains, but **most assets are deployed on mainnet, Optimism, and Arbitrum**. Its presence on Polygon-PoS, Polygon-zkEVM, and Base is currently moderate but poised to grow rapidly as more assets are deployed and positions compounded.


## IV. Expenses Report

The Collective started its activities on October 6th, and expenses such as contributors’ compensations are paid with a one-month delay; thus, **the expenses for the October period are minimal**. Over the October period, most expenses are gas costs.

In October, the Collective spent $237.94 in gas-related expenses, most of which occurred on mainnet:

![gas-expenses](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/others/tdc/tdc-oct-report/gas-expenses.png)


Recurring expenses include $4k for two contributors, with another currently onboarded, adding another $1.5K/month (for a $5.5k / month total). The Collective also has non-recurring expenses, such as the legal costs of setting up the structure. The activities of the Collective's board of directors are uncompensated and, hence, do not incur any expenses.


## V. Revenues Report

Over October, the Collective started its activities, the positions have been progressively deployed through the month, and the revenue generated on the mainnet was marginal.

Nevertheless, thanks to productive ve-based positions, especially veRAM, veRETRO & veVELO, a decent revenue was generated on L2, leading us to the following consolidated total, with a net revenue of **$18,410.58** 

On L2, positions were increasingly deployed over the monthly period, ultimately **reaching $312,360 allocated in liquid positions on L2** (such as liquidity providing on DEXes or Aave supply) by the last week of the month. This revenue is achieved thanks to **several locked positions (veVELO, veRAM, veCHR, veRETRO, veAERO), totaling a face value of $342,501 by Oct 30.**

![tdc-oct-l2-revenues](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/others/tdc/tdc-oct-report/l2-revenues.png)

On mainnet, a total of $354,470 was deployed throughout the month.

![tdc-oct-consolidated-revenues](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/others/tdc/tdc-oct-report/consolidated-revenues.png)

### Why do revenues matter?

As a nonprofit, why does the Collective care about revenues? The first answer is simple: it allows it to cover its expenses and be self-sustaining. The revenues exceeded our expenses, allowing the collective to **generate a monthly surplus**.

This surplus is further reallocated into tokens & projects that are in the Collective’s scope, such as LUSD or boxETH. It is also used to increase the Collective liquidity-driving positions further, giving it more means to support the vision-aligned projects under its umbrella.

Other usages of the surplus include supporting initiatives that benefit the whole space (we hope to disclose our first one shortly), as well as donations to projects of public interest, such as the $500 donated in November to BlueChip, the stablecoin rating agency.


## VI. Impact Report

The Collective undertook many actions to benefit supported projects in October. 

On mainnet, the focus was put this month on bLUSD with a [new gauge deployed on Bunni](https://commonwealth.im/timelessfinance/discussion/13854-trc-98-enable-a-revised-blusdlusd-gauge-ethereum10-cap). Thanks to its vlLIQ position, the Collective could support the bLUSD/LUSD, LQTY/ETH & boxETH/ETH Bunni gauges with its gauge voting power. We’ve also been spearheading the effort to repeg Aave’s GHO and the rest of the GHO Liquidity Committee — we published a [separate report last week focusing on this topic](https://deficollective.org/blog/gho-liquidity-committee-first-month-report/).

On Arbitrum, the Collective’s sizeable veRAM position further enabled it to grow the liquidity for the LQTY/ETH, LUSD/USDT, and LUSD/GRAI pairs. LUSD’s presence on Arbitrum has grown sizeably over the period, thanks to a dynamic ecosystem. **We’d like to address a special thank you to the Camelot Exchange team**, who decided [to allocate GRAIL incentives to its LQTY/ETH and LUSD/USDC pair](https://x.com/CamelotDEX/status/1728302549315260803?s=20): it was a sizeable driver of the positive dynamic observed for both tokens on the network. While the Collective currently has minimal xGRAIL exposure, it’s actively growing its position.

On Optimism, the Collective’s veVELO exposure enabled it to keep supporting LUSD-related pools on the network, including LUSD/ETH, LUSD/USDC, LUSD/USDT, LUSD/GRAI, LUSD/ERN, & LUSD/sUSD. On top of voting on these pools, the Collective used its OP to support LUSD/ETH pool with vote incentives. With Pool Together’s POOL token now launched on the network, we’re also looking to expand the support to its related pool in the coming weeks/months.

On Polygon-PoS, the Collective’s veRETRO position supported blue-chip asset pairs since no other tokens fit our demanding framework. These include wMATIC/USDC, wBTC/wETH, wMATIC/wETH, wETH/USDC & some RETRO-related pairs. The revenues produced were used to compound the veRETRO position further to grow the Collective’s liquidity-driving capability on the network.

Since LUSD was not yet launched on Base/Aerodrome in October, the voting power was used to produce revenues: our currently limited veAERO gauge voting power was distributed on pairs such as wETH/AERO or wstETH/wETH.

Finally, on Polygon-zkEVM, the Collective was idle in October, waiting for the Zero Exchange to launch (expected in January).


## Parting Words

We’re delighted to present this report to you today. We would like to address once more our deepest thanks to the team of chads that made this whole adventure possible in the first place, the original donators and support of the DeFi Collective: the Liquity, Maverick, CatInAbox, DYAD, Diva, Retro, and Zero teams.

Regarding treasury management, on top of my reporting to you today (TokenBrice), I’d like to explicitly mention the involvement of [0xAbmis](https://twitter.com/abmisx0) and [Luude](https://twitter.com/0xLuude) and thank them for it. Both are/are being onboarded as recurring Collective contributors and compensated for their involvement, as they proved essential to the Collective’s operations.

October was the first month of onchain activity for the Collective, and we were already able to demonstrate that our vision of a self-sustaining support structure for DeFi’s public good is practical and can be delivered upon. Now, the real test will be in November, when the Collective will face increased expenses, with the first round of contributors' salaries paid out, as well as other expenses related to the set-up of the structure. Thanks to its fast-growing revenue, we’re confident that the Collective will be able to cover these expenses and still generate a surplus: see you next month for the contextualized answer!

