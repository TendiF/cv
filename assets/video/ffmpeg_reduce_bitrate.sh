#!/bin/bash

# Input video file
input_file="HOMEPAGE.webm"
output_file="output.webm"

# Get the original bitrate
original_bitrate=$(ffmpeg -i "$input_file" 2>&1 | grep bitrate | awk '{print $6}')

# Calculate 50% of the original bitrate
half_bitrate=$((original_bitrate / 4))

# Reduce the bitrate by 50%
ffmpeg -i "$input_file" -b:v "${half_bitrate}k" -c:a copy "$output_file"
