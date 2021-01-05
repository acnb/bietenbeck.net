+++
title = 'Learning Health Systems and Laboratory Medicine'
date = "2018-09-02"
tags = [
    "Laboratory Medicine",
    "Medical Informatics"
]
+++

## Introduction
Health systems worldwide struggle to provide optimal care. Increasingly, evidence generation in medicine falls behind the rapid pace of scientific progress and structural changes. Clinical decision-making is therefore often underinformed resulting in suboptimal outcomes. As a remedy, the Institute of Medicine has proposed the development of Learning Health Systems (LHS). These systems are defined as entities in which progress in science, informatics, and care culture align to generate new knowledge as an ongoing, natural by-product of the care experience, and seamlessly refine and deliver best practices for continuous improvement in health and health care [1]. LHS are often associated with large entities such as integrated managed care organization [1]. However, some LHS projects like the Connected Health Cities (CHC) program  in the North of England are smaller and have a limited regional scope. Other LHS focus on a certain medical sector such as ambulatory care from general practitioners [2].
In an LHS, all relevant stakeholders must trust the system, participate in a shared manner and obtain something valuable in return [3]. Because of its contributions to almost all medical diagnoses, laboratory medicine constitutes a central stakeholder. In this paper, we analyze the role of laboratory medicine, to better understand obstacles and opportunities for creating and maintain a successful LHS.

## Methods
We searched leading journals of laboratory medicine for papers that describe initiatives resembling a LHS. Additionally, we reviewed publications about LHS in major medical
informatics journals and examined the role of laboratory medicine.
The identified systems were analyzed according to five categories [4; 5]: Scope encompasses the spatial scope (e.g. regional, national, international), the scope regarding medical specializations (mono-, multidisciplinary), and the scope of stakeholders (patients, industry). The category enabling technologies describes innovations that made the success of an LHS possible. The architecture for evidence generation deals with the pipelines that connect data generators, information transformers, and knowledge consumers. These pipelines can be unidirectional or contain feedback loops [4].  The data-action latency is the time lag between data being available that an action should be taken and the action being taken [4]. Social aspects cover topics such as trust in the LHS and stability of the system [5].

## Results
Laboratory Measurements are Important Data in Large LHS
Large integrated managed care systems such as Kaiser Permanente or the Veterans Administration have adopted the notion of a LHS to a large extent. Treatment data are routinely stored in comprehensive electronic health records and clinical data warehouses, analyzed by teams of data analysts and used as a basis for improvement [6]. In Kaiser Permanente, the Laboratory-based Acute Physiology Score (LAPS) integrates 14 laboratory tests into a single variable to predict inpatient mortality. This score has been used for quality improvement efforts and for internal case-control studies [7].
Integrated managed care systems connect many stakeholders to enable holistic patient care. However, the LAPS score and other applications of laboratory data often regard measured values as the true representation of the patient’s status. Possible measurement errors are predominantly seen as a data integrity issue [8]. Important questions in laboratory medicine e.g. regarding the effect of measurement accuracy are rarely addressed. In a LHS organized within a single entity evidence pipelines are often bidirectional. Some large LHS share their evidence in the form of traditional publications.


## External Quality Assessments Schemes Act As a Learning Health System for Medical Laboratories
External quality assessments (EQAs) were introduced in laboratory medicine in the 1960s [9]. In short, EQA organizations send samples containing a known amount of the analyte in question to participating laboratories. These participants measure the analyte and return the result to the EQA organizer. Only if the results deviate less than a certain limit from the known true value the participation is considered successful. In some countries like Germany regular and successful participations are required for medical laboratories to operate. Data from EQA are often reused for other purposes than quality control of individual laboratories thereby forming a learning system of laboratories. Especially for emerging methods, a comparison of different laboratories and their analytical approach identified methods that are not fit for purpose [10]. For more established procedures data from EQAs are used for post-marketing surveillance of analytic devices and reagent lots. It allows stakeholders such as international organizations, governments, scientific societies, manufacturers to take corrective action when EQAs indicate suboptimal measurements [9].
The scope of EQAs regarding medical specialties is limited as they only address medical laboratories and closely related shareholders. Their spatial scope, however, is impressive. For example, Instand e.V. sends samples from Germany to participating laboratories in over 70 countries. EQAs, therefore, benefit from improved logistics. Unidirectional evidence pipelines predominate as EQA organizations send their findings to participants as part of regular, publicly available reports. Feedback is usually collected in an unstructured way only. Evidence generated from the analysis of data spanning several years is reported in form of research publications. Although EQAs usually do not use patient samples raw EQA data is typically not shared or published  [11]. EQAs have proved their success in decades of operations and enjoy a high level of trust.


## Emerging Tools Use Increased Connectivity
In recent years a number of tools emerged that reuse aggregated results of patient measurements to detect analytical errors. The “Empower” project is an online platform that allows participating laboratories worldwide to send in the daily median of all patient results of several analytes. The platform analyses these medians and compares them across different analytic devices to detect wrong calibrations or faulty reagent lots [12]. In a similar project, the German Reference Institute for Bioanalytics has introduced the “Preanalytical Benchmark Database” to compare data on hemolytic samples across laboratories and to take corrective action .
Some manufacturers of analytical devices further created platforms that make use of wearable devices and increased connectivity. For example, some glucometers for continuous measurements regularly upload data to cloud platforms. These measurements are then presented to patients in a dedicated app or via a special website to enhance their understanding. Manufacturers can additionally reuse this data to detect errors and to improve their products.
The scope of these learning systems is limited to laboratories or even users of a single analytic device, but there are no spatial restrictions. These new platforms were enabled by improved networking technology, wearable devices, and ubiquitous connectivity. In line with the “network effect” the ability of these platforms to generate evidence increases in proportion to the number of users. Because the “Empower” project and “Preanalytical Benchmark Database” are operated by established scientific organizations, trust is high. For some continuous glucose monitors, continuous sharing of measurements and other data with the manufacturer is mandatory, although serious security and privacy risk exist [13].

## Discussion  
Many LHS continuously reuse their existing data from laboratory medicine to generate new evidence. Comprehensive data from large integrated managed care delivery systems could in turn help laboratory medicine to determine necessary analytical performance for optimal patient care [14]. Measurements should be standardized not only within individual organizations but worldwide [15].
Many smaller entities that reuse laboratory data are usually not recognized as LHS because they are narrowly focused on topics that arise in laboratories. Spatially, however, many of these networks cross national borders or even operate worldwide.
Especially EQAs have operated successfully over several decades. To benefit other medical specialties, raw data should be shared more freely. Because no patients are involved, anonymization of participants significantly reduces the potential for data misuse. A standardized encoding of analytes [16] and especially of devices might enhance reusability. The concept of EQAs might be extended to other adjacent areas. Accordingly, an EQA introduced a scheme to examine electronic laboratory reports [17].
Newer projects that make use of increased connectivity and wearable devices showed promising results. But when platforms process patient-level data they need to ensure that patients are able to make an informed decision about whether benefits outweigh the risks. Emerging technologies, in particular Differential Privacy, could be leveraged to enable manufacturers and the scientific community to learn from aggregated data with very little privacy risks [18]. Moreover, scientific communities should consider building similar infrastructures to remain able to evaluate newer devices such as continuous glucometers. Further continuous measurements and related analyses from the “quantified self” movement are likely to gain more importance. These new platforms will also connect experts from laboratory medicine with patients directly.
As noted before, LHS also have a social component [5]. The successful LHS in laboratory medicine usually enjoy a high degree of trust and follow undisputed goals. Initiatives that include specialist from other disciplines have been less successful [19]. Sociological factors might not be appreciated enough when building LHS [4]. 

## Conclusion
LHS platforms in laboratory medicine need to be recognized and incorporated into larger systems of systems to generate the best evidence. Further research is required to examine if similar LHS exists in other medical specialties as well. To identify opportunities and obstacles for building and maintaining successful LHS, the potential roles and interests of the individual stakeholders need to be understood also on the fine-grained level of individual departments and functional units of healthcare organizations.

## Conflict of Interest
None.


## References

[1]    Institute of Medicine (IOM). Digital Infrastructure for the Learning Health System: The Foundation for Continuous Improvement in Health and Health Care: Workshop Series Summary, in: Digital Infrastructure for the Learning Health System: The Foundation for Continuous Improvement in Health and Health Care: Workshop Series Summary, C. Grossmann, B. Powers,  and J.M. McGinnis, eds., Washington (DC), 2011.

[2]    B. Brown, L. Smeeth, T. van Staa, and I. Buchan, Better care through better use of data in GP-patient partnerships, Br J Gen Pract 67 (2017), 54-55.

[3]    S. Denaxas, C.P. Friedman, A. Geissbuhler, H. Hemingway, D. Kalra, M. Kimura, K.A. Kuhn, T.H. Payne, F.G. de Quiros, and J.C. Wyatt, Discussion of "Combining Health Data Uses to Ignite Health System Learning", Methods Inf Med 54 (2015), 488-499.

[4]    J. Ainsworth and I. Buchan, Combining Health Data Uses to Ignite Health System Learning, Methods Inf Med 54 (2015), 479-487.

[5]    C. Friedman, J. Rubin, J. Brown, M. Buntin, M. Corn, L. Etheredge, C. Gunter, M. Musen, R. Platt, W. Stead, K. Sullivan, and D. Van Houweling, Toward a science of learning systems: a research agenda for the high-functioning Learning Health System, J Am Med Inform Assoc 22 (2015), 43-50.

[6]    C. Chen, T. Garrido, D. Chock, G. Okawa, and L. Liang, The Kaiser Permanente Electronic Health Record: transforming and streamlining modalities of care, Health Aff (Millwood) 28 (2009), 323-333.

[7]    G.J. Escobar, J.D. Greene, P. Scheirer, M.N. Gardner, D. Draper, and P. Kipnis, Risk-adjusting hospital inpatient mortality using automated inpatient, outpatient, and laboratory databases, Med Care 46 (2008), 232-239.

[8]    J. Kupersmith, J. Francis, E. Kerr, S. Krein, L. Pogach, R.M. Kolodner, and J.B. Perlin, Advancing evidence-based care for diabetes: lessons from the Veterans Health Administration, Health Aff (Millwood) 26 (2007), w156-168.

[9]    F. Ceriotti, The role of External Quality Assessment Schemes in monitoring and improving the standardization process, Clin Chim Acta 432 (2014), 77-81.

[10]    V. Haselmann, P. Ahmad-Nejad, J. Geilenkeuser Wolf, A. Duda, M. Gabor, R. Eichner, S. Patton, and M. Neumaier, Results of the first external quality assessment scheme (EQA) for isolation and analysis of circulating tumour DNA (ctDNA), Clinical Chemistry and Laboratory Medicine 56 (2018), 220.

[11]    A. Bietenbeck, W. Geilenkeuser, F. Klawonn, M. Spannagel, M. Nauck, A. Petersmann, M. Thaler, C. Winter, and P. Luppa, External Quality Assessment schemes for glucose measurements in Germany: Factors for successful participation, analytical performance, and medical impact, Clinical Chemistry and Laboratory Medicine (2018).

[12]    K. Goossens, K. Van Uytfanghe, P.J. Twomey, L.M. Thienpont, and L. Participating, Monitoring laboratory data across manufacturers and laboratories--A prerequisite to make "Big Data" work, Clin Chim Acta 445 (2015), 12-18.

[13]    K.E. Britton and J.D. Britton-Colonnese, Privacy and Security Issues Surrounding the Protection of Data Generated by Continuous Glucose Monitors, J Diabetes Sci Technol 11 (2017), 216-219.

[14]    S. Sandberg, G. Fraser Callum, R. Horvath Andrea, R. Jansen, G. Jones, W. Oosterhuis, H. Petersen Per, H. Schimmel, K. Sikaris, and M. Panteghini, Defining analytical performance specifications: Consensus Statement from the 1st Strategic Conference of the European Federation of Clinical Chemistry and Laboratory Medicine, Clinical Chemistry and Laboratory Medicine 53 (2015), 833.

[15]    W. Greg Miller, G.L. Myers, M. Lou Gantzer, S.E. Kahn, E.R. Schonbrunner, L.M. Thienpont, D.M. Bunk, R.H. Christenson, J.H. Eckfeldt, S.F. Lo, C.M. Nubling, and C.M. Sturgeon, Roadmap for harmonization of clinical laboratory measurement procedures, Clin Chem 57 (2011), 1108-1117.

[16]    M.C. Lin, D.J. Vreeman, and S.M. Huff, Investigating the semantic interoperability of laboratory data exchanged using LOINC codes in three large institutions, AMIA Annu Symp Proc 2011 (2011), 805-814.

[17]    T. Badrick, S. Gay, E.J. McCaughey, and A. Georgiou, External Quality Assessment beyond the analytical phase: an Australian perspective, Biochem Med (Zagreb) 27 (2017), 73-80.

[18]    F.K. Dankar and K.E. Emam, Practicing Differential Privacy in Health Care: A Review, Trans. Data Privacy 6 (2013), 35-67.

[19]    G. Thue and S. Sandberg, Analytical performance specifications based on how clinicians use laboratory tests. Experiences from a post-analytical external quality assessment programme, Clinical Chemistry and Laboratory Medicine 53 (2015), 857.
 
This article is published online with Open Access by IOS Press and distributed under the terms of the Creative Commons Attribution Non-Commercial License 4.0 (CC BY-NC 4.0).
https://doi.org/10.3233/978-1-61499-896-9-104