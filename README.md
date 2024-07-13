# TrendLens
## Objective:
TrendLens aims to enhance the shopping experience by integrating advanced web scraping and machine learning technologies. It automates the process of identifying trending clothing items from social media, analyzes them, and recommends similar products available on Myntra, thus increasing user engagement and boosting sales.


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
![](https://github.com/Riya79hp/TrendLensmyntra/blob/main/Readme_assests/Flowchart)


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
