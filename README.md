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

After moving to the Invoices page, the user can:
- search for old invoices based on company name.
- search for old invoices based on earned hours, to compare between companies.

## FAQ

### I cannot sign up
For safety concerns, only very specific users can register. 
Feel free to let me know if you want to test the profitApp, I can give you a temporary account with a temporary password (account valid for 1 day only).
After resetting your password through e-mail you can login.
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

### Security
Unfortunately the website cannot use HTTPS, because mysqljs uses an http ASP.net page.
Once I know more about Node, Express etc. I might make a new version from scratch that uses a different (my)SQL tool that is HTTPS ready.
