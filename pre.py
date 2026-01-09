import os
import numpy as np 
import joblib as jb
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

os.system('cls')

data = pd.read_csv("data.csv")

print('This is the information about the dataset: ')
print(data.info())
print('This is the description of the dataset: ')
print(data.describe())
print('This is the number of null values in the dataset: ')
print(data.isnull().sum())
print('These are the columns in the dataset: ')
print(data.columns)
print('This is the shape of the dataset: ')
print(data.shape)
print('This is the size of the dataset: ')
print(data.size)
print('These are the first 5 rows of the dataset: ')
print(data.head())
print()

data = data.dropna()
os.system('pause')

print('This is the information about the dataset: ')
print(data.info())
print('This is the description of the dataset: ')
print(data.describe())
print('This is the number of null values in the dataset: ')
print(data.isnull().sum())
print('These are the columns in the dataset: ')
print(data.columns)
print('This is the shape of the dataset: ')
print(data.shape)
print('This is the size of the dataset: ')
print(data.size)
print('These are the first 5 rows of the dataset: ')
print(data.head())
print()

data.to_csv("new_data.csv", index=False)
print(f'Data saved as new_data.csv')