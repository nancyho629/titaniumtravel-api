#!/bin/bash

API="http://localhost:4741"
URL_PATH="/activities"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "activity": {
      "activity": "'"${ACTIVITY}"'",
      "description": "'"${DESC}"'",
      "time": "'"${TIME}"'"
    }
  }'

echo
