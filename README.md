Update 15-JAN-2023: I never got around to finish this as I focused on other projects that are more relevant to my career. I only created the validation for 2 sections.

# eCRF & Edit Checks
When I was a Clinical Data Analyst (CDA), my task included coming up with all kinds of data cleaning process to ensure that clinical data entered into the database is clean. One of the strategy is to have Edit Checks in place on the eCRF (electronic case report form) in order to eliminate a good chunk of manual data review/data cleaning tasks from the clinical monitors which ultimately saves time and human resources. Additionally, adding validations like Edit Checks enable data cleaning process at a very early stage, data entry.

The CDA typically create the pdf version of the CRF and the specification for the Edit Checks, which get handed off to the engineers. The engineers then turn those pdf into an electronic form on the web and programmed the validation procedures according to the CDA's specification. 

## Purpose & Motivation
I want to try out doing the following: 
1. Turn the pdf version of the CRF to an eCRF.
2. Programm the Edit Checks. 

## Methodology
### eCRF
Using the publicly available pdf version of the Global COVID-19 Clinical Platform: Rapid Core Case Report Form (CRF) taken from the [World Health Organization (WHO)](https://www.who.int/publications/i/item/WHO-2019-nCoV-Clinical_CRF-2020.4), I created the eCRF out of Module 1 of the form in an html page following a similar format of the pdf version with some tweaks to the outline to make it easier to follow or more user-friendly. I used Bootstrap and some of my own CSS for formating.

The page is responsive except for the lab section.

### Edit Checks
 I did the following:
- Creating an Edit Check specification outlining what logic to use to fire any error messages -Just like what I did at Abbott!
- Programming each validation procedures using javaScript.

## Deployed Project: [here](https://ckunakom.github.io/CRF_edit_checks/).
