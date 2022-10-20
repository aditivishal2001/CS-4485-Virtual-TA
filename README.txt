CS 4485 Team 8 Virtual TA

Team members: Shirley Zeng, Aditi Vishal, Meet Patel, Norah Khan, Charles Saint Pe

Alembic from Flask provides a config for the migration environment and along with SQL Alchemy(Flask).
Flask-migrate takes care of SQL alchemy database migration for the flask app using Alembic
And some other librarys which can be enquire in requirements.txt

Run the project:
1)	Cd to the project path
2)	pip install -r /path/to/requirements.txt
3)	run app.py
4)	go to http://127.0.0.1:5000/ (it may very please look in ide output)

So what is the logic for the bot calculation for math and how it answers to question asked by student?
Basic logic explained.
So how does calculation and chatbot works?
For ln, log and stuff to make them look the way it is and make them editable on form field I used the attribute contenteditable on HTML then with javascript I was able to move them from the selection are to the form field area

then after submitting the form a post request will be sent to the server, that request will include the text exist on form field.

then on server side I checked first for the existing of any Math symbol of the text coming with the request. i did that using regular expression "python module called : re" and extracting the number like if it is ln(2) it will recognize the ln and will put the 2 on a variable --> then with math module on python I take the 2 and make the calculation needed then I send the result back with the request so that Javascript will receive it and put it as an answer.

If none of the math symbol are there to tool will take that text on request and compare it with the titles we have in database using a module called difflib.SequenceMatcher which will compare and return the percentage of similarities between the text the user send and the one exist n titles on database. and Before that I did cleaned the text from expression like : What, What's, is, ?, you....

then if it got a title that have more than 70% similarities with the user word it will output the description and send it with the request
