---
title: "DeFiScan: Updates to the methodology"
meta_title: ""
description: "We discuss updates and clarifications on the DeFiScan methodology."
date: 2024-12-12T12:00:00Z
image: "/images/articles/defiscan-announcement.png"
categories: ["Announcement"]
author: "nilsbundi"
tags: ["DeFiScan", "DeFi Risks", "DeFi Maturity", "Decentralization"]
draft: false
---

In October we have introduced DeFiScan - a new framework and database for the analysis and monitoring of the maturity and risks of DeFi infrastructure in a verifiable manner.

Within the first weeks we have assessed and published reviews on various DeFi protocols on the DeFiScan [website](https://defiscan.info). While conducting the analyses, we identified a number of aspects that require clarification or improvement to adequately understand and reflect the maturity of a DeFi infrastructure.

In this post, we present these learnings and enhancements to the DeFiScan framework. Finally, we discuss how the updates affect the results for the existing protocol reviews.

## Failure to meet Stage 0 requirements

The Stage 0 requirements set some fundamental properties common to all DeFi protocols. The objective is to define the basic technological requirements based on which the maturity of DeFi protocols can be assessed. Any protocol not fulfilling these requirements A) is not considered a "financial" application, B) lacks a "decentralized" basis, or C) cannot be assessed because important information is not publicly available.

We find two challenges with this:

1) In a number of cases, we found that protocols fail to meet a subset of the requirements simply because of an oversight or not being aware of the significance of it. As an example, we found reputed projects which are clearly built and operated following the outlined principles but e.g. missed verification of a smart contract. While the analysis cannot be completed in this case, the existing results can still add value to users.

2) The classification of non-DeFi protocols, or DINO protocols, is implicit rather then explicit. Because DeFiScan only analyzes protocols that fulfill the Stage 0 requirements, users have no information on DINO protocols and the reason why they fail the Stage 0 "test". On the other hand, listing DINO protocols and the requirements they fail to meet makes this classification explicit and adds further transparency.

**Updates to the methodology**

In order to address the first challenge, we introduce a new stage, "Review", which indicates that the review for a DeFi protocol cannot be completed and, as a result, the stage cannot be assigned. This can be the case when conducting the initial review or when the conditions of an existing protocol change and a reassessment is needed.

Acceptable reason for the use of this stage are:
- Public documentation is missing or incomplete but the team is working on a fix
- Source code, or parts thereof, are not publicly available but the team is working on a fix
- Peripheral smart contracts, but not the core contracts, are not verified on a public block explorer but the team is working on a fix

Note that the acceptable reasons do not include a failure to meet other requirements. Furthermore, it is assumed that the "Review" stage is only a temporary status which is rectified by the team within a reasonable time window.

> 🚨We are still in the process of discussing additional updates to the methodology and a possible Stage for DINO projects which fail to meet fundamental Stage 0 requirements.

## Defining the protocol scope

Often times DeFi protocols consist of different "components" representing different abstraction layers. It is commont to separate these into two main groups, the "core" and "peripheral" contracts. The core contracts implement the main state and business logic of the DeFi protocol while the peripheral contracts add additional functionality that simplifies users interactions and overall UX. 

We have thus engaged in many constructive conversations around which parts of a DeFi protocol are to be considered "in scope" for the analysis vs which are "out of scope". While we were not able to identify a "one-size-fits-all" answer to this question, we here provide a definition of the protocol scope that we found very usefull in most cases.

**Updates to the methodology**

The scope of a DeFi protocol relevant to analyze its stage of decentralization is defined as

*A set of smart contracts that:* 
- Is tightly integrated, or interacts through various cross-contract calls
- Forms a cohesive UX where all contracts combined effectively give access to the underlying financial service
- Is developed, maintained and marketed by the same team

This definition implies that the protocol scope does not only include the core contracts but also peripheral contracts if users effectively cannot access the protocol without these and if they are developed, maintained and marketed as part of the offering by the same team.

## Impact of missing Exit Window

An important dimension of the DeFiScan framework is the *Exit Window*. It ensures that protocol upgrades and parameter updates are delayed by a certain period within which users are able to safely withdraw funds or otherwise exit their positions in case of an unwanted change.

Currently, the framework applies scores in this category in isolation from the underlying changes, that can be made to the protocol and should be delayed by the Exit Window. That means, an Exit Window score of "High" risk is assigned irrespective of the potential impact of a protocol update. This can result in an unproportional overall risk score compared to the effective impact of existing protocol permissions. 

**Updates to the methodology**

Instead of assigning the Exit Window risk score in isolation, the methodology now couples the remaining risks, due to the existence or absence of an Exit Window, to the achieved Upgradeability score of a protocol. 

Specifically, the Exit Window risk score is applied as follows:

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
   <td>Upgradeability score is "High" AND permissions are NOT protected with an exit window or the exit window is less than 7 days
   </td>
   <td>Upgradeability score is "Medium" OR permissions are protected with an exit window of at least 7 days
   </td>
   <td>Upgradeability score is "Low" OR permissions are transferred to an on-chain governance process AND protected with an exit window of at least 30 days
   </td>
  </tr>
</table>

This means that the Exit Window score is based on the Upgradeability score and can improve the same if appropriate governance and update delay functions are implemented. Thereby, the Exit Window score reflects remaining risks relative to the potential impact of the underlying permissions.

## New DeFiScan results

Based on the changes to the DeFiScan framework, a number of protocol reviews and results are updated:

- Aerodrome: Exit Window score is now "Medium" (previously "High")
- Velodrome-v2: Exit Window score is now "Medium" (previously "High"), Stage is 1 (previously 0)
- Maverick-v2: Stage is now "Review" due an unverified contract (MaverickV2Factory)