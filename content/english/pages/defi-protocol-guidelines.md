---
title: "DeFi Protocol Guidelines v1 (April 17, 2024)"
meta_title: "The DeFi Collective - DeFi Protocol Guidelines"
description: "The DeFi Protocol Guidelines provide a comprehensive framework for the characterization of Genuine DeFi systems and the identification of On-chain CeFi services."
draft: false
---


## Summary

The DeFi Collective’s mission is to advance the decentralization of financial infrastructure. The DeFi Protocol Guidelines outline a comprehensive framework for the distinction between decentralized finance infrastructure (Genuine DeFi) and blockchain-based, centralized financial services (On-chain CeFi). This assessment is critical for the DeFi Collective's mission and the allocation of support to value-aligned (Genuine) DeFi systems. 


## Objectives

DeFi systems are motivated by the idea, that a public technology can replace the various intermediaries in the traditional financial services industry. Centralized counterparties are therefore replaced by protocols and software code in order to create a more open, robust, and transparent financial infrastructure. Genuine DeFi systems promise a more accessible, reliable, and secure financial system. On the other hand, On-chain CeFi services offer decentralization and its benefits "only on paper" and thus potentially expose users to unknown risks. The DeFi Protocol Guidelines provide a comprehensive framework for the assessment of Genuine DeFi systems and their eligibility for support by the DeFi Collective.


## Methodology

Our methodology builds on two main concepts. First, DeFi systems are composed of different technological layers on which centralization can occur. Second, centralization manifests in the ability of certain counterparties to exercise control in a financial technology. This control can be characterized in few distinct centralization vectors. We thus propose a set of qualitative criteria aimed at identifying centralization vectors on the various layers of a DeFi system. These criteria are summarized in the following table.

<table>
  <tr>
   <td rowspan="2" >Centralization Vector
   </td>
   <td colspan="4"; style="text-align: center" >DeFi Layer
   </td>
  </tr>
  <tr>
   <td>Settlement
   </td>
   <td>Asset
   </td>
   <td>Protocol
   </td>
   <td>Application
   </td>
  </tr>
  <tr>
   <td>Technology
   </td>
   <td colspan="3" >Public access to all functions without restrictions or privileges implemented for certain counterparties 
   </td>
   <td>Use of application is optional and user is not “locked in” in a single (instance of an) application
   </td>
  </tr>
  <tr>
   <td>Governance
   </td>
   <td colspan="3" >Coordination around system updates (blockchain forks, parameter updates, etc.) is implemented in a public and transparent governance process including:
<ul>

<li>public access allowing anyone to participate

<li>public coordination tools, e.g. “forum”, “voting system”, etc

<li>ability to “opt-out” of system updates, e.g. through timelocks
</li>
</ul>
   </td>
   <td>N/A 
<p>
(application including updates is “opt-out” by design)
   </td>
  </tr>
  <tr>
   <td>Transparency
   </td>
   <td colspan="4" >All relevant information on the DeFi system and its dependencies is publicly accessible, including:
<ul>

<li>Source code (under a license that grants unrestricted non-commercial use)

<li>Security audits, including scope, identified vulnerabilities and mitigation measures, are published and unaudited components of the system, including risks arising out of the fact that these components were not audited, are prominently published

<li>Documentation covering all assumptions, concepts, and protocol functions 

<li>Declarations around risks, fees, and other provisions
</li>
</ul>
   </td>
  </tr>
</table>


## Decentralization Status and Eligibility

In practice, _full_ decentralization is often achieved after an initial period with certain centralization vectors still active. For a blockchain, this can be explained by the fact that decentralization involves attracting a diverse set of network nodes participating in the consensus mechanism. Or, for a DeFi system there may be good reasons to revoke control over certain security related functions only after an initial bootstrapping period. We account for this by assessing and monitoring a DeFi system's _decentralization status_. Eligibility for support by the DeFi Collective is restricted to decentralization milestones if a system is not yet fully decentralized. 

<table>
  <tr>
   <td rowspan="2" >
   </td>
    <td colspan="3"; style="text-align: center" >Status
   </td>
  </tr>
  <tr>
   <td>Genuine DeFi
   </td>
   <td>Monitoring
   </td>
   <td>On-chain CeFi
   </td>
  </tr>
  <tr>
   <td>Qualification
   </td>
   <td>The system adheres to the criteria outlined in the Genuine DeFi Classification System
   </td>
   <td>The system exhibits centralization vectors but has a measurable decentralization strategy in place
   </td>
   <td>The system exhibits centralization vectors without a measurable decentralization strategy in place
   </td>
  </tr>
  <tr>
   <td>Eligibility
   </td>
   <td>Yes
   </td>
   <td>Conditional on milestones
   </td>
   <td>No
   </td>
  </tr>
</table>


## Discussion


### DeFi Layers

Blockchain-based financial technology builds on different technological layers. [Schär](https://doi.org/10.20955/r.103.153-74) proposes a “DeFi Stack” that consists of five layers: Settlement (blockchain), Asset (tokens), Protocol (smart contracts), Application (user interface), and Aggregators (applications that integrate with various DeFi systems). These layers prove very helpful in assessing where centralization vectors in a DeFi system occur and what the associated risks for users are. Our methodology builds on these layers, with the simplification of combining Schär’s Aggregator and Application layers as one can argue that the former is a special case of the latter. 

Furthermore, a discussion of centralization risks in the respective layers can be found in [Schuler et al](https://doi.org/10.1093/jfr/fjad014) and is summarized here:

The **Settlement Layer** is the foundational technology piece underpinning any DeFi system. Centralization on the settlement layer can occur by restricting access to certain data on and functions of the blockchain, lacking a (technically and factually) distributed consensus, or having only a single client implementation. Centralization is directly inherited by the layers above.

The **Asset Layer** refers to the economic value captured through standardized token smart contracts. DeFi systems often use system-native tokens and typically integrate with a variety of other tokens. Centralization occurs, similar to the Protocol Layer, when there is control over permissioned functions of a token smart contract (e.g., freezing balances or minting additional supply) or over an underlying off-chain asset through a legal construct (RWAs).

The **Protocol Layer** represents the various smart contracts that form the business logic of a DeFi system and are deployed on the settlement layer. Centralization on this layer is found in the form of permissioned functions enabling restricted or privileged access to the DeFi system for certain counterparties (for upgrading, whitelisting, etc).

The **Application Layer** refers to the off-chain user interfaces that facilitate interactions with a DeFi system but do not grant access to users' assets. A critical assumption is that the use of an interface is optional and only intended to simplify user interactions with the system’s Protocol Layer. Thereby, these interfaces generally assists users in expressing their intended interaction with the Protocol Layer as a transaction payload that users then sign and broadcast to the Settlement Layer. This introduces various risks for users including unintended behavior due to improper or incomplete information and the possibility for fraudulent transaction payloads unknowingly signed by users.  


### Centralization Vectors

Genuine DeFi systems employ public blockchain and smart contract technology in order to eliminate all intermediaries with some form of central control. On the other hand, the existence of central control in a blockchain-based financial technology renders this an On-chain CeFi service. A _Centralization Vector_ thus is any form of central control exercised by a single or group of counterparties within a DeFi system.

In general, three centralization vectors can be found in blockchain-based financial technology: 

**Technology** relates to the technical layers, such as the implementation and operation of the blockchain, smart contracts or user interface, of a DeFi system. Centralized control in the technical layers generally pertains to “permissioned” functions with restricted or privileged access given to individual or groups of counterparties. Note, however, that the concept of “permissioned” functions as used here should not be confused with the implementation of restricted access within e.g. a system of smart contracts. In many systems such restrictions are in place to control access to critical system functions, e.g. the minting of a DeFi stablecoin requires another module ensuring that collateral is deposited. A centralization vector on the technical layer involves that such permissions are given to individual or groups of counterparties (as opposed to other smart contracts). The existence of restricted or privileged access is characteristic to Onchain CeFi systems leveraging blockchain technology to decentralize some system components but keeping control over others. In contrast, Genuine DeFi systems do not expose such restricted or privileged access.  

**Governance** addresses the process through which the community coordinates around discrete system updates. Such updates encompass simple parameters like Uniswap’s fee switch, or critical smart contract upgrades. In a Genuine DeFi system this process is public, meaning that everyone has the ability to; 1) follow and participate in the relevant discussions (e.g. through a public “Forum”), 2) propose new updates and review proposed updates (e.g. through a public code repository), 3) participate in the decision making around implementing proposed updates (e.g. by means of a “voting system”), 5) implement an “approved” update (i.e. the responsibility of implementing an update is not delegated to a central counterparty). Finally, this process also allows users to “opt out” of an update e.g. by withdrawing assets before the update is implemented (e.g. through a “timelock”).

**Transparency** pertains to the publication and accessibility of all relevant information regarding a DeFi system. This includes appropriate documentation about the available functions, the source code of the various components and dependencies across the DeFi layers, and the publishing of adequate disclaimers around risks, fees and all other relevant provisions. Absence of this transparency creates information asymmetry which ultimately enables centralized control in a system.


### Systemic Dependencies

The DeFi Layers discussed above establish a hierarchical structure of DeFi systems where components built on one layer inherit the characteristics of all layers below. As an example, the smart contracts on the Protocol layer may be free from centralization vectors. If, however, the underlying blockchain, or the Settlement layer respectively, is controlled by a central counterparty this still renders the overall technology an On-chain CeFi system. It is thus important to assess a system’s dependencies within and across layers in order to fully comprehend its decentralization status.

Depending on the function of such a dependency, centralization vectors can have different consequences for its users. For instance, Mochi DAO’s USDM stablecoin (now defunct) was highly centralized giving individuals the privilege of minting unbacked coins which was used in an attempted [governance attack](https://www.coindesk.com/business/2021/11/11/curve-wars-heat-up-emergency-dao-invoked-after-clear-governance-attack/) on Curve DAO. If central functions of a DeFi system depend on the USDM stablecoin and are affected by failures thereof, then this system itself is exposed to the same centralization vectors. An example for this inheritance would be a decentralized stablecoin backed by USDM or derived assets. Solvency and peg of this decentralized stablecoin depend on its backing and thus inherit the respective centralization vectors.  On the other hand, if the dependency is contained in a “local” system context and a failure does not affect its overall performance, then the centralization vector too is not inherited. Following the USDM example above, this can be found e.g. in an isolated DEX liquidity pool, such as Uniswap’s, where even if the pool is affected by a failure of one of its assets, the DEX system continues to function properly. 

To account for this, we introduce the notion of _systemic_ and _non-systemic_ dependencies. Systemic dependencies are central to the proper functioning of the entire DeFi system, and a malfunction or exploit can have a critical impact on all functions of the system. Non-systemic dependencies do not serve a central function; a potential failure only has a limited impact on the system and its users. A Genuine DeFi system does not exhibit centralization vectors inherited from systemic dependencies. 


### Decentralization Status

Decentralization is generally a desired end-state and only achievable over time. It involves, among other things, the growth of a community of active participants on the various layers of a Genuine DeFi system, diversification of tooling, and revoking privileged access to certain functions kept during a guarded launch. The decentralization status captures the maturity of a Genuine DeFi system’s _Decentralization Strategy_. This strategy involves the identification of existing centralization vectors, steps required to eliminate these and a respective timeline with measurable milestones. An active decentralization strategy and the successful achievement of the formulated milestones are monitored until all centralization vectors are eliminated and the system complies with the Genuine DeFi Classification Framework.
