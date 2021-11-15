+++
title = 'Understanding Patient-Based Real-Time Quality Control Using Simulation Modeling.'
date = "2020-08-01"
tags = [
    "Laboratory Medicine",
    "Medical Informatics",
	"PBRTQC"
]
+++
Background: Patient-based real-time quality control (PBRTQC) avoids limitations of traditional quality control methods based on the measurement of stabilized control samples. However, PBRTQC needs to be adapted to the individual laboratories with parameters such as algorithm, truncation, block size, and control limit.

Methods: In a computer simulation, biases were added to real patient results of 10 analytes with diverse properties. Different PBRTQC methods were assessed on their ability to detect these biases early.

Results: The simulation based on 460 000 historical patient measurements for each analyte revealed several recommendations for PBRTQC. Control limit calculation with "percentiles of daily extremes" led to effective limits and allowed specification of the percentage of days with false alarms. However, changes in measurement distribution easily increased false alarms. Box-Cox but not logarithmic transformation improved error detection. Winsorization of outlying values often led to a better performance than simple outlier removal. For medians and Harrell-Davis 50 percentile estimators (HD50s), no truncation was necessary. Block size influenced medians substantially and HD50s to a lesser extent. Conversely, a change of truncation limits affected means and exponentially moving averages more than a change of block sizes. A large spread of patient measurements impeded error detection. PBRTQC methods were not always able to detect an allowable bias within the simulated 1000 erroneous measurements. A web application was developed to estimate PBRTQC performance.

Conclusions: Computer simulations can optimize PBRTQC but some parameters are generally superior and can be taken as default.


https://doi.org/10.1093/clinchem/hvaa094 