---
title: "Reporting Policy v1.1 (July 31, 2024)"
# meta title
meta_title: "The DeFi Collective - Reporting Policy"
# meta description
description: "The Reporting Policy explicit the accounting logic used for the Collective's public reporting as well as the tools and solutions harnessed."
# save as draft
draft: false
---


The Collective is leading by example with the transparency offered on its treasury activity, with the publication of a [monthly detailed report](https://deficollective.org/categories/monthly-report/). This document details our reporting policies to accompany the reports and explicitly describes their context.


## Reporting Policies

This document is v1.1 of the Collective’s Reporting Policy, released on February 12th, 2024 (v1) and updated on July 31th, 2024 (v1.1). Seven reporting policies are currently enforced:


### RP.1: Two weeks delta

**Treasury data is reported with a two-week delta**, meaning monthly reports are published before the 15th of the following month. This delay enables us to process the data calmly and prepare a clear and comprehensive report. The delta was initially set at four weeks and lowered to two starting December 2023.


### RP.2: Risk-adjusted reporting

The Collective’s reporting logic is “pessimistic,” meaning that if there is a spread with the effective data, it’s to the downside (revenues are under-estimated). **The revenue, thus, is price-adjusted for the risk carried by the denominating token**, most of which is embodied in the liquidity-related risks (slippage and volatility). This policy is needed because there are situations where accurate pricing of a given asset is impossible.

Let’s illustrate this with two examples:



1. The Collective controls a veRETRO position, allowing it to direct RETRO emissions to pools of its choice. Doing so earns trading fees generated on the pool and vote incentives. Some vote incentives earned include bveZERO, a token redeemable for veZERO once the Zero Exchange launches on Polygon zkEVM (fork of RETRO). Since those tokens were illiquid at the time of claiming, they are not accounted for in our books (value = 0).
2. Several positions managed by the Collective generate yield in low-liquidity tokens, such as liqLIT. We thus need to account for the slippage we would face if we sell the tokens.


### RP.3: Yields are accounted for only once claimed

Some yields are accrued continuously (such as emission-based LP yield), while some are delivered at a specific time (weekly rewards for a veNFT). Our monthly public reporting only considers realized yield; **unrealized (=unclaimed) yields are not included in our revenue figure**. Furthermore, **revenue generated through capital gains are not included in the revenue figures of the monthly reports.**


### RP.4: Expenses Reporting Logic

The Collective faces both onchain and offchain expenses that operate under different temporalities. A logic similar to AP.3 is applied for expenses: expenses are accounted for on the day they are effectively paid out. Let’s explicit it with examples:



* Gas expenses are paid instantly once a transaction is submitted ⇒ gas expenses are accounted for simultaneously.
* A contributor working for the Collective sends his bill at the end of each month, usually paid on the following days ⇒ contributor-related expenses have a 1-month delay.

Expenses are sorted into five categories:



1. **Gas Costs**: With a sizable number of transactions executed weekly on L2 and monthly on L1, gas expenses are significant and precisely accounted for on a chain-by-chain basis.
2. **Contributors**: the monthly compensation of the contributors employed by the Collective.
3. **Donations**: The Collective frequently donates to smaller projects providing public service to DeFi (essential tools, worthy causes, other associations, or institutions).
4. **Recurring Expenses** include all the ongoing expenses the Collective incurs, such as the services it uses, its office, or the paid software it harnesses.
5. **Other**: anything else not fitting in the four categories highlighted above.


### RP.5: L1 vs L2 reporting Logic

**The Collective’s base reporting logic and principles are the same across all layers, either mainnet or L2 —** however, the temporality of the reporting changes to reflect the different gas costs of each layer:



* On Layer 2, we harvest and thus record our yields weekly (Thursdays). 
* However, it happens at best only once a month on mainnet — if the gas costs amount to less than 2% of the yield claimed. When the gas costs are too high compared to this figure, we simply delay the harvesting by as many months as necessary until the $ value of yield claimed represents &lt;2% of the $ value of the ETH expanded for gas.

LP yields, vote incentives, and fees collected are accounted for separately on each Layer 2 the Collective is active on, as well as liquid positions and locked positions value. The data presented in the monthly reports is an aggregate of all Layer 2.


### RP.6: veNFT Reporting

Core to the Collective’s activities is managing and developing veNFT positions: locked tokens providing liquidity-driving capabilities – allowing the Collective to direct token emissions to liquidity pairs of its choosing and producing revenues through trading fees and vote incentives.

These vePositions are locked for four years and thus can hardly be sold at their present value, although an OTC market exists with a variable discount compared to the price of the liquid underlying token.

The positions' growth and valuation are tracked thanks to a monthly snapshot of each position, taken at the beginning of each month, which includes the total number of locked tokens and their value. The $-value communicated does not include the OTC discount mentioned above, as it can be hard to assess: it uses the face value of the position (for instance, a 5.8M veVELO position is evaluated at the price of 5.8M VELO tokens)


### RP.7: Donations & Grants:

As a Swiss non-profit organization supporting DeFi's most resilient and ideologically aligned protocols that can use the extra support compared to their competition, the Collective actively seeks grants to assist with this goal. 

These grants can come in all shapes and sizes, such as anonymous donations in ETH and ERC-20 tokens to grantsfortheants.eth or via ecosystems that align with the Collective and wish to support our mission while we operate on their chain.

Grants from ecosystems, such as the OP donation granted from the Optimism Foundation, which are destined for bribes on their specific L1/L2 are posted directly from grantsfortheants.eth and, are not counted towards the accounting figures for each month.


## Tools & Solutions Used for Reporting

The accounting process is currently basic, with the data in beefy Google Sheets documents and imputed weekly at each harvest. While our current accounting process allows us a deep level of accuracy and a breakdown of revenues between three distinct sources across many chains, the time dedicated to the task will increase with the number of chains the Collective is on and protocols used. Thus, we are exploring solutions that could automate the process. A Dune Dashboard is currently being worked on to automate reporting on the main chain the Collective is active on (Optimism, Base & Arbitrum).

[DeBank's Time Machine](https://debank.com/paid) is used to access the historical state of the Collective's portofolio at the time needed for the reporting. 

To ease the accounting of gas expenses, we consolidate the execution of the transactions on one signing wallet as much as possible. Then, we use [0xKhmer's Gas Spent Checker](https://dune.com/0xkhmer/gas-spent-checker) to get a gas-token-denominated and dollar denominated overview of the gas spent on each chain.

Finally, we used [Smoldapp’s Multisafe tool](https://smold.app/safe) to deploy the Collective’s safes, enabling it to have the same address for its safes on all the chains it is active on (mainnet, Arbitrum, Optimism, Base, Polygon-PoS, Polygon-zkEVM, Mantle & Linea). It dramatically improves tracking the gas balance, accounting, and bridging operations.


## Transparency & history of this document

Like all policy documents, this document history is preserved thanks to its publication in markdown format in a GitHub repository. [You can easily track all changes here](https://github.com/deficollective/deficollective.github.io/commits/main/content/english/pages/reporting-policy.md).
