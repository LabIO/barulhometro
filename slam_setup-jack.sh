#!/bin/sh

pd-extended -rt -jack -inchannels 2 -outchannels 2 barulhometro.pd &

pd-extended -nrt -noaudio slam_complete.pd

end
