# profitCalculator

## Goal
Based on invoice amount + costs, estimate how profitable the Social Media / WordPress assignment will be.

## User-story
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

## Other
The invoice is stored in the database with four columns: 1 hours worked 2 net amount earned 3 invoice date 4 company name.

## New features to come
- Login screen or other way to remove login details from view
- Separate page to search for old invoices (in said DB) based on company name.
- ~ search for old invoices based on earned hours, to compare between companies.

## Technical details
- Front-end uses HTML5, CSS3 and (mostly) Vanilla JS.
- Connect to mySQL with mysqljs: https://mysqljs.com/
- Invoice database is built with mySQL and run on remote (free) hosting
- Login screen built using Google Firebase https://console.firebase.google.com/
