## AWS EC2 (Extras)

### Migrate a domain from goddady to ROute53

#### From GoDaddy

* Go to Amazon Route53 service and create a hosted zone with your domain name. Then click on NS record and copy all of them. Looks like: ns-xxxx.awsdns-xx.org. ns-xxxx.awsdns-xx.co.uk. ns-xxx.awsdns-xx.com. ns-xxx.awsdns-xx.net.
* In GoDaddy, go to Nanage DNS in your domain and click in Change Nameservers button, select "Enter my own nameservers (advanced)" and paste all Route53 NS copied previously.

#### Manual subdomain

* Click on Create Record.
* Select Record Type (A for IPV4, AAAA for IPV6, CNAME for domains, etc.).
* In value, type ip or domain you want to redirect.

#### Automatic subdomain

Before this, it's required to have an allocated ip.

- Go to Route53 panel and create a new hosted zone. Then select and edit it, copy hosted zone id. 
- Modify next variables in .aws.env located at root project:
    -   DOMAIN # Registered domain in hosted zone (get it from Route53 panel)
    -   HOSTED_ZONE_ID # ID of hosted zone previously copied (get it from Route53 panel)
- Then execute `seed/docs/assets/aws-ec2/ec2.sh create-subdomain` which create a subdomain like <PROJECT_NAME>.<HOSTED_ZONE_DOMAIN>