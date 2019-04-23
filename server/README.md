# README

For running commands
`docker-compose run --rm api rails`

For getting to rails console
`docker-compose exec api rails console` (this takes forever)

g scaffold todo title completed:boolean order:integer

## Rubocop

`docker-compose exec api bash`
`rubocop`

## Errors

A server is already running.
Check server/tmp/pids/server.pid.

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...
