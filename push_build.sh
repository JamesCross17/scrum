#!/usr/bin/env bash

git add ./build/
git commit --message "Snapshot autobuild"
git push origin-dev
