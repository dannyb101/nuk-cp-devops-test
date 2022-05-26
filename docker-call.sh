#!/bin/bash
result=$(curl -s "http://localhost:8000/version")
echo "The current version is: ${result}"
if [ $result != '0.21.4' ]; then
    echo "Incorrect version received"
else
    echo "Correct version receieved"
fi
exit