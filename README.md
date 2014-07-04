#BARULHOMETRO


Barulhometro is an application written in [Pure Data] (www.puredata.info) used at Poetry Slam events to calculate the level of noise after each poem and display its value. It also calculates the average of the human juri, and displays a timer.

Portuguese version!

##INSTALLATION

* Linux
  * [Download and install Pure Data] (www.puredata.info/docs/faq/debian)
  * Install Git, run this in your terminal:
    `sudo apt-get install git` (works only on Debian based, like Ubuntu)
  * Get Barulhometro, run this in your terminal: 
    `git clone https://github.com/LabIO/barulhometro`
    or click the download button down on the right
  * Enter the directory "barulhometro"
    `cd barulhometro/`
    run the script "slam_setup.sh"
    `./slam_setup.sh`
     
    
* Windows

* Mac OSX


##USAGE
* Check noise level of Silence (click on the button "Check Silence")
* Set it in the number box below (if different than 60Db...)
* Create the GEM window in the slamcomplete.pd patch (choose the dimension you prefer)
* CALIBRATION (set the maximum noise level corresponding to the value 10)
  * In the interface window click on Barulho   
  * Make noise for 5 seconds!!!
  * In the barulhometro window click on the green button "set_value_10"

TECHNICAL REQUIREMENTS



work in progress

