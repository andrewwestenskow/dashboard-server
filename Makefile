YML := ./docker-compose.yml
PGADMIN_YML := ./docker/docker-compose.pgadmin.yml


dev-up:
	docker compose -f $(YML) up -d

dev-down:
	docker compose -f $(YML) down

migration-generate:
	docker exec server yarn typeorm:generate ./src/db/migrations/$(NAME)

migration-create:
	docker exec server yarn typeorm:create ./src/db/migrations/$(NAME)

migration-run:
	docker exec server yarn typeorm:migrate

pgadmin-up:
	docker compose -f $(PGADMIN_YML) up -d