# Prisma

¿Qué es prisma?
Dependencia de Javascript para el Backend.
ORM: Object Relational Mapping.

- Tipado seguro.
- Soporte de Bases de datos.
- Facilidad a la hora de migrar una Base de datos.
- Genera codigo para interactuar con los esquemas de Base de datos.
- Simplifica el uso de una base de datos.

@prisma/client
Cliente de Node.

Comando para la migración.

```bash
  $npx prisma migrate
```

Prisma studio.
UI para la modificación de datos.

## Instalación

```bash
  $pnpm add prisma -D
```

## Inicio

```bash
  # Iniciar el proyecto de prisma. Por defecto inicia con postgreSQL
  $npx primsa init

  # Iniciar el proyecto de prisma en otra base de datos.
  $npx primsa init --datasource-provider <DB>
  $npx primsa init --datasource-provider sqlite
```

## Migracion

```bash
  # Generar
  $npx prisma migrate dev
```
