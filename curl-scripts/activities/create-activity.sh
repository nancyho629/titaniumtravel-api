#!/bin/bash

API="http://localhost:4741"
URL_PATH="/activities"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "activity": {
      "activity": "'"${ACTIVITY}"'",
      "description": "'"${DESC}"'"
    }
  }'

echo
