---
title: "Kaskade LUSD Volume Incentivization Campaign Report"
meta_title: ""
description: "The DeFi Collective reports from the Kaskade incentive program launched to help boost the liquidity and volume of the LUSD/USDC pair on Uniswap and Maverick."
date: 2024-05-02T11:00:00Z
image: "/images/kaskade-campaign-report/kaskade-report-cover.png"
categories: ["Campaign"]
author: "spicypiz"
tags: ["Liquidity Management", "Liquidity-driving Tokens", "Collective"]
draft: false
---

### Kaskade campaign report

In our [post](https://deficollective.org/blog/kaskade-campaign-launch/) announcing the Kaskade partnership, we made it clear that we were trying a new approach. We saw that opportunity as an experiment: a new innovative tool is being developed; let’s try it out and throw a small budget at it. If it works well, we might want to integrate it into our list of regular tools. If it did not, at least we would have learned something. 

We were very confident in the Kaskade pitch and general approach. We did have one worry: what if the rewards are eaten up by a few smart arbitrage bots that figure out a way to generate wash trading volume profitably? If that happens, we will have spent all the incentive money to reward this smart bot rather than to generate genuine trading volume and improve liquidity.

After the campaign ran for a few weeks, we now have data to evaluate the results. What happened? Let’s investigate.

*Note: Make sure you read the [launch post](https://deficollective.org/blog/kaskade-campaign-launch/) to have all the context before proceeding with the rest of this article.*

### What are the final results?

- $12M+ volume generated in 3 weeks
- 47+ participants
- 350+ transactions
- 30K LUSD incentives distributed

Those numbers look pretty good, but are they all rainbows and unicorns? Is that the full story?

### Who participated in the Kaskade incentive program?

We explored the Kaskade leaderboard to understand how the users were behaving, and who were the happy winners of the precious Kaskade points.

Unfortunately, one single trader captured most of the trading rewards. Let’s take Week 2, for example. Here are the happy few:

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image1.png)

Digging into this data, we found two problematic points:

- Out of the top 10 wallets in the leaderboard, 9 wallets seem to be linked (i.e., there were transactions of ETH and/or LUSD/USDC between those wallets during the duration of the campaign) - meaning that they all belong to the same trader. Here are all the [receipts](https://docs.google.com/spreadsheets/d/1u8bm9bHcrVKf77Xo5aJ-j1HlOh05M5Z1ecMX2Snhs-U/edit#gid=0).
- All these wallets participated in wash trading, swapping USDC and LUSD back and forth to generate what seems like artificial trading volume.

How did the trader do it?

- They started by funding a first wallet with a small amount of ETH and 30K USDC: 0xcfc2f1b6363f02c701ec62f892a7da5da3d7b455 ([see transaction](https://etherscan.io/tx/0xe8703dd3d1fde3135b47cd464ab88b7c64f713d1e43ef1038cb04c61e76d9a29))
- They then swapped the 30K USDC to 30K LUSD using Kaskade ([see transaction](https://etherscan.io/tx/0x66e91ec0018193397cfd98a2e7ed941f61c90e2a76d11d8f1891e0ed635432dd))
    - *Note: Kaskade is using 1inch in the back-end, as shown on their UI, so we can deduce that the trader routed through Kaskade first to be eligible for the rewards, which used 1inch.*

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image2.png)

- 24 seconds later, they then swapped the 30K LUSD back to 30K USDC ([see transaction](https://etherscan.io/tx/0xb41b25cef02424ec43c872307d746ba76b522f0c6d7bc7b46c97d53ca84e3d1a)).
- They then repeated those two trades a few times. In the DeBank screenshot below ([source](https://debank.com/profile/0xcfc2f1b6363f02c701ec62f892a7da5da3d7b455/history?chain=eth)), we can see that in less than 5 minutes, account 0xcfc2f1b6363f02c701ec62f892a7da5da3d7b455 generated about $272K of volume. Not bad.

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image3.png)

- After playing with that strategy for a while, they sent the remaining ETH & USDC to another wallet ([example transaction](https://etherscan.io/tx/0xb9093c9f721e0a5e7b3b8bfea6704e56066e01d30dd508f5f841052704b0aa7c))
- And they repeated the same action as on the initial wallet.

As mentioned before, they represent 9 out of the 10 top wallets of the Week 2 leaderboard. This is pure wash trading from one single and unique user, that splits their activity across multiple wallets to avoid raising suspicion. It also looks like it is the same dollars recycled around. 

### Did the wash trader make money?

Let’s zoom in on those 2 trades for example, and try to calculate if those trades were profitable for the wash trader. Let’s start by looking at the cost and then zooming in on the revenue.

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image4.png)

- **Cost:** What is the cost of those two trades? The cost for the trader primarily comes from (1) fees paid to the LP (+ slippage) and (2) gas fees
    - **(1) LP fees (+ slippage):** 30,500.0 USDC became 30,508.6 LUSD in the first trade. This amount was fully swapped back to USDC for 30,481.7 USDC. The loss due to LP fees and slippage on those two trades can be calculated as the initial amount of USDC minus the final amount of USDC post-trades.
        - 30,500 - 30,481.7 = **18.3 USDC** lost due to LP fees and slippage.
    - **(2) Gas fees:** 2 swaps were made on Ethereum mainnet, accounting for $9.1 and $8.4 of gas fees.
        - 9.1 + 8.4 = **$17.5** spent on gas fees
    - **Total loss = 18.3 + 17.5 = $35.8**
- **Revenue:** What is the incentive revenue generated by those two trades? Our trader made ~$60,990 trading volume in this operation.
    - Let’s try to calculate how much of the rewards the trader generated with $60,990 trading volume.
    - In Week 2, the top wallet on the Campaign Leaderboard generated $391,975 of volume, and according to Kaskade, they got 16.74% of the total points for that week (see [Kaskade UI](https://app.kaskade.finance/campaigns/2?rewardsToken=0x5f98805a4e8be255a32880fdec7f6728c6568ba0&tokensUrlMap=)).
        
        ![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image5.png)
        
    - 10,000 LUSD were distributed in Week 2, so the top contributor made 16.74% * 10,000 = 1,674 LUSD.
    - We can deduce that for each $1K of volume generated, the traders make 1,674 / 391,975 / 1,000 = $4.27
    - So, what did our wash trader make on those two trades? 60,990 * 4.27 / 1,000 = $260.4
    - **Total gain = $260.4**
- The trader spent $35.8 and got $260.4 in return. That’s 260.4 - 35.8 = **$224.6 profit**, or a 7.3x return on his initial investment. Pretty juicy trade!

### Did the initiative generate sustainable liquidity?

Now, let’s try to understand if this wash trading activity improved LUSD’s liquidity situation. 

Our initial goal with this experiment was to generate more trading volume so that the LPs could get more fees, which would then attract more LPs. We have now established that the additional trading volume was not made with genuine users, but does it matter? If we have improved the liquidity situation of our token, maybe we can conclude that it does not matter where the volume comes from as long as there is additional volume.

**First, how much of the incentives went to the LPs?** 

If we go back to the example of the two trades of our wash trader, generating $60,990 in trading volume:

- With $60,990 trading volume, at 0.03% fee in the [maverick pool](https://app.mav.xyz/pool/0x6c6fc818b25df89a8ada8da5a43669023bad1f4c?chain=1) for the LPs, that’s 60,990*0.03% = $18.3 in LP fees.
    - *By the way, we notice that the $18.3 correspond exactly to the amount lost by the trader on what we earlier called “Slippage + LP fees.” This makes sense and also means that slippage is very minimal on those trades: most of the trader's loss goes to LP on fees rather than slippage.*
- **$260.4 was spent on incentives for those two trades, but only $18.3 were redistributed to the LPs.** Not great.

In the end, for those two trades, the protocol spent $260.4 in incentives, which was split three ways:

- The wash trader made $224.6 in profit
- The LPs made $18.3 in extra rewards
- The Ethereum blockchain made $17.5 in gas fees

**Note:** The wash trader may pay more gas fees to claim their Kaskade rewards.

**Did the TVL for the USDC/LUSD Pool on Uniswap increase?**

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image6.png)

There was no significant uptick right at the launch, and there a modest one ten days after the launch. It’s not easy to attribute it or not attribute it for sure to the Kaskade campaign, as a lot of other factors can have an impact on the market conditions and TVL, and the uptick does not look significant vs. the historical data. Importantly though, the Kaskade approach is designed to have an indirect impact to TVL: it is focused on generating volume first, and TVL second. The impact on TVL might take longer to materialise than traditional liquidity incentive mechanisms. 

**Did the TVL for the USDC/LUSD Pool on Maverick increase?**

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image7.png)

This is the evolution of the TVL on the Maverick USDC/LUSD pool ([source](https://platform.arkhamintelligence.com/explorer/address/0xf21598a36710cbc18912b442e258a3bc48114159)). 

As a reminder, we had launched two LUSD/USDC boosted positions on April 4th, to attract more TVL before launching the Kaskade campaign. We can see a clear uptick from the [announcement](https://x.com/mavprotocol/status/1775929600754733474) of the Maverick incentivized Pool on April 4th. 

The Kaskade incentives campaign [started](https://x.com/Kaskade_Finance/status/1778032229769502897) on April 10th. After the announcement, we saw TVL growth sustained. It’s not easy to say which of the two simultaneous incentive programs contributed most to TVL growth. 

However, what we can say is:

- For the Maverick incentive program, 100% of the rewards went directly to the LPs - which is by design.
- For the Kaskade incentive program, let’s try to calculate the total LP fees redistributed. The total volume of ~$12m was distributed across two pools: the Uniswap pool at 0.05% fee, and the Maverick pool at 0.03% fee. If we make the assumption that half of the volume went through each pool, that’s a 0.04% average LP fee. Total LP fees = $12m * 0.04% = 4,800$. A total of 30k LUSD were distributed, so that’s 4.8k/30k = 16% of the incentives redistributed to LPs. We knew it would be lower than 100%, but we still believe that the 16% could be improved.

At the time of writing, the Maverick boosted position had attracted $1.36M TVL, which is roughly 85% of this pool's total volume. Needless to say, the boosted position on Maverick works very well to attract TVL.

![image](https://raw.githubusercontent.com/deficollective/deficollective.github.io/main/assets/images/kaskade-campaign-report/image8.png)

We can conclude that, even with the wash trading activity, which greatly boosts actual volume generated by genuine traders, incentivizing LPs directly remains an order of magnitude more efficient in attracting more TVL to the pools than what we did with this campaign.

### How to iterate? Is it possible to make it work?

This campaign was the first experiment for the Collective and only the second campaign for Kaskade. So, it’s normal that things are imperfect, and it was fully expected. The campaign did not reach our goals, but could we get closer to it with the right adjustments? Is there a way to make trader incentives useful and capital-efficient for a protocol?

Reflexions on what could improve the campaign:

1. **Make more noise**.
    - We need to communicate more about the incentives so that there is more competition between traders. If the volume going through Kaskade was multiplied by 5 (even if it’s pure wash trading), we would have increased extra LP rewards thanks to the campaign by a factor of 5. That means that instead of 16% of the incentive budget being redistributed to LPs, it would be 80%.
    - *Note: As it was designed here, the incentives were a fixed amount during a fixed period. On the other hand, there can theoretically be an infinite volume going through Kaskade, splitting the incentives cake. If the market was perfectly adapting in real-time (which we know is not true), the volume should stop increasing whenever it stops being profitable for the trader to do wash trading. Said differently, if many wash traders compete with each other, they will dilute the 10k weekly LUSD rewards and reduce their profitability until reaching an equilibrium where it’s no longer profitable to increase wash trading volume.*

1. **Change the reward structure**: ****
    - The campaign was designed with a fixed incentive budget (30K LUSD) spent during a fixed amount of time (3 weeks). With that structure, there are two possible extremes:
        - Either the campaign does not attract enough users, in which case all the participants eat very well (understand, too well). This is bad because of wasted incentives for not enough volume.
        - Or the campaign attracts too many traders, meaning that the rewards per amount traded are too small and traders don’t cover their costs. This is also bad because those traders won’t come back next time.
    - One way to circumvent this would be to make the rewards a percentage of the volume from the beginning rather than a fixed amount. This would say that we don’t want the efficiency of our investment to depend on the actual volume generated; we just choose our rate of “cash back” in advance and choose a reward amount by $ traded.
        - For example:
            
            *“For each $1K traded, we reimburse $1”*
            
            - It would be more capital efficient than this last campaign, as we paid $4.27 for each $1K traded in Week 2, as shown above (instead of only $1 here).
            - **But** it does cause other problems: if a trader finds a way to be profitable, he can virtually trade an infinite volume, which can turn into an unlimited money glitch.
            - So we could add caps - for example:
            
            *“For each $1K traded, we reimburse $1, and we limit the total reimbursement to $30K.“*
            
            - However, it’s still not perfect. Again, if a trader finds a profitable smart strategy, they could theoretically execute all of their trades in the first seconds of the incentive program and grab 100% of the rewards for themselves.
            - To avoid this, if we want maximum capital efficiency and to distribute the rewards fairly among all market participants, we need to ensure that traders **cannot possibly be profitable by doing wash trading**. For that, the maximum amount we can spend for each $1K of trading is the LP fees.
            
            Something we could try out for a future iteration is:
            
            *“The protocol reimburses the LP fees for the next three weeks.”*
            
            - It’s great for traders, who can trade for a better price. The LPs still make their fees, but the protocol subsidizes them. The protocol also makes sure that the money spent is capital-efficient.
    - Long story short: Another credible approach would be to **subsidize the LP fees to the traders and let the LPs keep their fees. No additional rewards.**
    - Will that incentivize enough people to generate volume? That remains to be proven. Cf point number 1 about making more noise. Announcing “30K LUSD rewards if you do this” is easier to grab attention than announcing “LP fees are reimbursed.”
    
2. **Improve the UX for traders**
    - The campaign did not (yet) attract many genuine crypto traders. Old habits die hard, and it’s not easy to make people change their swapping mode of choice. Uniswap’s UI is still a favorite of many users, after all, despite charging an extra fee.
    - This is a complex topic that would need a whole other article, but here are a few thoughts that could be considered:
        - It would be much easier to attract genuine users if participants could use existing routes that they already use for trading.
        - We would need to generate extra visibility for the trading pair on the existing exchanges/aggregators (“LP fees reimbursed if you trade USDC for LUSD for the next three weeks”).
        - We would need to find a smart and cheap way for traders to recover their LP fees.

### Conclusion

First, we’d like to thank the Kaskade team again for co-incentivizing this test campaign. Liquidity driving is a core expertise at the Collective, and we’re always keen to take innovative new tools for a test run. However, the two main downsides identified before the campaign even started are smilingly not yet sufficiently addressed:

1. **Consequences of the switch from LP to volume incentivization**: while we appreciate this new paradigm, we were afraid from the get-go that volume-based incentivization would result mostly in wash trading — as the data gathered with the LUSD campaign enabled us to confirm.
2. **Competing in the market of trading UI is hard**: for Kaskade's current design to work, it must win in the market of trading UI — meaning traders must use their website for their trades. While the campaign incentives help attract traders, the market is uber-competitive, as it means winning at attracting traders against aggregators (1inch, CowSwap, ParaSwap, Odos, etc.) and DEX websites. Many traders are still using the Uniswap website to trade, despite poor execution and a 0.15% fee — the habits are strong when it comes to trading venues and hard to beat.

We’ll be monitoring the situation and might consider another campaign if these two issues are credibly addressed; meanwhile, we believe the resources of the Collective are best harnessed using other tools: the time for the volume incentivization paradigm shift hasn’t come just yet.

***Note:** The content of the article was shared to the Kaskade team before publishing, and a few precisions were added thanks to their input.*