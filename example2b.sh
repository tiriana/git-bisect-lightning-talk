#!/bin/bash
git bisect start
git bisect bad d2f1d534d75b7e792b68a40dfcb1597b3788d6dd
git bisect good 9bae4831bf2353ea6193852e44f09602596f4b0c
git bisect run node go.js
git bisect reset
