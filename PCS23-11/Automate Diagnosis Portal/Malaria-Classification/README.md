# Malaria-Classification
This project classifies weather a blood cell is infected of malaria parasite or not from cell images using transferred learning.
We use a VGG19 model pretrained on imagenet, to make a binary classification.

The dataset used here is a sub-sample of this (https://ceb.nlm.nih.gov/repositories/malaria-datasets/) dataset available at both https://lhncbc.nlm.nih.gov/ and https://www.kaggle.com/datasets/iarunava/cell-images-for-detecting-malaria
We have not used the complete dataset due to computational limitations, but have not incurred any underfitting issues.

We have achieved a training accuracy of 98% and validation accuracy of 94% after running 50 epochs of the sub-sampled data.

We could further improve the performance of the model by using the uncurtailed dataset.

We have also deployed the model in a simplistic flask app for easy asssesment.
