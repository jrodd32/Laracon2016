### Server Survival Talk
## Security
    Level of Security
        Protection
            Basics
                Access
                    don't be root
                    don't (only) use passwords
                        use ssh keys (preferrably with passwords)
                    edit /etc/ssh/sshd_config
                        change port (if you want)
                        PermitRootLogin no (or) without-password
                        PasswordAuthentication no
                        AllowGroups some-group-name
                Network
                    firewall
                        sudo iptables -L (list) -v
                        3 chains
                            input
                                traffic originates outside the server routed inside the server

                                loop back network === localhost network
                                Allow traffic over ssh, http, and https
                                Allow established or related traffic
                                Drop all else
                                persist the rules (iptables-persistent)
                                Install fail2ban
                                    Adds a new fail2ban chain
                            output
                                going out from the server
                            forward
                                appies to any network traffic originates outside your server routed outside the server
        Process
            Generally your policy on how you share information
                What happens when ppl come / leave
            Do you want to audit / log your traffic (then send it to a graph for visualization)
        Compliance
            HIPPA, etc

## Responsibility
    systemd
        Spins up the network, sshd, cron, etc
        service is a wrapper for systemd
        supervisor gives you even more options (such as spinning up multiple instances of a process / daemon)
## Networks
    ifconfig
        setup your private network between servers
    sockets
        tcp socket:
            <ip-address>:<port>
            Works over network
        unix socket:
            unix://path/to/file.sock
            Works over file permissions
    network binding
        netstat -ap | grep http
            Lists what is binded in the network
                If you configure nginx to only listen over a specific port
    mysql
        listens on a tcp socket
        users have username, password and a host they are allowed to connect from

## Permissions
    user - file / dir owner
    group - file / dir group - shared
            permissions!
    other - anyone else

    What they can do
        read - red file, list directory
        write - write to file, add new file / directory
        execute - execute command, cd into directory

## ACLs
    Access Control ?
        getfacl is the command
        If there is a + at the end of the UNIX permissions there are additional permmisions
            ex: drwxrwxrwx+
        Useful for setting defaults on directorys and files (automation)


## Review
    Find Networks (interfaces)
    Socket Types
    Examples of mysql
    Permissions
    ACLs

