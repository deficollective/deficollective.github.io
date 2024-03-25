---
title: "Treasury Management Policy v.1 (March 25 2024)"
# meta title
meta_title: "The DeFi Collective - Treasury Management Policy"
# meta description
description: "The Treasury Management Policy details the logic governing the operations of the Collective's treasuries to maximize the support provided to mission-critical projects and tokens while minimzing risks incurred."
# save as draft
draft: false
---

The Collective manages its own onchain assets while reporting on its treasury activities with unprecedented transparency, as further explained in the [Reporting Policy](https://deficollective.org/reporting-policy/). All treasury allocation decisions are made following a strict framework: aiming to maximize support for mission-critical DeFi protocols (i.e., the Collective’s core mission), while minimizing any risk incurred on the side of the Collective or the supported projects, and on top of that, generating revenues to enable the Collective to cover its expenses and scale up its support.

This document details the core principles governing treasury operations.


## Base Policies


### TMP.0: Maximize Support to Mission-Critical Protocols

The first goal and principle of the Collective’s treasury management is to maximize support and impact across the board for mission-critical DeFi projects and assets that align with the Collective’s purpose and Protocol Guidelines.


### TMP.1: Self-Sufficient Funding

The Collective’s treasury management must be **self-sufficient**, meaning the association should generate revenues covering and exceeding its operating expenses.

Thus, each month, there is a **revenue surplus, measured in percentage**: the share of the revenue that is not needed to cover the association expenses and that can be initially fully compounded into more yield-earning and mission-aligned positions to further the Collective’s impact as under TMP.0.


### TMP.2: Surplus-Driven Operation Management

**The revenue surplus will govern the association's decisions regarding its expenses**. Additional expenses and hires can be considered when the revenue surplus reaches and sustains over 50% for a month.


### TMP.3: Expenses Minimizations

Expenses are kept to the bare minimum required for the operations of the Collective. This is ensured thanks to several sub-policies:



1. TMP.3.1: Compensations paid to contributors are below market rate, as financial interest shouldn’t be the primary motive to join the Collective, which offers its contributors a unique opportunity to make a difference in DeFi.
2. TMP.3.2: To ensure fairness in compensations, a maximum spread of 2x is tolerated between the lowest and highest monthly compensations paid to contributors.


### TMP.4: Performative Farming

The Collective** analyzes the yield opportunities quantitatively (returns) and qualitatively.** In the real world, like in DeFi, we vote mostly with our wallets. While generating revenues is a necessary goal, other dimensions of the examined yield earning opportunities will be considered, such as:



* Synergy with the supported protocols or assets
* Relevance of the activity for the overall health of the DeFi ecosystem
* Be extremely thorough in its risk management practices to promote healthy behaviors across the ecosystem.


### TMP.5: RWA Minimization Policy

RWAs present inherent and unavoidable counterparty risks. Thus, the Collective minimizes its RWAs exposure. To further contain risks, when RWAs exposure is needed for liquidity management operatives (see TMLPP.3), base assets are preferred to their wrapped versions, to minimize risks (i.e., USDC is tenable in certain situations, FRAX is not).


## Operational Policies


### TMOP.1: Multisig Wallet

The Collective harnesses Gnosis Safe wallets to secure its assets. Several sets of safes are deployed to address their different needs: the operating wallet, the accounting wallet (used for expenses), and the donation wallet, which is used to receive grants and donations. Signers include different members of the Collective depending on the wallet usage, with a minimum of 2 signers required per wallet.


### TMOP.2: Biweekly Management

Treasury-related operations are consolidated as much as possible into two sessions recurring every week at set times.


## Liquidity Providing Policies

Providing liquidity is a core activity for the Collective, enabling it to achieve its mission of growing liquidity for mission-critical assets and supported protocols while also being one of its main revenue sources. To ensure consistency with its ethos in the endeavor, the Collective adheres to the following policies while providing liquidity:


### TMLPP.1: Self-Managed Liquidity Provisioning

Automated Liquidity Managers, such as Gamma or Ichi, are avoided. The risk they create, both on a technical and financial level, is not worth their benefit, especially for an entity like the Collective, which can enforce semi-active management of its position (adjusted weekly if needed).


### TMLPP.2: Broad Range Concentration

On volatile asset pairs using Concentrated Liquidity, the Collective picks broad concentration (>-25%/+25%), which is more aligned with its objectives — increasing liquidity efficiency **and** availability and fits its current mode of operation (TMOP.2)


### TMLPP.3: Pairing Assets

For volatile asset LP, a pairing against ETH or an almost equally resilient asset like LUSD is preferred; pairing volatile assets against RWA-dependent assets such as USDC is avoided.

For stablecoin LP, pairing against USDC and USDT is hard to avoid considering their consequent liquidity, and thus tolerated, for instance, with pairings such as LUSD/USDC or LUSD/USDT. Non-RWA-dependent stable pairs such as LUSD/DYAD or LUSD/HAI are, of course, preferred.

For LSD LP, the Collective keeps in mind the question of LSD diversity and supports stETH alternatives, such as rETH or divETH.

### TMLPP.4: Donated mission-critical assets used to LP

The donations received in mission-critical assets, as defined in the guidelines, are, where possible, matched with existing assets (usually ETH or LUSD) and used to support liquidity on the said mission-critical asset.

## Borrowing Policies

The Collective harnesses borrowing protocols, like Dyad. It manages its position responsibly:


### TMBP.1: Avoid Excessive Leverage

Borrowing positions are initially set up with a responsible health factor, usually well above 2 and often well above 3. This ensures ample margin to stomach adverse price movement and re-collateralize if needed.


### TMBP.2: Retain Stablecoin Exposure

While borrowing a given stablecoin, such as DYAD, the Collective retains exposure to the stablecoin as much as possible to facilitate reimbursement if needed. From that perspective, single-asset staking of the borrowed stablecoin is ideal, although it is not always possible. Borrowed stablecoins are also frequently used for liquidity providing, with keen attention to the concentration range, to ensure maximal exposure to the borrowed stablecoin will be maintained.

## Transparency & history of this document

Like all policy documents, this document history is preserved thanks to its publication in markdown format in a GitHub repository. You can easily [track all changes here](https://github.com/deficollective/deficollective.github.io/commits/main/content/english/pages/treasury-management-policy.md).
