#!/bin/bash
git bisect start
git bisect bad d2f1d534d75b7e792b68a40dfcb1597b3788d6dd
git bisect good e843ffc99ac87434c1662108eb8e302a19105c9d
git bisect run node go.js
git bisect reset
