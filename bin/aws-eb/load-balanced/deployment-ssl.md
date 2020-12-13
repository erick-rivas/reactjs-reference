# Deployment - SSL

To enable a https connection


### Create an AWS certificate

-   Go to AWS Certificate Manager
-   Create a new public certificate
-   Press option "Export DNS configuration to a file" and place those record in a new CNAME record in order to validate certificate

### Open 443 port 

-   Enable 443 port in ec2 settings
    -   Go to ec2 pane 
    -   Press security groups
    -   Find security group with environment name
    -   Go to inbound
    -   Enable 443 port

### Asign certificate

-    Go to aws eb config and press edit in the load balancer section
-    Add a new listener to 443 port with a https protocol 
    -   Select the SSL certificate created in AWS Certificate Manager
    -   In SSL policies, use ELBSecurityPolicy-FS-1-2-2019-08

### Enable application settings

-    Copy [bin/aws-eb/load-balanced/config/https-reencrypt-alb.config](./config/https-reencrypt-alb.config) into .ebextensions folder

### References

-    EB https configuration [https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-https-configuration/](https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-https-configuration/)
-    Route 53 record guide [https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-beanstalk-environment.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-beanstalk-environment.html)