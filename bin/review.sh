#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Reviewing with eslint"
sudo codacy-analysis-cli analyze --tool eslint --force-file-permissions
echo "== Reviewing with jshint"
sudo codacy-analysis-cli analyze --tool jshint --force-file-permissions