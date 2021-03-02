---
title: "Load Balancing"
linkTitle: ""
weight: 01
type: "docs"
---

Load balancing allows GO-Global sessions to be distributed across multiple hosts. Load balancing is required when the host resource requirements for a deployment exceed the capacity of a single host computer. Load balancing is done automatically and is transparent to the user. GO-Global can also be used with any third party TCP/IP based load-balancing service. 

## Load Balancing Requirements
- A GO-Global Host must be installed on each of the hosts in the cluster.
- For web deployment, if the load balancer is balancing connections to both the web server (e.g., port 80) and the GO-Global Host (e.g., port 491), each of the GO-Global Hosts in the cluster must have a web server running and the web server home directory should contain the GO-Global web files. If the load balancer is only balancing connections to the GO-Global Host, the web files do not need to be located on each GO-Global Host. Web files can be installed on the machine running the web server.
- If an application saves any user specific settings in the registry (e.g., Microsoft Word), it is strongly recommend that users operate with roaming profiles rather than local profiles. Since there is no way of predicting which server the user will actually be logged onto in a balanced server farm, working with roaming profiles is the only way to ensure that user specific settings are available to the user at all times.

A GO-Global Host can be configured to operate as an Independent Host, a Dependent Host, or as a Relay Load Balancer. Please note that a Relay Load Balancer cannot be an application host.

When setting up a load-balanced relay server configuration, GraphOn recommends using a license server. For more information, see the following sections: Multiple Host Environments, Three-Server Redundancy, and License-File List Redundancy.