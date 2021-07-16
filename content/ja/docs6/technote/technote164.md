+++
title = "OVERVIEW OF COMMUNICATION BETWEEN GO-GLOBAL CLIENTS, RELAY SERVERS, DEPENDENT APPLICATION SERVERS, AND THE ADMIN CONSOLE"
description = ""
weight = 7
+++
{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

1. When the Application Publishing Service (APS) starts up on a relay server, it listens for connections on the port specified in the Admin Guide. Both clients and dependent application servers connect to the relay server using this port.
2. The security settings specified in the Admin Console (e.g., SSL, encryption, etc.) are used for all connections to the relay server with one exception. Connections made from the relay server itself (i.e., from the Admin Console running on the relay server) use the TCP transport regardless of what transport mode is set in the Admin Console.
3. The relay server only accepts connections; it does not make any outgoing connections. For example, it does not open connections to dependent application servers. As such, no ports have to be opened on the internal firewall. This is a key aspect of the design.
4. When the APS starts on a dependent application server, the dependent application server opens a connection to the APS running on its associated relay server and registers itself with the relay server.
5. When a Admin Console starts up on a relay server, it:<br>
    a. Issues a UDP broadcast on port 491 requesting that the Application Publishing Services on the same subnet start broadcasting their server information. The APS on the relay server then starts broadcasting information about itself. This information is used to populate the Admin Console's list of servers.<br>
    b. The Admin Console opens a connection to the APS as described in #2.<br>
    c. The APS authenticates the user running the Admin Console using Security Support Provider Interface (SSPI) and verifies that the user is a member of the Administrators group on the relay server.<br> 
    d. The APS on the relay server then responds to queries from the Admin Console (e.g., to terminate a session) by making calls to its dependent application servers over the connections established in #4. All session management information is transmitted over these connections.<br>
6. When a client connects to the relay server, the relay server determines which of the dependent application servers has the lightest load and starts a session on the selected server as follows: <br>
    a. The relay server instructs the selected dependent application server (via a command over the connection established in #4) to open a new connection to the relay server. <br>
    b. The relay server issues a command over the new connection to create a new session. <br>
    c. The relay server associates the session with the client connection. <br>
    d. The relay server starts the logon process in the new session. <br>
    e. The graphics updates from the Sign in dialog are sent over the session connection to the relay server, and the relay server forwards these on to the client over the client connection. <br>
    f. When the user types in the Sign in dialog, the client sends the key strokes to the relay server, which then forwards them on to the session on the dependent application server over the session's connection. <br>
    g. After the user authenticates, the logon process starts the Program Window. The Program Window's user interface is transmitted via the relay server in the same way that the Sign in dialog user interface is.<br>
7. File, clipboard, and print data is sent to the client in the same way that graphics data is: first to the relay server over the session connection, and then on to the client over the client connection.