# Runbook: Deploying, Scaling, and Rollbacks

## Deploy
- Run `yarn deploy` or `bash infra/scripts/orchestrate.sh deploy`

## Scale
- Edit `replicas` in `infra/k8s/deployment.yaml` and re-apply

## Rollback
- Use `kubectl rollout undo deployment/<deployment-name> -n bot2`
