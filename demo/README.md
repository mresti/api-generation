# _API Generation by models_

This project, generate the backend Full API REST depending to models describe you in the config gile API_config.json
This file is a json list of object wich contain three atributes, name of model, atributtes list of model and type list of the atributes. Each object is defined by the following code.
```json
{"name":"usuario", 
 "atributtes":["name","LastName","Country"],
 "type":["string","string","string"]
}
```

## Project Setup

_How do I, as a developer, start working on the project?_ 

1. _What dependencies does it have (where are they expressed) and how do I install them?_
2. _How can I see the project working before I change anything?_

## Testing

_How do I run the project's automated tests?_

### Unit Tests

1. `rake spec`

### Integration Tests

1. _Run other local services / provide credentials for external services._
2. `rake spec:integration`

## Deploying

### _How to setup the deployment environment_

- _Required heroku addons, packages, or chef recipes._
- _Required environment variables or credentials not included in git._
- _Monitoring services and logging._

### _How to deploy_

## Troubleshooting & Useful Tools

_Examples of common tasks_

> e.g.
> 
> - How to make curl requests while authenticated via oauth.
> - How to monitor background jobs.
> - How to run the app through a proxy.

## Contributing changes

- _Internal git workflow_
- _Pull request guidelines_
- _Tracker project_
- _Google group_
- _irc channel_
- _"Please open github issues"_

## License