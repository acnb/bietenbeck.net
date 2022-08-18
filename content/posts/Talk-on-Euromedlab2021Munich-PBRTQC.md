+++
title = 'Talk on Euromedlab 2021 in Munich: PBRTQC IMPLEMENTING INTO ROUTINE PRACTICE – VALIDATION AND SIMULATION.'
date = "2022-04-13"
tags = [
    "Laboratory Medicine",
	"PBRTQC"
]
+++
Covid has led to Euromedlab 2021 in Munich being rescheduled to 2022. These are my slides for a talk on PBRTQC. 

## Abstract
Patient-based real-time quality control (PBRTQC) has proven to detect clinically relevant measurement errors that were missed by traditional quality control procedures. However, PBRTQC is less well established. Computer simulations have uncovered the basic properties of PBRTQC and facilitate implementation into routine practice.

PBRTQC works best for analyses with a large number of daily measurements and a small spread of results. Seasonal (or other extra-analytical) variations impede error detection. Winsorization of outlying measurements and Box-Cox transformation often lead to better performance. Moving mean, moving average and exponentially weighted moving average detect a bias comparably. PBRTQC detects increased imprecision less well but the moving standard deviation is a suitable algorithm. Regression-Adjusted Real-Time Quality Control removes small daily variations mathematically to significantly improve the detection of large biases. Extra-analytical factors (e.g. patient population) influence PBRTQC. Therefore computer simulations (such as the free open-source application https://pbrtqc.bietenbeck.net) are needed to fine-tune PBRTQC parameters and estimate performance for each laboratory.
Further research will further enhance understanding of PBRTQC. It is already a valuable addition to a sophisticated quality control strategy that detects errors rapidly and cost-efficiently.

## References:
* van Rossum, H.; van den Broek, D. JALM (2020); https://doi.org/10.1093/jalm/jfaa071  
* Bietenbeck, A. et al. Clin Chem (2020); https://doi.org/10.1093/clinchem/hvaa094  
* Duan, X. et al Clin Chem (2021); https://doi.org/10.1093/clinchem/hvab115  

## Slides

[PBRTQC - Implementing into routine practice - validation and simulation](/talks/2204013-PBRTQC-AndreasBietenbeck.pdf)