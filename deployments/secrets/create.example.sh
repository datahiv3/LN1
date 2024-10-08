hash() {
  echo $(echo "$1" | tr -d '\n' | base64)
}

export ENV=$(hash production)
export NAMESPACE_RAW=teol

export PRODUCTION=$(hash true)
export STAGE=$(hash "")
export MONGODB_URL=$(hash "")
export JWT_SECRET=$(hash "")
export RPC_HTTP=$(hash "")
export SIGNER_PRIVATE_KEY=$(hash "")
export RECAPTCHA_SECRETKEY=$(hash "")


# gen
envsubst < ./secrets.template.yml > gen.secrets-${NAMESPACE_RAW}.yml
