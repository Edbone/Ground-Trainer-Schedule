# Resource Scheduler

## Run locally

Requires Node.js 18 or newer.

```bash
npm start
```

Open `http://localhost:3000`.

The Node server stores shared bookings and written-test data in `data/state.json`. Browsers also keep a local backup and display **Shared**, **Saving**, or **Local only** beside the site title.

## Host live

Deploy the project to any Node or Docker host using:

- Start command: `npm start`
- Port: the host-provided `PORT` environment variable
- Persistent storage: mount a persistent disk and set `DATA_DIR` to that mounted folder

For Docker hosting, build with the included `Dockerfile` and mount persistent storage at `/app/data`.

Without a persistent disk, many cloud hosts erase `data/state.json` during deployments or restarts.

### Vercel

The project includes a Vercel-native `/api/state` function. In the Vercel project:

1. Open **Storage** and create a **private Blob store**.
2. Connect it to this project so `BLOB_READ_WRITE_TOKEN` is added automatically.
3. Redeploy the project.

Until Blob storage is connected, the website still loads and uses each browser's local storage, but data is not shared between users.

## Features

- Separate schedules for Ground Trainer 1, Ground Trainer 2, and the Flight Test Room
- Shared server-side saving with local browser fallback
- Search across every booking, resource, date, name, and note
- Required three-initial sign-off for new and edited bookings
- Clickable 30-minute scheduling slots with conflict checks
- Drag-and-drop reservation moves and bottom-edge resizing
- Editable and deletable bookings
- Written-test attempt history for every student
- Bulk paste import for existing written-test lists
- Built-in initial written-test history from the provided spreadsheet export
- Automatic qualification after three consecutive scores of 90 or higher
