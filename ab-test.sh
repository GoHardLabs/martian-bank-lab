#!/bin/bash

ab -k -c 300 -n 500000 http://localhost:8080/ &
ab -k -c 150 -n 100000 http://localhost:8080/login &
ab -k -c 150 -n 100000 http://localhost:8080/dashboard &
ab -k -c 100 -n 50000 http://localhost:8080/api/account/ &
ab -k -c 100 -n 50000 http://localhost:8080/api/transactions/ &
ab -k -c 50 -n 20000 "http://localhost:8080/status/200?seconds_sleep=1"

wait

