---
title: "DeFiScan: Updates to the methodology (03/2025)"
meta_title: ""
description: "We discuss updates and clarifications on the DeFiScan methodology."
date: 2025-03-12T12:00:00Z
image: "/images/articles/defiscan-announcement.png"
categories: ["Policy"]
author: "nilsbundi"
tags: ["DeFiScan", "DeFi Risks", "DeFi Maturity", "Decentralization"]
draft: false
---

With the next batch of DeFi protocols reviewed, including Aave, Compound, Uniswap and more, we have identified a number of areas in the DeFiScan framework that require clarifications and/or improvments.

In this post we present the following updates and clarifications:
- Autonomy risk scores to account for decentralization of protocol dependencies
- Security Council to mitigate insufficient Exit Windows in onchain governance
- Security Council requirements to shift from "non-team" to "non-insider" rule

These updates are also reflected in the DeFiScan methodology and will be incorporated in protocol reviews immediately.

## Autonomy risk scores

The Autonomy dimension captures risks from centralization in protocol dependencies. Such dependencies include oracle price feeds in lending protocols, the collateral asset in a CDP, and any other third-party infrastructure that a DeFi protocol is integrated with.

In this update we have revised the centralization risk scores associated with a protocol dependency to reflect **the risk of a failure of a protocol dependency due to centralization in the dependency itself**. 
The updated Autonomy risk scoring methodology thus builds on the existing assessment of the potential impact of a dependency failure:

- High risk: a failure of the dependency may result in the theft or loss of user funds
- Medium risk: a failure of the dependency may result in the theft or loss of unclaimed yield or may otherwise materially change the expected protocol performance
- Low risk: No dependencies or a failure cannot materially change the expected protocol performance

The methodology then continues to assess decentralization of the dependency itself as follows:

- Stage 0, or equivalent, decentralization: 
- Stage 1, or equivalent, decentralization:
- Stage 2, or equivalent, decentralization:

Similar to L2s and DeFi protocols, decentralization of the dependency is seen as a strategy to mitigate centralization risks and should thus be reflected in the Autonomy score.

For instance, consider a lending protocol that relies on an external oracle price feed. If this feed fails, e.g. by pushing an asset price of 0 due to an operational error or an attack, user funds may be lost or frozen thus earning the lending protocol a "High risk" impact score.
Since we here focus on centralization risks, instead of e.g. technical or economic risks, we are interested in reasons for such a failure related to existing permissions and control in the oracle system. 
In the example of an oracle system, centralization may occur if asset prices are determined by a single party or if a single party, or otherwise not sufficiently decentralized set of parties, holds critical permissions in the system such as the permission to upgrade contracts. 

This concept is very similar to how DeFiScan already captures centralization risks exhibited by the underlying chain. 
DeFi protocols inherit centralization risks of their dependencies just like they do for the underlying chain.

In the following table this logic is outlined in the updated Autonomy risk scores.

<table>
  <tr>
   <td>High
   </td>
   <td>Medium
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>Dependencies may cause theft or loss of user funds AND exhibit Stage 0, or equivalent, centralization
   </td>
   <td>Dependencies may cause theft or loss of unclaimed yield, or may otherwise materially change the expected protocol performance, OR dependencies exhibit Stage 1, or equivalent, decentralization
   </td>
   <td>Dependencies (if any) cannot materially change the expected protocol performance, OR dependencies exhibit Stage 2, or equivalent, decentralization
   </td>
  </tr>
</table>


## Role of Security Council in onchain governance

The Security Council, generally speaking a multisig account adhering to certain requirements, is used as an acceptable measure to mitigate certain centralization risks to reach Stage 1 decentralization. 
So far, the framework allowed a DeFi protocol with `High` Upgradeability risk score, or the impact of permissioned functions included *theft or loss of user funds*, to achieve Stage 1 decentralization if control over these permissions was transferred to a Security Council.
Thereby, the requirement to protect ciritical control in the DeFi protocol with an Exit Window was effectively overruled by the existence of the Security Council.

With this update, we expand the role of the Security Council to also offer mitigation to the risk of an insufficient Exit Window in an onchain governance system.
Specifically, if permissions resulting in a `High` Upgradeability risk score are controlled by an onchain governance system with an Exit Window of less then 7 days, then a **Security Council must have the ability to veto proposals** for the DeFi protocol to reach Stage 1.

As a result of this update, the Stage 1 requirements change to:
- '✅ At least a "Medium" risk score for Chain, Autonomy, Accessibility'
- '✅ IF Exit Window receives "High" risk, THEN a Security Council must be in place with ownership of or veto over permissions'

This setup offers similar protections to users than if permissions were controlled by the Security Council. At the same time, it allows DeFi protocols to already initiate steps towards fully handing over control to onchain governance and Stage 2 decentralization.

## Security Council requirements

The objective of the Security Council requirements is to establish a robust, intermediate, governance structure over (critical) protocol permissions. As part of these requirements we have outlined a rule where at least 50% of the signers need to be "non-team" members. Combined with the 51% signer threshold, this results in an update of the protocol to be confirmed by at least 1 "non-team" signer. The objective of this rule is to enforce an outside perspective on each protocol update and reduce the risk of "the team" to push an unintended or malicious update.

With this update, we now expand the requirements for a Security Council to include **at least 50% non-insider signers**. The shift from "non-team" to "non-insider" is motivated by a lack of clarity around the term "team" and a push to strengthen the integrity of a Security Council as an objective and robust intermediate governance unit. The latter is also informed by various discussions with DeFi teams and (recent) observations on governance practices.

The updated Security Council requirements thus are:
- At least 7 signers
- At least 51% threshold
- At least 50% non-insider signers
- Signers are publicly announced (with name or pseudonym)

Thereby, we define an "insider" as any party of the "inner circle" of individuals or entities developing, maintaining and operating the protocol, such as the "team members" or a company, and its employees, mandated to perform certain services. On the other hand, an "outsider" thus is any individual or company free of a direct conflict of interests.

## Affected DeFiScan reviews

No existing review is affected by this update.