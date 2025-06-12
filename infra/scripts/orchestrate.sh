#!/usr/bin/env bash
set -e

CMD=$1
ENV=${2:-development}

function build_all() {
  echo "Building all packages..."
  yarn build
}

function start_services() {
  echo "Starting services via Docker Compose..."
  docker-compose -f infra/docker/docker-compose.$ENV.yml up --build -d
}

function deploy_k8s() {
  echo "Deploying to Kubernetes ($ENV)..."
  kubectl apply -f infra/k8s/namespace.yaml
  kubectl apply -f infra/k8s/
}

case "$CMD" in
  start)
    start_services
    ;;
  build)
    build_all
    ;;
  deploy)
    build_all
    deploy_k8s
    ;;
  *)
    echo "Usage: $0 {build|start|deploy} [environment]"
    exit 1
esac
