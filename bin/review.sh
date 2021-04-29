#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Reviewing with eslint"
codacy-analysis-cli analyze --tool eslint --force-file-permissions
echo "== Reviewing with jshint"
codacy-analysis-cli analyze --tool jshint --force-file-permissions