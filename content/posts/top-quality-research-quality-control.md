+++
title = 'Top quality research on quality control'
date = "2018-07-11"
tags = [
    "Laboratory Medicine",
    "PBRTQC"
]
+++

{{< figure src="/images/IVAR-TRAUTSCHOLD-AWARD.jpg">}}

I have received the [“Ivar Trautschold award for the promotion of young scientists”](https://www.dgkl.de/en/die-dgkl/awards/ivar-trautschold-nachwuchsfoerderpreis/) from the [German Society for Clinical Chemistry and Laboratory Medicine (DGKL)](https://www.dgkl.de) for my work on quality control.

As I pointed out in my award speech, quality control in laboratory medicine should be patient-oriented. Instead of determining laboratory artifacts, it should reduce real risk for patients. Furthermore, quality control methods should be able to distinguish precisely between normal and out-of-control situations. A specific method should attribute errors to root causes to facilitate their quick correction. Lastly, quality control methods need to be easily integrable into laboratory daily routine.

In Germany, internal quality control relies primarily on the evaluation of single measurements of quality control samples. These methods can be easily integrated into laboratory routine, as sample material is commercially readily available. However, lack of commutability can severely reduce their informative value. Other methods such as “medians”, or “averages of normal” use patient measurements directly. They have no commutability problems but require a large number of measurements. To take advantage of both approaches, results can be transformed into Z-scores or Z-values. Z-values can then be evaluated with Westgard-like rules or with a new method called “Aggregated Z-values” that works similar to a mean of Z-Values. In a computer simulation (https://github.com/acnb/rSimLab), Westgard-like rules and “Aggregated Z-Values” were able to detect biases better than single medians or single quality control measurements. Aggregated Z-values performed better than Westgard-like rules if a bias affected quality control measurements unevenly.

To evaluate external quality controls, I retrieved glucose data from the two German External Quality Assessment (EQA) organizations [“Instand”](https://www.instand-ev.de/) and [“Reference Institute for Bioanalytics”](https://www.rfb.bio). For both point-of-care testing and measurements performed in central laboratories, the device had the highest influence on measurement performance. In over 10% of the analyzed cases, measurements with the same device but different test strip lots deviated substantially. Although device and test strip lot have such a great influence on measurement performance they are only poorly recorded in the analyzed EQAs. For historical reasons, both organizations still use simple tables that often only contain broad device groups to encode a device. However, the ability of EQAs to contribute to standardization, harmonization, and post-market surveillance is severely limited if faulty devices cannot be correctly identified. Therefore international standards such as the [“Global Unique Device Identification Database“](https://accessgudid.nlm.nih.gov/) by the FDA might be a better alternative to specifically encode device and lots. Another challenge for EQAs is the lack of commutable ring trial materials. Without commutable samples, evaluation according to reference method values is not possible and the EQAs have to resort to so-called device specific consensus values as target values. The calculation of these consensus values removes biases. Therefore, passing an EQA with consensus values might be easier than intended because the performance specifications are aggregate both bias and imprecision. In my talk, I stressed the need to develop commutable material for EQA.

These are the two papers I submitted to apply for the prize:

- Bietenbeck, Andreas, et al. "Stronger Together: Aggregated Z-values of Traditional Quality Control Measurements and Patient Medians Improve Detection of Biases." Clinical chemistry (2017): clinchem-2016. https://doi.org/10.1373/clinchem.2016.269845
- Bietenbeck, Andreas, et al. "External quality assessment schemes for glucose measurements in Germany: factors for successful participation, analytical performance and medical impact." Clinical Chemistry and Laboratory Medicine (CCLM) (2018): https://doi.org/10.1515/cclm-2017-1142
