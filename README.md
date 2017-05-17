#BARULHOMETRO


Barulhometro is an application written in [Pure Data] (http://www.puredata.info) to be used at Poetry Slam events to calculate a score based on the noise level made by the audience after each poem. It also calculates the average of the human jury scores, and displays a countdown timer.

At the moment it is in Portuguese and English but language can be quickly costumized.

##INSTALLATION

* Linux
  * [Download and install Pure Data] (http://www.puredata.info/docs/faq/debian)
  * Install Git. Writing in your terminal `sudo apt-get install git` works on Debian based, like Ubuntu.
  * Get the Barulhometro. Writing this in your terminal `git clone https://github.com/LabIO/barulhometro`
    or click the download button down on the right
  * Enter the directory "barulhometro" `cd barulhometro/` and run the script "slam_setup.sh" `./slam_setup.sh`
     
    
* Windows
Not tried yet but should work.

* Mac OSX
Not tried yet but should work.


##USAGE
* Check noise level of Silence (click on the button "Check Silence")
* Set it in the number box below (if different than 60Db...)
* Create the GEM window in the slamcomplete.pd patch (choose the dimension you prefer)
* CALIBRATION (set the maximum noise level corresponding to the value 10)
  * In the interface window click on Barulho   
  * Make noise for 5 seconds!!!
  * In the barulhometro window click on the green button "set_value_10"
  * Use the radio button to control the Timer, Barulhometro and Jury Count

##TECHNICAL REQUIREMENTS
A computer with Pd, a microphone and a video beamer. 

##Video TUTORIAL
https://youtu.be/mPs9cOwZWu4

##LINKS
https://youtu.be/Tv19viEMy3g

##LICENSE
This software follows the GNU General Public License v3.0.
