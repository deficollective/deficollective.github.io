---
title: "The DeFi Collective - February 2025 Report"
meta_title: ""
description: "Monthly report for the treasury-related activities of the Collective in February."
date: 2025-03-07T05:00:00Z
image: "/images/tdc-february-2025-report-cover.png"
categories: ["Monthly Report"]
author: "luude"
tags: ["TDC Monthly Report", "Liquidity Management", "Liquidity-driving Tokens", "Collective"]
draft: false
---

February was a rollercoaster of a month for the Collective and the broader market, with significant volatility observed. The Collective’s treasury team navigated a series of challenges, starting with a contract vulnerability in BOLD, which saw an emergency withdrawal of all LP positions just after we were gathering some momentum on our BOLD operations, and ending with an exploit in the Safe{Wallet} UI, which halted nearly all treasury activities in the final week.

Despite these disruptions in February, the Collective won the PoolTogether jackpot and received a sizable donation from PoolTogether DAO. Nonetheless, there was a notable decline in on-chain revenue, exacerbated by the shorter month and fewer weeks to offset lower earnings.

For a detailed breakdown of revenue sources, accounting logic, and Collective activities, please refer to [the Reporting Policy](https://deficollective.org/reporting-policy/).

While we’re relieved to have February behind us, let’s dive into the details below.


## Treasury Report

**The face value of assets controlled by the Collective** (excluding grants) **decreased by 22.68%** in February, falling from **$2,757,355** on February 1 to **$2,131,899** by February 28. This total comprises **42%** in locked assets, **11%** in L2 liquid positions, and **29%** in liquid positions on mainnet. The Collective's Perma-LP wallet holds the remaining **18%** in assets. The continued drop in the Collective's treasury value is predominantly driven by the continued decline of our liquidity-driving positions and ETH's underperformance. While declines are never ideal, the Collective remains in a strong financial position, with enough stablecoins to cover over two years of expenses even without additional revenue.

![tdc-february-2025-net-worth](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/tdc-february-2025-report/networth.png)


## Expenses Report

Expenses fell slightly compared to January, but remain elevated with DeFiScan expenses set to continue over the next few months as DeFiScan continues to scale and build its place within DeFi, and new contributor hires are expected.

![tdc-february-2025-gas-expenses](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/tdc-february-2025-report/gas-expenses.png)

Gas costs fell compared to January due to a lower amount of mainnet operations. This trend is expected to continue until the BOLD relaunch, which is scheduled for some time in Q2.

![tdc-february-2025-expenses](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/tdc-february-2025-report/expenses.png)

## Revenues Report

**February’s earnings surged by 108.64% compared to January**, closing the month at **$147,951.30**. While this figure appears impressive at first glance, a deeper analysis reveals that most of this increase came from a $125K POOL donation from our partners at PoolTogether rather than organic revenue growth driven by onchain activities.

This donation was strategically deployed to bolster POOL liquidity across L2s, with a portion also staked in PoolTogether on mainnet. Meanwhile, Perma-LP revenues saw a notable decline following a notification from Liquity regarding a potential issue with BOLD. In response, the treasury management team removed all BOLD liquidity positions until further clarity was provided. Once the all-clear was given, some idle assets were reallocated into LUSD & BOLD LPs to restore some earning capacity.

L1 and L2 revenues dropped slightly from previous months, with PoolTogether again saving the day as the Collective [won the mainnet onchain jackpot](https://etherscan.io/tx/0xa74219600a222bab57a548c3a79d25cc16fc26afdfe3adecb60f2b8bb1363f4d) (~4 ETH).

February marked the most challenging month for onchain revenue in the Collective’s history. While this was primarily driven by broader market turbulence and unexpected black swan events related to BOLD and Safe, the treasury management team remains committed to stabilizing and growing revenues in the months ahead. As market conditions normalize and operations resume, efforts will be focused on rebuilding momentum and enhancing revenue-generating strategies.

![tdc-february-2025-consolidated-report](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/tdc-february-2025-report/consolidated-report.png)


## Impact Report


### Mainnet

Following the highly anticipated launch of BOLD, the Collective initially expected a significant reduction in mainnet operations throughout February. However, these expectations were quickly disrupted upon discovering an edge case vulnerability within the Liquity v2 stability pool contracts.

To protect the treasury, the decision was made to immediately unwind all BOLD-related positions, close out outstanding loans, and withdraw ETH from Liquity v2 until more details about the vulnerability were available.

Once the full extent of the issue was assessed, a small BOLD position was reacquired and allocated to provide liquidity on Aerodrome, while the remaining ETH and stablecoins remain in auto-compounding vaults on mainnet, awaiting further clarity on the BOLD relaunch.


### Arbitrum

Similar to mainnet operations, the Collective’s liquidity strategy on Arbitrum was significantly impacted by the BOLD vulnerability. In response, the treasury management team unwound the BOLD/USDC pool on Ramses, with no immediate alternative but to deposit the USDC portion into a lending protocol while awaiting further clarity on the BOLD relaunch timeline.

Compounding these challenges, the Safe UI outage and a front-end issue on Ramses prevented the team from claiming voting rewards in the final week of February, further dampening revenue for the month.

Looking ahead, March will be focused on increasing revenue streams using our large liquidity-driving position on Ramses while monitoring developments surrounding the BOLD relaunch and continuing support for our PermaLP positions.


### Optimism

The BOLD vulnerability also affected Optimism operations, leading to the withdrawal of LUSD/BOLD and USDC/BOLD pools. However, support for the POOL/ETH pair remains active through the Collective’s Perma-LP initiative.

Moving forward, the treasury management team will continue to support LUSD and POOL pools on Velodrome with voting support, while also focusing on increasing revenues by strategically voting on high-volume blue-chip pools.


### Base

After unwinding the LUSD/BOLD and USDC/BOLD positions on Aerodrome, a LUSD/USDC pool was reestablished and will now receive vote support using the Collective’s veAERO position.

Although the Perma-LP POOL/BOLD position was initially unwound, it has since been reestablished and will continue to receive support until the BOLD relaunch.

Looking ahead, the treasury team will implement a revenue optimization strategy utilizing the remaining veAERO voting power to ensure sustainability of the Collectives initiatives.


### Polygon-PoS

A vote-only strategy on Retro remains in place, yielding very little results, because of the very limited activity overall on Retro. This strategy will continue indefinitely.


### Mantle

The Collectives vote-only strategy on Cleopatra remains, with low results varying from week to week. This strategy will continue indefinitely.


### Linea

The vote-only strategy continues on Nile, with modest results recorded. This strategy will be maintained going forward to contribute to treasury growth.


### Blast

A vote-only strategy on Fenix remains in place, yielding very little results. This strategy will continue indefinitely.


### Perma LPs

February marked the end of the Collective’s PSM/wETH LP on Ramses, following Possum’s migration to CASH after their latest product release. However, support for Possum remains strong, with a CASH/wETH position planned once the migration is complete.

The Collective’s partnership with PoolTogether continues to thrive. The latest POOL donation has been strategically deployed, strengthening POOL/BOLD, POOL/ETH, and POOL/wETH positions within the PermaLP wallet. These liquidity commitments exemplify the depth of support provided when we support a mission-critical DeFi protocol, with the Collective contributing over $150k in pair assets to bolster POOL liquidity across Arbitrum, Base, and Optimism.

We are excited to continue collaborating with PoolTogether, ensuring these liquidity positions grow sustainably while reinforcing our commitment to long-term support of true decentralised and resilient protocols.


### Parting Words

February was by far the strangest month in the Collective's history. We had some fantastic numbers on paper, but once you dig a little deeper, there is certainly some work to be done.

We hear the BOLD relaunch isn't as far away as first though,t so expect revenues and impact to increase rapidly following this.

Finally, some upcoming alpha, keep an eye out for the next protocol that will receive liquidity support over the next few weeks, along with the announcement of a donation to DeFiScan from a very important entity within the space.

The ants are getting noticed!

— Luude, on behalf of the treasury and liquidity management team of the DeFi Collective: TokenBrice and myself. 
