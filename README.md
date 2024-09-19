Covitector
Final Year Project 
Covitector
Detection of Covid-19 using forced cough 
# Details
#### Introduction
Covid-19 pandemic has affected the whole world in a short span of time. According to the recent statistics 271 million cases of covid-19 have been reported to date.The virus has a high rate of transmission and is extremely fatal hence making it’s early detection a challenge that needs immediate attention. A Lot of research has been conducted in order to devise a method for cheap, early detection of covid-19. Recent studies are making use of machine and deep learning techniques with the aim to devise a method that can prove to be effective in covid detection.Both Images(X-ray and CT scans) and sound(coughing and breathing) are being collected and used for model training and testing.
As the covid cases keep on increasing with every passing day, Artificial intelligence has recently gained attention of researchers for early disease detection. Supervised machine learning techniques can prove to be effective screening tools for covid-19 pandemic.From the research work that has been carried out on X-ray images it is proven that AI techniques are able to identify the abnormalities found in the images of covid patients.Moreover researches have proved that Convolutional Neural Networks have demonstrated to be very effective at extracting patterns from images to detect the presence of covid in an individual. Study on images motivated the researchers to use acoustic sound signals i.e breathing and cough for the detection of covid-19.Cough is a common and consistent symptom of covid 19. Because covid 19 infects an individual's respiratory system in a unique way, features derived from cough can be used for the identification of covid patients.
AI intelligent models based on machine learning and deep learning learn to build disease transmission models that are effectively used to forecast outbreaks. In addition to this ML and DL have also proved to be effective in epidemic detection.Features extracted from the cough sounds can be used for training of machine/deep learning models to obtain binary classification of whether a person is infected with covid-19 or not.In order to improve results obtained from such models data can be pre-processed and then used for model training. In light of the different researches that are being conducted on covid-19 it can be seen that Neural Networks outperform other deep learning techniques for detection of covid individuals.
#### Problem Domain
Deep learning methods will be used for the detection of covid-19 using acoustic sound data. Existing deep learning models along with Transfer learning and feature analysis will be used to address the problem of covid detection using cough sounds. Performance of different machine learning algorithms will be analyzed in order to devise an accurate method for the diagnosis of covid-19. In addition, this model will be analysed to identify the features that contribute to better model performance in turn increasing the real time accuracy of our proposed approach.
#### Research Problem Statement
The main focus of our research is to devise a deep learning approach that produces best run time performance for covid detection. We aim to select the best contributing features from our cough data that can lead to better model performance.
#### Proposed Approach 
Our work on Covid-19 detection consists of applying deep learning techniques on crowdsourced cough recording to identify individuals suffering from covid-19. Briefly,our approach consists of pre-processing the audio files to remove background noises, extracting features from the cough audios that will be used by the model for training and testing. The main focus of the approach is to come up with a deep learning model that correctly classifies the individuals suffering from covid-19.
#### Data Preprocessing
The raw data consists of a lot of background noises and pauses that need to be removed in order for better training of our model.For data preprocessing we applied a cough detection algorithm along with silence removal to remove any redundant data there might be in the audio file. As a result of data pre-processing the size of our audio files became relatively smaller and resultant files only contained the cough sounds. During data preprocessing we also dropped the files that were either corrupted or contained sentences instead of the actual coughs. 
#### Feature Extraction
The preprocessed data samples were used for feature extraction. We calculated MFCC, Zero Crossing Rate, Spectral Centroid and Spectral Rolloff from the audio samples. We also applied padding to make the length of our features consistent. Another advantage we got by applying padding to our extracted features was that it allows for more accurate analysis of audios. An additional step that was done is that we removed the outliers from our list of extracted features. Those outliers mainly included files that contained only single cough sound or pauses between coughs hence making them inconsistent with the rest of the audio files.
#### Data Scaling and Normalization
We applied data scaling to our dataset to minimize the distance between the data points. In addition to this we also applied normalization to our data samples in order to remove duplicates in our dataset and to maintain the distribution and ratio of our data samples. As our data set was imbalanced we applied Synthetic Minority Oversampling Technique(SMOTE) on features obtained from our dataset. We basically created a pipeline in which we did a combination of Random Oversampling and SMOTE.
#### Model Selection

We evaluated our model performance using various deep learning techniques. We used 
Markup : - Model1 - Simple Convolutional Neural Networks without dropout
* Model2 - Simple Convolutional Neural Networks with dropout*
* Model2 - Simple Convolutional Neural Networks with dropout*
* Model3 - CNN with GRU and Max-pooling*
* Model4- CNN with GRU, Bi directional LSTM, Time distribution and Permute layer *
* Model5- ResNet50 *


We analysed the accuracy and f1 score on different models.To further improve our testing accuracy we applied a majority voting ensemble that included Model2, Model3 and Model4. By using this technique we achieved better performance as compared to a single deep learning model.
