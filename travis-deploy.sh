#!/bin/sh
set -e

# setup ssh-agent and provide the GitHub deploy key
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_d84084d998cf_key -iv $encrypted_d84084d998cf_iv -in travis-gh-pages-deploy.enc -out travis-gh-pages-deploy -d
chmod 600 travis-gh-pages-deploy
ssh-add travis-gh-pages-deploy

# commit the assets in dist/ to the gh-pages branch and push to GitHub using SSH
./node_modules/.bin/gh-pages -d dist/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git