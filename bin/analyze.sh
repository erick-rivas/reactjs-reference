#!/bin/bash
echo "== Analyzing with eslint"
codacy-analysis-cli analyze --tool eslint --force-file-permissions
echo "== Analyzing with jshint"
codacy-analysis-cli analyze --tool jshint --force-file-permissions