@echo off
title PowerPlugJS launcher

echo Welcome to PowerPlugJS


echo 1. Clone
echo 2. Setup
echo 3. Install
echo 4. Run

choice /c 1234 /m "Enter input here, no rush"

if errorlevel 1 goto clone
if errorlevel 2 goto setup
if errorlevel 3 goto install
if errorlevel 4 goto run

:clone
git clone https://github.com/codefromcirc/powerplugjs .

:setup
set /p args=Set Bot Token:
set /p prefix=Set Prefix:
set /p ownerid=Set Owner ID:

(
	echo {
	echo 	"token":"%args%",
	echo 	"prefix":"%prefix%",
	echo		"ownerid":"%ownerid%"
	echo }
) >settings-test.json

:install
echo Install
npm install

:run
node bot.js