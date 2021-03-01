---
title: "Independent Hosts"
linkTitle: ""
weight: 02
type: "docs"
---

Independent Hosts are GO-Global Hosts that do not interact with other GO-Global Hosts running on the network. Independent Hosts appear in the Admin Console on the first level of the GO-Global Hosts tree view as an independent node. The GO-Global setup program configures hosts to operate as Independent Hosts. GO-Global clients can connect to Independent Hosts directly by specifying the name or IP address of the server in the Connection dialog or the location box of a web browser.<br>

Clients can also connect to Independent Hosts through a third-party network load balancer that distributes client connections among several servers. However, session reconnect is not supported in the latter configuration and must be disabled.<br>

If the Application Publishing Service is not running on a host, the host’s icon will be red. If the administrator does not have rights to access the host, the host’s icon will be yellow.

![5-2-1](/img/5-2-1.png) 
