#!/bin/bash

kubectl apply -f ./gen.secrets-teol.yml
kubectl apply -f ./gen.secrets-teol-production.yml
