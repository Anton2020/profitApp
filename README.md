# profitCalculator

## Goal
Based on invoice amount + costs, estimate how profitable the Social Media / WordPress assignment will be.

## User-story
User registers at first time-use by entering e-mail address, password and security question.
User confirms their registration by e-mail. After confirmation, logging in is allowed and user is sent to the profitApp page.

User fills in the invoice amount before taxes. 
With the sliders you can enter the costs of:
- clothes (standard 5 euros)
- make-up (~)
- decoration (standard 1 euro)
- new software like Canva Pro, Elementor Pro, Adobe XD (standard 1 euro)
- expected work hours needed including filming, editing etc. (standard 5 hours)

After using 'Reken uit' the result is displayed.
- Rood means net profit of < 20 euros/hour
- Orange net profit of       20-30 euros/hour (including 30)
- Green net profit of        > 30 euros/hour

- When red or orange, an additional text shows up to suggest a rate increase to reach green profit levels.

## New features to come
- Separate page to search for old invoices (in said DB) based on company name.
- ~ search for old invoices based on earned hours, to compare between companies.

## Suggestions
### Which browser should I use ?
Website works best in Mozilla Firefox, in other browsers the rate increase might show up after the question to store in DB.

### I cannot sign up
For safety concerns, only very specific users can register. 
Feel free to let me know if you want to test the profitApp, I can give you a temporary account (valid for 1 day only).
Contact details here: https://github.com/Anton2020

## Technical details 

### Front-end
- HTML5, CSS3 and (mostly) Vanilla JS.

### Invoice database
- Front-end connects to mySQL with mysqljs: https://mysqljs.com/
- Invoice database is built with mySQL and runs on remote (free) hosting

### Login screen
- (Heavily) influenced by this tutorial: https://www.youtube.com/watch?v=b1ULt_No3IY

### User database
- Authentication is handled by Google Firebase real-time database https://console.firebase.google.com/

