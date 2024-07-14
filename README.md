# TrendLens
## Objective:
TrendLens aims to enhance the shopping experience by integrating advanced web scraping and machine learning technologies. It automates the process of identifying trending clothing items from social media, analyzes them, and recommends similar products available on Myntra, thus increasing user engagement and boosting sales.


[![](https://img.shields.io/badge/Made_with-Selenium-green?style=for-the-badge&logo=selenium)](https://www.selenium.dev)
[![](https://img.shields.io/badge/Made_with-Flask-green?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com)
[![](https://img.shields.io/badge/Made_with-HTML-green?style=for-the-badge&logo=HTML5)](https://html.com/)
[![](https://img.shields.io/badge/Made_with-CSS-green?style=for-the-badge&logo=CSS3)](https://www.w3.org/Style/CSS/Overview.en.html)
[![](https://img.shields.io/badge/Made_with-Opencv-green?style=for-the-badge&logo=opencv)](https://opencv.org)
[![](https://img.shields.io/badge/Made_with-Python-green?style=for-the-badge&logo=python)](https://www.python.org)
[![](https://img.shields.io/badge/Made_with-Tensorflow-green?style=for-the-badge&logo=tensorflow)](https://www.tensorflow.org)
[![](https://img.shields.io/badge/Made_with-React-green?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![](https://img.shields.io/badge/Made_with-Scikit--learn-green?style=for-the-badge&logo=scikit-learn)](https://scikit-learn.org/)
[![](https://img.shields.io/badge/Made_with-Pickle-green?style=for-the-badge&logo=pickle)](https://docs.python.org/3/library/pickle.html)
[![](https://img.shields.io/badge/Made_with-ChromeDriver-green?style=for-the-badge&logo=google-chrome)](https://sites.google.com/a/chromium.org/chromedriver/)

## Project PPT
### Online Version : https://www.canva.com/design/DAGITqeIK6g/suAMuvON3ucCEMhuPYSoUg/edit
### Github Version (SELECT VIEW RAW , DOWNLOAD AND SEE) : https://github.com/Riya79hp/TrendLensmyntra/blob/main/TrendLens.pptx




## Demo Video
### Online Version: https://drive.google.com/file/d/12IVDIrokEyYRDmlPmR39P085RNQTw2Oe/view?usp=sharing

### Github Version (SELECT VIEW RAW , DOWNLOAD AND SEE) : https://github.com/Riya79hp/TrendLensmyntra/blob/main/Demo%20Video.mp4 


## Tech stack explanation video
### Online Version: https://drive.google.com/file/d/1WdiHj90AtpeKHkqkV8XtDwWtHsy9tNcB/view?usp=drive_link


### Github Version: https://github.com/Riya79hp/TrendLensmyntra/blob/main/TrendlensTechstack.mp4



## Key Technologies:

### Web Scraping & Automation:
- **Selenium:** Automates the login and scraping process on Instagram, Twitter, and Facebook to collect trending hashtags and images related to clothing.
- **Instagram** To fetch images from trending tags
- **Google Images** To fetch images that are trending for the tag
### Image Processing & Analysis:
- **TensorFlow & OpenCV:** Utilizes Convolutional Neural Networks (CNN) models to analyze the scraped images.
- **ResNet-50:** A powerful CNN model used to process and identify features in the images, enhancing the accuracy of the recommendations.

### Backend:
- **Flask:** Serves as the backend framework to handle data processing and communication between the frontend and the machine learning models.

### Frontend:
- **React.js:** Provides an intuitive user interface where users can choose trending hashtags, select from the fetched images, and receive personalized clothing recommendations.

  ![](https://github.com/Riya79hp/TrendLens/blob/main/TechStack)

## Implement Yourself

## Run Features extract File (extract all features from the images folder dataset)
## Run server (pt.ipbny)
## Run Frontend (npm start)
## Search any query
## Get the results in displayed
## click on reccommend like this
## Get recommended exact similar clothes

## Workflow:

### Data Collection:
Selenium scripts log in to social media platforms and scrape trending hashtags and related images. The process ensures that data collection is completed in under 60 seconds, providing real-time trends.

### Image Analysis:
Myntra's images are fed into TensorFlow's CNN models, specifically ResNet-50, to extract features and identify patterns.
OpenCV assists in processing these images to ensure they are in the correct format and quality for analysis.
![](https://github.com/Riya79hp/TrendLens/blob/main/Screenshot%202024-07-13%20023205.png)





### Recommendation System:
The processed images are compared against User Selected image to find visually similar clothing items.
The recommendation algorithm matches the style, color, and other features of the trending images with items available on Myntra, achieving an accuracy improvement of 75%.

![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-13%20023133.png)

### User Interface:
The React.js frontend allows users to interact seamlessly with the application.
Users can choose a trending hashtag, view the fetched images, and select an image to receive clothing recommendations.
The interface dynamically updates to provide personalized and relevant suggestions, enhancing the shopping experience.


## Working Flowchart
![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Flowcharttrend)

LINK :https://www.canva.com/design/DAGKqp3y8ac/qOpRdE4a5BPrFb-Phlc2pg/edit


## Working:
### Gathering Tags ✅ (Attack No-1)
![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-11%20161128.png) 
#### Barbie movie (Movie centric)
![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-11%20161937.png)
#### Zendaya fashion (celeb centric)
 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-11%20174736.png)
 #### Personal Noise watch (personal centric)
 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-11%20172022.png)
 #### Personal Black Saree (personal centric)


 ### Using RESNET(CNN) on Myntra's Dataset  ✅ (Attack No-2)

 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-11%20180023.png)


 ### Using CNN on user selected image and performing KNN to find the nearest vectors  ✅ (Attack No-3)

 

 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-12%20173152.png)
 #### Black bodycon recommendation from #zendayafashion

 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-12%20181031.png)
 #### Coffee coloured shouldercut bodycon from #zendayafashion

 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-12%20182114.png)
 #### Steel strap noise watch from #noisewatch


 ![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-12%20181838.png)

 #### Pink and white check from from #barbiemovie


![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Screenshot%202024-07-12%20183403.png)
#### Black saree trending from #blacksaree


## Key Benefits:

### Real-Time Trends:
Keeps the product recommendations aligned with the latest social media trends.

### Enhanced Accuracy:
Uses advanced CNN models to ensure that recommendations closely match the trending items.

### User Engagement:
Provides a seamless and interactive experience, increasing user satisfaction and engagement.

### Revenue Boost:
By showcasing trending items and recommending similar products, the project drives sales and contributes to Myntra's revenue growth.

## Prerequisites

- Python (latest version recommended)
- Git

## Setup Instructions

```sh
Step 1: Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/Riya79hp/TrendLensmyntra.git
Jupyter notebook code lies in src of the folder
cd frontend

Step 2: Set Up a Virtual Environment
Create and activate a virtual environment to manage dependencies:
On Windows:
sh
python -m venv myvenv
myvenv\Scripts\activate
On macOS and Linux:
sh
python3 -m venv myvenv
source myvenv/bin/activate


Step 3: Install Dependencies
Install all required packages using pip:
sh
pip install flask
pip install flask-cors
pip install opencv-python
pip install pillow
pip install requests
pip install selenium
pip install scikit-learn
pip install tensorflow
pip install tqdm


Step 4: Install Additional Tools
Install Jupyter Notebook:
sh
pip install jupyter notebook

Step 5: Run the Application
To run the Flask application, use the following command:
sh
pyhton pt.ipynb


Additional Notes
Ensure you have a suitable version of ChromeDriver installed for Selenium.
Download it from here.
For TensorFlow, additional libraries may be required depending on your setup (e.g., CUDA for GPU support).

Import Statements
Here are the necessary imports for your project:

import os
import time
import requests
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
import numpy as np
from numpy.linalg import norm
from tqdm import tqdm
import pickle
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver import ChromeOptions, Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import StaleElementReferenceException, TimeoutException, NoSuchElementException
from sklearn.neighbors import NearestNeighbors
import cv2
import base64
import re
from PIL import Image
from io import BytesIO
```



## Made with ❤️  By HERCODE For Myntra
### Riya Kumari
### Khushi Chaudhary


