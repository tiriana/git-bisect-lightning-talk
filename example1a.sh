#!/bin/bash
git bisect start
git bisect bad f0dd7fe25602875b142f9dc19f9fb4fe5512dfbf     # BAD 10000
git bisect good 2399237b5c0becc13cab8abe0c945bec006f8a9d    # GOOD 9999
git bisect run node go.js
git bisect reset
