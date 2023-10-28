# syntaxerrorapp
Attendance system
1. Professor opens our website on their laptop.
2. They click new attendance 
3. They have a list of attendees
4. New QR Code shows up through projector, which changes with every new session
5. QR code expires in 2 minutes.
6. Students scan the QR code,
7. App on student's phone, which they have already downloaded, contains enrollment number and name, through an account system.

8. QR code contains, secret code and a dynamically generated website, which changes for each instance in the format 
                 Random Alphanumeric code which is 8 characters long and a website URL ( dynamic made short with bit.ly API)
                 *AAAAAAAA_URL*

9. App scans QR code and decodes the alphanumeric code and URL and uses HTTPS post request to send a JSON file to the dynamically generated URL along with the enrolment number and name encoded into the JSON.
Add a unique identifier to each student to send with the JSON file to ensure security.
 Add Geolocation data to JSON file which is sent

10. Website recieves the attendance and exports it as a CSV into the professor's laptop.
11. (OPTIONAL) Give the professor privileges to start a new attendance whenever he wants during the class and overwrite that to the existing attendance CSV file. New QR code is generated for this.


CAVEATS:
HTTPS POST might not work. Find a new way to send data.

IDEAS:
Write a Google App Script to recieve HTTPS POST Request to recieve on Port:200? (i dunno, something like it) and print it as a new appended row onto the CSV.
 Adding Fingerprint Authentication.

 IMPLEMENTATION:
 Implementation:
Prerequisites
Setup NPM on all 3 machines
Learn coding
Setup expo yeverywhere
learn coding
and......... learn coding (did i tell that before?)
Setup firebase
 



WEBSITE!!!! {
Make layout
Setup Authorization system.
Setup Alphanumeric code generator.
Setup JSON Parser.
Setup CSV generator.
Setup CSV Exporter.
Find a way to setup a timer at the end of which QR Code expires
}      
APP!!!!!!!!!!!!!{
Authentication system using IITR Email
(OPTIONAL) Channel I AuthO Integration
QR Code Scanner
Form to enter enrolment number and name and store it locally on device.
Setup JSON file generator with the format in jsonbitch.txt 
Send JSON using HTTPS POST request to dynamic URL
Give a "It''s done!!" (i.e. Attendance taken)

FIREBASE!!!!!!!!!  {
Create Authentication separately for app and website
}



NO IDEA YET {
How mi generate dynamic URL
how mi accept JSON file as HTTPS post requests.
