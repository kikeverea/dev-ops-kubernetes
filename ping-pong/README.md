Run with:<br>
`kubectl apply -f manifests/`<br>
`cd ../log-output && kubectl apply -f manifests/`<br><br>
If using k3d, proxy a port to the load balancer htpp. Eg:<br> `k3d cluster create kuber-mooc --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`