#!/bin/sh

pd -rt -alsa -inchannels 2 -outchannels 2 barulhometro.pd &

pd -nrt -noaudio slam_complete.pd

end
