#!/bin/bash

# Input video file
input_file="output1.mp4"
output_file="output.mp4"

# Get the original bitrate
original_bitrate=$(ffmpeg -i "$input_file" 2>&1 | grep bitrate | awk '{print $6}')

# Calculate 50% of the original bitrate
half_bitrate=$((original_bitrate / 8))

# Reduce the bitrate by 50%
ffmpeg -i "$input_file" -b:v "${half_bitrate}k" -c:a copy "$output_file"
