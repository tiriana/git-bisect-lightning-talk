#!/bin/bash
git bisect start
git bisect bad 52815e3a8b344164cc44010a13a6d574ced2446d    # BAD 1
git bisect good 2da4603f6942dded367c602949fa1bd7e18faa40   # GOOD 1
git bisect run node go.js
git bisect reset
