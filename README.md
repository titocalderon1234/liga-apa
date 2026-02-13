# Liga APA - Discord Bot

Bot de Discord para la Liga APA con comandos y botones interactivos.

## Características
- Comandos slash (/)
- Botones interactivos
- Sistema de eventos

## Requisitos
- Node.js 18+
- npm o yarn

## Instalación local

1. Clona el repositorio:
```bash
git clone https://github.com/titocalderon1234/liga-apa.git
cd liga-apa
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tu `.env`:
```bash
cp .env.example .env
```

4. Edita `.env` y agrega tu token de Discord y Client ID

5. Registra los comandos:
```bash
node deploy-commands.js
```

6. Inicia el bot:
```bash
node index.js
```

## Estructura del proyecto
- `src/commands/` - Comandos slash del bot
- `src/buttons/` - Manejadores de botones
- `src/events/` - Eventos del bot

## Deploy en Render

1. Pushea tu código a GitHub
2. Crea una cuenta en [Render](https://render.com)
3. Conecta tu repositorio
4. Configura las variables de entorno
5. Deploy automático ✅

## Variables de entorno necesarias
- `DISCORD_TOKEN` - Token de tu bot de Discord
- `CLIENT_ID` - Client ID de tu aplicación

## Autor
Tito Calderón