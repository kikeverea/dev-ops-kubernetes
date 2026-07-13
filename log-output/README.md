Run with `kubectl apply -f manifests/`
If using k3d proxy a port to the load balancer htpp. Eg: `k3d cluster create kuber-mooc --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`