# Intro

# Start Server with latest code-changes

- `docker rm -f blind-lunch; docker build -t blind-lunch .; docker run -p 8000:8000 --sig-proxy=false --name blind-lunch blind-lunch`

# API

```
# Setting configuration
PUT	/config

{
	"participants" : ["email1@server.com" , "email2@server.com"]
}

# Getting latest configuration
GET 	/config

see above PUT method 
```




