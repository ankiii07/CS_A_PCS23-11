# Liver-Disease-Classification-ML
Using multiple ML algorithms to detect posibility of liver disease.


**The following algorithms perform binary classification parallely, the results of which are comapared.**
1. SVM
2. Random Forest
3. XGBoost
4. AdaBoost
5. Grad Boost
6. Cat Boost
7. LiteGBM.

The **hyperparameters of each algorithm are tuned** to find the best set for the task.
Further, ensembling can be performed on the top performing algorithms for more stable results. However, due to satisfactory results, we have not attempted it.

the dataset can be found at : https://www.kaggle.com/datasets/abhi8923shriv/liver-disease-patient-dataset

**Attribute Information:**
Gender- Gender of the patient
TB- Total Bilirubin
DB- Direct Bilirubin
Alkphos Alkaline Phosphotase
Sgpt- Alamine Aminotransferase
Sgot- Aspartate Aminotransferase
TP- Total Protiens
ALB- Albumin
A/G- Ratio Albumin and Globulin Ratio
Label : 1 Liver Patient, 2 Non Liver Patient
