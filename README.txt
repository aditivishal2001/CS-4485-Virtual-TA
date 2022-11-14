CS 4485 Team 8 Virtual TA

Team members: Shirley Zeng, Aditi Vishal, Meet Patel, Norah Khan, Charles Saint Pe

Install PyTorch and other dependencies(file requirements.txt)


You also need nltk:

pip install nltk
If you get an error during the first run, you also need to install nltk.tokenize.punkt: Run this once in your terminal:

$ python
>>> import nltk
>>> nltk.download('punkt')
Usage
Run

python train.py
This will dump data.pth file. And then run

python app.py
