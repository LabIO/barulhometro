#!/bin/sh

mkfifo /tmp/labio

pdreceive 3003 udp | sh &

pd -rt -jack -inchannels 2 -outchannels 2 barulhometro.pd &

pd -nrt -noaudio slam_complete.pd

end
