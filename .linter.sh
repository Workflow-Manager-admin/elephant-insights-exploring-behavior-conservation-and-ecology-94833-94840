#!/bin/bash
cd /home/kavia/workspace/code-generation/elephant-insights-exploring-behavior-conservation-and-ecology-94833-94840/main_container_for_elephant_insights
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

