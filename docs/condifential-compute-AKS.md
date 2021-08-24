# Deploy Condfidential COmpute Nodes to AKS

This tutorial is based off the Microsoft version found [here](https://docs.microsoft.com/en-us/azure/confidential-computing/confidential-nodes-aks-get-started).

It has been slightly modified for this use case including deploying only the required containers.

## Step 1

### Create a RG

Using the Azure CLI.

Create an Azure RG with the appropriate region:

```
az group create --name myResourceGroup --location westus2
```

### Create an AKS instance

Create an AKS cluster:

```
az aks create -g myResourceGroup --name myAKSCluster --generate-ssh-keys --enable-addons confcom
```

`This step may take a few minutes to provision`

### Add a yser node pool with confidentual compute capabilities

Run the following command to add a user node pool of `Standard_DC2s_v2` size with three nodes to the AKS cluster

`az aks nodepool add --cluster-name myAKSCluster --name confcompool1 --resource-group myResourceGroup --node-vm-size Standard_DC2s_v2`

`again, this may take a few minutes to provision`

# Step 2

## Check the Deployment

### Verify the node pool and add-on

Get the credentials for your AKS cluster by using the az aks get-credentials command:

```
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

Use the kubectl get pods command to verify that the nodes are created properly and the SGX-related DaemonSets are running on DCsv2 node pools:

```
$ kubectl get pods --all-namespaces
```

If deployment was successful you should see your sgx nodepool in teh returned list as follows:

```
kube-system     sgx-device-plugin-xxxx     1/1     Running
```

`N.B. If you have an issue connecting with kubectly, make sure you have run the az aks get-credentials command in the same environment that you are using for kubectl.`

# Setp 3 - Sconification

TODO

# Step 4 - Deploy containers

The Microsoft tutorial can be used to deploy a simple hello world container.

# Form Recognizer Reciept and Read contianer.

To deploy the form recognizer reciept and read container together we will need a deployment yaml for the combination of containers required.

The docker compose files for Form Recognizer can be found [here](https://docs.microsoft.com/en-us/azure/applied-ai-services/form-recognizer/containers/form-recognizer-container-install-run?tabs=receipt).

These can then be converted using [Kompose](https://kompose.io/).

This has been done for you in the [Reciept](clean-room-demo/webapp/backend/aks-deployment/form-recognizer/Reciept) folder. You can then use:

`kubectly apply -f .`

from that directory to deploy the containers.
