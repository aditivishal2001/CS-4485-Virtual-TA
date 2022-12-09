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
This will dump data.pth file. And then run python app.py

To run the website on the VM server, simply run the following commands(after logging into generic@csa-4485-08.utdallas.edu):
sudo su -
cd /var/www
cd FinalFrontBack
flask run --host=0.0.0.0

A website link will apeear. Do NOT hit Ctrl+C! This will stop the flask command running.

If issues arise with the website not loading/running on the VM's server, open up another generic@csa-4485-08.utdallas.edu
terminal and run the following:
sudo getenforce
sudo setenforce 0
getenforce

Note: Do not enable the firewalld or configure anything for it using --permanent!
