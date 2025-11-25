@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/review.bat

echo == Reviewing with eslint
codacy-analysis-cli analyze --tool eslint --force-file-permissions --parallel 4
echo == Reviewing with jshint
codacy-analysis-cli analyze --tool jshint --force-file-permissions --parallel 4