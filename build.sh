#!/bin/bash

# Run new build of resume
pushd _resume
    ./index.js
popd

# Run new build of static content
JEKYLL_ENV=production bundle exec jekyll build
