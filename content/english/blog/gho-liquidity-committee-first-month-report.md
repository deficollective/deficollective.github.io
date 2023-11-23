---
title: "GHO Liquidity Committee: First month report"
meta_title: ""
description: "The ants have been actively involved with the GHO Liquidity Committee, helping to repeg GHO. It's now time to report on the insights gathered through this first large scale experimentation of directional liquidity."
date: 2023-11-23T05:00:00Z
image: "/images/glc_report.png"
categories: ["Internal"]
author: "tokenbrice"
tags: ["GHO", "Liquidity Management", "Directional Liquidity"]
draft: false
---

GHO, along with crvUSD, was one of the most anticipated stablecoins released this year. Tied to the Aave protocol, it provides more options for depositors to leverage their aTokens holdings. Unlike other stablecoins such as DAI or FRAX, GHO is not harnessing some devices sacrificing decentralization for peg, such as Maker’s Peg Stability Module (leading to an accumulation of centralized stablecoin as collateral) or FRAX’s AMO (which creates additional risk/centralization vectors through its controlling mutlisig).

Thus, GHO’s peg has been fragile since its inception last July. The Aave governance and all its committed participants are very active on the topic, with many adjustments already implemented to GHO since its launch, including several increases in the borrowing rate for depositors.

One of the initiatives was the creation of a Liquidity Committee, which I assumed leadership of, tasked with helping to restore GHO to peg, harnessing directional liquidity management. This document proposes an overview of the current situation on GHO’s peg, the solutions explored and implemented by the Liquidity Committee, the means used for that end, and what else could be done for the peg: welcome to the **GHO Liquidity Committee — Month 1 report**.

It should prove informative to anyone involved or interested in the liquidity management of pegged assets and, more broadly, to those curious about the activities of the Collective.


## The inception of the Liquidity Committee

Amongst other challenges, the Aave governance quickly identified liquidity management as critical in GHO’s peg. However, liquidity management requires frequent operations, making it unfit for direct oversight by governance. Thus, the idea of building a committee dedicated to the task [was suggested](https://governance.aave.com/t/temp-check-treasury-management-create-and-fund-gho-liquidity-committee/14800), **approved by governance, and funded with a three-month budget of 406k GHO + 5 ETH (for gas) **on October 16.

The Liquidity Committee (LC) comprises seven persons, including some well-known figures from the governance, profiles familiar with the bribing and incentivization landscape, and liquidity management experts:

* [Matthew Graham (TokenLogic)](https://twitter.com/Matthew_Graham_)
* [Dydymoon](https://twitter.com/dydymoon1)
* [Emilio](https://twitter.com/The3D_)
* [Marc (ACI)](https://twitter.com/lemiscate)
* [Figue (Paladin)](https://twitter.com/Figue_me)
* Solarcurve (Balancer)
* [TokenBrice (DeFi Collective)](https://twitter.com/TokenBrice)

However, in its early days, the LC lacked coordination and instigated initiatives that proved ineffective in restoring GHO’s peg. Thus, at the end of October, I suggested assuming complete control and responsibility over the committee for one month, with a targeted GHO price of $0.985. It was effective and [announced on October 31, 2023](https://x.com/TokenBrice/status/1719328410479059227?s=20), with a long post providing more details on the shortcomings of the liquidity management strategies explored up to that point.


## The problems with GHO’s peg

At a structural level, GHO suffers from two core issues that are key in my understanding of the current depeg.


### 1/ The issue of GHO’s non-redeemability

While GHO’s high collateralization ratio (>2.7) is frequently mentioned and put forward, it is **absolutely irrelevant** in the current state of the product. Indeed, there is no direct link between GHO and its collateral, as there could be on other stablecoins.

For instance, LUSD can be redeemed against the protocol for $1 of ETH — this redemption mechanism is essential in ensuring that LUSD preserves its price. Devoid of any redemption-like mechanism, GHO has no floor price: its bottom price is entirely driven by speculation and investors' confidence in Aave’s Governance and GHO LC to push it back to peg.

Redemption or similar mechanisms create buyers of last resort who perform arbitrages, helping to stabilize the price to the downside. However, replicating a similar approach on Aave would be non-trivial since implementing the redeemability of GHO against aTokens would significantly impact the risk model of the Aave protocol.


### 2/ Borrowing GHO vs other stables: interest rate differential

Since the whitepaper, GHO’s interest rate model has been cause for concern. Indeed, its fixed and governance-driven nature lead us directly to the current situation. I believe events demonstrate what many of us anticipated: letting governance manage the GHO borrowing interest rate is inefficient, leads to governance bloat, and hinders borrowers' confidence.

Yet, there is hope on that front: [The3D_](https://twitter.com/The3D_), VP of engineering at Avara (Aave's parent company) & member of the GHO Liquidity Committee, is working on establishing and building a model enabling dynamic and programmatic interest rate management. Its release is expected in the coming months.

At its inception, GHO was launched with a very low interest rate: a fixed 1.5%, with AAVE stakeholders receiving a 30% discount. Since September, the governance has passed three proposals increasing interest rates:

1. [20 Sep: from 1.5% to 2.5%](https://app.aave.com/governance/proposal/323/)
2. [23 Oct: from 2.5% to 3%](http://v)
3. [14 Nov: from 3% to 4.72%](https://app.aave.com/governance/proposal/365/)

And agreed on a general rule of thumb to keep increasing the rate until GHO is at peg:

“50 bps increments every 30 days, as long as the GHO peg is outside 0,995&lt;>1,005 monthly average price range, up to 5.5% borrow rate.”


#### Why are interest rates so important?

In a rising interest rate market (4.99% on Maker, >7.5% on crvUSD), GHO’s borrow rate remains comparatively too low, which creates profitable opportunities to create yield-arbitrage strategies, especially for the first entrants (able to swap GHO close to $1):

1. Borrow GHO from Aave at 3.38-4.83% (current interest rate)
2. Swap for DAI / other stablecoins
3. Stake DAI/others to harness their risk-free rate (5%).

These arbitrage loops generate heavy selling pressure for GHO, worsening the peg situation. While the GHO interest rate has been raised several times since its inception, it started very low, and competing protocols are also increasing their rates. The Curve governance is currently [discussing raising the interest rate multiplier](https://gov.curve.fi/t/raise-interest-rate-multiplier-in-all-crvusd-markets/9764), for instance, to mitigate the high borrowing demand crvUSD is facing thanks to its novel and more permissive liquidation mechanism.


## Solution explored

With the broader context on GHO now explicit, let’s dive into the initiatives the Liquidity Committee instigated.

Before we detail each decentralized exchange or incentive distribution service used, allow me to share some context on the overall strategy at a high level. Indeed, to achieve the ambitious objective of the LC, new solutions were harnessed, previously never used at this scale


### A Primer on Directional Liquidity

Directional liquidity is the logical next step after liquidity mining, or even more straightforward: it could be described as “**targeted liquidity mining**.” Indeed, with regular liquidity mining, projects do not discriminate on the liquidity they attract; they simply look to maximize their pool TVL. In the case of GHO, and given the lack of buying demand, we decided to harness directional liquidity to allocate more incentives to the buying side of the market, helping to stabilize and increase the price.

Thus, the core idea here is to look at the total TVL figure and its distribution between the two tokens of the pair (such as GHO and USDC), **trying to maximize the amount of USDC (buying-side liquidity) attracted.**

Several solutions are available to achieve this result onchain:


### Maverick — “Peg support pools”

[Maverick](https://mav.xyz/) is a novel DEX enabling projects to partake in “liquidity shaping,” meaning a very precise distribution of liquidity within a given range, potentially unbalanced. It allows us to create “Peg Support Pools” where most liquidity is concentrated on the buying side.

![maverick-gho-peg-support-pool](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/2023/glc-report-assets/maverick.png)


Maverick is currently the only DEX to enable such a precise engineering of the liquidity structure: to replicate a similar structure on UniswapV3, dozens of pools would be needed, making it impractical, and Curve & Balancer are currently simply unable to deliver such customized liquidity models.

Once such a pool is created, it is wrapped within a “Boosted Pool,” which streamlines providing liquidity to the pool for depositors and enables the distribution of rewards. Thus, we can create precisely the desired liquidity distribution and then submit incentives for LP to collect if they match it.


### Merkl — Unbalanced liquidity incentives

On [Merkl](https://merkl.angle.money/), although the result is similar, the method is different. Merkl is an incentivization mechanism for Uniswap V3. It allows projects to create liquidity-mining campaigns for their UNI-v3 pools. **Merkl offers much customization regarding the distribution formula, including the ability to edit the weights allocated to each token and fees**.

Thus, it enabled the LC to create GHO/USDC, and GHO/USDT campaigns where the rewards are allocated in favor of the pairing assets, such as the primary campaigns ran through November:



* 80% based on pairing token balance (USDC or USDT), 
* 15% based on GHO's balance
* 5% based on the fees collected


![merk-gho-campaign](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/2023/glc-report-assets/merkl.png)


These campaigns helped to rebalance the GHO/USDC & GHO/USDT pools in favor of the pairing asset.

Simply put, with Maverick, we draw our desired liquidity structure, wrap it in a boosted pool, and add incentives, essentially telling LPs, “You get these rewards if you match the structure.” With Merkl, the model is based on incentives; we’re telling LP, “There is an incentive budget to grab on this pool, with a reward distribution formula skewed towards USDC.” Even more straightforward: in our case, Maverick is a push-based solution, while Merkl is a pull-based solution.


### Bunni — Broad range price support pool

[Bunni](https://bunni.pro/) is an incentivization layer built on UNIv3. Picture it like a veCRV/CRV layer built for Uniswap V3 pools. Since on Bunni, the only parameter projects can customize is their range, we deliberately went with a broad range (especially to the downside) to ensure that the pool USDC balance remains greater than GHO. Thus, we created a pool with a range of 0.85 USDC/GHO to 1.05 USDC/GHO, and [went through the governance process](https://gov.timelessfi.com/discussion/13900-trc102-enable-ghousdc-gauge-ethereum-no-cap) to enable LIT rewards on the associated gauge.


![gho-bunni](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/2023/glc-report-assets/bunni.png)


We then directed voting to the pool using Paladin’s Quest, offering GHO rewards to veLIT/vlLIQ holders who direct their gauge vote to the pool.


### Curve/Balancer — Lowering stableswap TVL

While stableswap-type pools maximize the liquidity at peg, they prove dangerous for unpegged stablecoins. Indeed, on a stablecoin like GHO, around $0.96, the stableswap pools end up heavily unbalanced in favor of GHO — aka a reserve of selling liquidity as GHO goes upward in price.

Considering this makes the repegging effort more costly, we diverted resources away from stableswap pools as much as possible, although our efforts could have been more widely successful. The top stableswap pool for GHO, Balancer GHO/USDC/USDT retains $8.2M TVL (vs 10M at peak), 76% of which is GHO.


![gho-balancer](https://raw.githubusercontent.com/TokenBrice/blog/master/static/img/2023/glc-report-assets/balancer.png)



## Cost/Results of the solutions harnessed


<table>
  <tr>
   <td><strong>Pool</strong>
   </td>
   <td><strong>APR</strong>
   </td>
   <td><strong>TVL</strong>
   </td>
   <td><strong>Time since campaign started</strong>
   </td>
   <td><strong>Weekly cost</strong>
   </td>
   <td><strong>Yearly cost</strong>
   </td>
  </tr>
  <tr>
   <td>Merkl GHO-USDT
   </td>
   <td>30.7%
   </td>
   <td>1,310,000$
   </td>
   <td>7 days
   </td>
   <td>6,860$
   </td>
   <td>356,720$
   </td>
  </tr>
  <tr>
   <td>Merkl GHO-USDC
   </td>
   <td>10.56%
   </td>
   <td>3,300,000$
   </td>
   <td>14 days
   </td>
   <td>6,6860$
   </td>
   <td>356,720$
   </td>
  </tr>
  <tr>
   <td>Sommelier Vault
   </td>
   <td>10.92%
   </td>
   <td>2,940,000$
   </td>
   <td>28 days
   </td>
   <td>4000$
   </td>
   <td>208,000$
   </td>
  </tr>
  <tr>
   <td>Bunni USDC-GHO
   </td>
   <td>52.95%
   </td>
   <td>113,000$
   </td>
   <td>6 days 
   </td>
   <td>5,000$
   </td>
   <td>$235,000.00
   </td>
  </tr>
  <tr>
   <td>Balancer GHO-USDC
   </td>
   <td>7.47%
   </td>
   <td>7,920,000$
   </td>
   <td>3 months
   </td>
   <td>0
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>Maverick GHO-USDC #58
   </td>
   <td>59.84%
   </td>
   <td>$1,040,000.00
   </td>
   <td>1 day
   </td>
   <td>45,000$
   </td>
   <td>2,340,000$
   </td>
  </tr>
  <tr>
   <td>Maverick GHO-USDC #67
   </td>
   <td>60.58%
   </td>
   <td>$2,970,000.00
   </td>
   <td>1 day
   </td>
   <td>7,000$
   </td>
   <td>364,000$
   </td>
  </tr>
</table>


Currently, four solutions described above have been directly incentivized (Balancer simply benefits from benevolent voters):



* The Sommelier vault has had an extremely rough start and heavily contributed in preventing the repeg as the deposited funds were out of range and creating a buy wall of 2M$+ GHO. This liquidity is, however, not toxic anymore with the recent rebalance, and while we do not recommend to keep incentivizing it, we feel the strategy is at least viable while not contributing to the repeg;
* Maverick boosted pool incentives have proven to be the most efficient at attracting liquidity quickly and creating healthy liquidity shapes pushing the repeg. Far from being a panacea, the new AMM stands out as a solution to help stablecoins return to peg. We will continue to prioritize this path unless a more efficient solution is made apparent;

    _(the screenshot of APR is not accurate in terms of how quickly incentives get diluted)_

* Merkl has proven to be an exciting solution to push Uniswap v3 LPs in specific behaviors. It has the perk of being more granular than Maverick, but in exchange, you cannot build as complex strategies (liquidity shapes) in one go. We have also observed that it often needed help to attract the right amounts of liquidity for the incentives spent by the committee, leading to 30% APR over week-long periods, which is ~3x the expected APR for such pools. We will likely keep using Merkl to complement Maverick as the primary strategy to create healthy liquidity;
* Bunni is the most cost-effective method to incentivize Uniswap v3, but it has several substantial drawbacks. First, it has a limited incentive capacity and cannot absorb $5,000+ weekly campaigns on its vote markets. The second is its limited capacity to attract TVL despite high APRs, likely due to the platform's youth. We recommend smaller-scale incentives to hold mid-sized range pools.


## Further solutions to examine

The GHO Liquidity Committee controls a sizeable amount of veBAL/vlAURA voting power and is not harnessing them (just delegating to Warden for additional income). I’d suggest exploring two options that could enable us to capitalize on this position:


### Gyroscope e-CLP

Gyroscope, a solution built on top of Balancer, delivers concentrated and customized liquidity ranges that would allow us to replicate the liquidity structures we currently harness.


### Balancer GHO/ETH

There is a 20% GHO / 80% wstETH existing pool on Balancer, which the LC could support. GHO currently has limited/no pairing against ETH or its derivatives, so such a pool could provide an additional compelling option while ensuring a balance heavily weighted toward the pairing asset.


## Synergetic endeavors outside of the LC scope

While the actions of the LC can sustain and improve the GHO’s price, they are not enough to **solve the structural problems with GHO**, highlighted in the introduction. Indeed, restoring and maintaining GHO’s peg purely through liquidity strategy would be highly costly. Thus, while we think the liquidity management strategies proved beneficial to GHO, they should be complemented with structural improvements on GHO itself, as well as other easy fixes, ranked by order of potential impact:



1. Enable a form of redeemability for GHO (enough to solve the peg issue alone, but hard to implement as redemptions would occur against users supplied aTokens balances).
2. Solve the borrowing interest rate spread with other major stablecoins
3. Provide utility to GHO by enabling GHO to produce a yield holding GHO as such (~GHO Saving Rate)
4. Provide utility to GHO by enabling its usage as collateral on Aave (wGHO)
5. Supplying the Liquidity Committee/successors with AAVE tokens to use as incentives instead of GHO.


## Next steps for GHO’s Liquidity Committee

If GHO fails to reach $0.985 by November 30, I’ll submit my resignation to my colleagues on the Liquidity Committee, as announced when assuming the leader role. What happens next is up to them and should be solved by a majority vote, as was done to elect me to the role in the first place.

250 basis points in a month ($0.96->$0.985) is an ambitious gamble, especially considering that the liquidity strategy is only a part of the answer needed to reach the peg. Even if we do not meet the objective, the new organization model for the GLC proved adapted and insightful: it allowed us to ramp up the initiatives and experiments and learn a lot to inform further liquidity strategies, as this report demonstrates.

Whether I remain or not a member of the LC, I remain confident that it now has all the learnings to provide favorable price and liquidity support to GHO. However, it became clear during that month that liquidity strategy alone won’t be sufficient to sustainably repeg GHO. Thus, I hope the governance can mobilize to deliver on the items listed above quickly, as they remain the most durable and efficient ways of repegging GHO.

I, TokenBrice, prepared this report with the assistance and input of other members of the GHO Liquidity Committee. A particular thanks goes to [Figue](https://twitter.com/Figue_me) for gathering the data & writing the Cost/Results section.
