# CROPIC – AI-Powered Crop Image Analytics for PMFBY

Prototype full-stack web application delivering AI-assisted crop image assessments, soil insights, and weather-powered advisory for the Pradhan Mantri Fasal Bima Yojana (PMFBY).

## Features
- **Role-based dashboards** for farmers, officials, and admins with JWT-secured access.
- **Crop image ingestion** with mocked AI analytics (crop type, growth stage, health status) and optional soil photo handling.
- **Soil detector** module returning region-informed crop recommendations.
- **Integrated weather forecast** (OpenWeather) with irrigation advice and PWA support for offline-ready UX.
- **Admin console** including live Leaflet map, pdf-ready analytics, and alerts feed.
- **Activity logging** for claim review actions, plus extensible service architecture for future ML integrations.
- **Insurance estimator** with AI-backed claim projections, premium subsidy guidance, and loss visualizations.

## Tech Stack
- **Frontend**: React 18 + Vite, Tailwind CSS, React Query, Leaflet, Framer Motion, jsPDF, PWA via `vite-plugin-pwa`.
- **Backend**: Node.js (Express), MongoDB (via Mongoose), JWT auth, Multer uploads, AWS S3 integration placeholder.
- **AI Layer**: Mocked TensorFlow.js pipeline (swap in production models under `backend/src/ml/model.js`).

## Getting Started
### 1. Environment
- Node.js ≥ 18 (tested on v22)
- MongoDB instance (local or hosted)
- Optional: AWS S3 bucket + credentials, OpenWeather API key.

Create `.env` files from the provided examples:
```bash
cp backend/.env.example backend/.env
```
Fill in the required secrets (`MONGO_URI`, `JWT_SECRET`, `OPEN_WEATHER_API_KEY`, etc.).

### 2. Install Dependencies
```powershell
cd cropic-ai
npm install
```
The project now uses npm workspaces, so this single command installs backend, frontend, and root tooling in one go.

### 3. Run Services
Spin up the full stack (Express API + Vite client) with one command:
```powershell
npm run dev
```
- Backend available at `http://localhost:5000`
- Frontend available at `http://localhost:3000`
- Insurance estimator dashboard at `http://localhost:3000/insurance`

Behind the scenes this orchestrates both workspace scripts via `concurrently`. You can still launch services individually when debugging:
```powershell
npm run dev --prefix backend   # API only
npm run dev --prefix frontend  # Frontend only
```
A VS Code task (`backend: dev`) remains available for targeted API work (`Terminal → Run Task`).

### 4. Build Frontend
```powershell
npm run build --prefix frontend
```
Artifacts are emitted to `frontend/dist/` with PWA assets and service worker.

### 5. Load Demo Data (Optional)
To experience populated dashboards immediately, seed the MongoDB database with rich demo records (users, crop uploads,
soil reports, weather forecasts, and activity logs):
```powershell
npm run seed
```
This command clears existing collections before inserting fresh sample data, including 50 crop insurance cases with rich
claim analytics and imagery. Update your `.env` first so the backend can reach your MongoDB instance (local or MongoDB
Atlas).

### 6. Configure Analytics Database (PostgreSQL + PostGIS)
- Install PostgreSQL 15+ with the PostGIS extension available. Enable it inside your target database:
	```sql
	CREATE EXTENSION IF NOT EXISTS postgis;
	CREATE EXTENSION IF NOT EXISTS postgis_raster;
	```
- Apply the relational schema so the reporting store matches the app contracts:
	```powershell
	psql -d <dbname> -f database/schema.sql
	```
- Load demo records and crop insurance samples (idempotent seeds you can rerun safely):
	```powershell
	psql -d <dbname> -f database/seed.sql
	```
Replace `<dbname>` with the database name you created for analytics reporting.

## API Overview
| Endpoint | Method | Role | Description |
| --- | --- | --- | --- |
| `/api/auth/register` | POST | Public | Register farmer/official |
| `/api/auth/login` | POST | Public | Obtain JWT |
| `/api/crops/upload` | POST | Farmer | Upload crop + optional soil images |
| `/api/crops/my` | GET | Farmer | Farmer submission history |
| `/api/soil/analyze` | POST | Farmer | Soil analysis (image or manual type) |
| `/api/weather` | GET | Authenticated | Region weather + advice |
| `/api/admin/map-markers` | GET | Official/Admin | Map-ready crop markers |

(See `backend/src/routes` for the full catalog.)

## AI Integration Notes
- `backend/src/ml/model.js` currently provides deterministic mock insights to avoid native TensorFlow builds. Swap with production-ready TensorFlow/PyTorch inference when proper runtime dependencies are available.
- Storage uploads default to placeholder URLs when AWS credentials are absent.

## PWA Assets
Add branded icons to `frontend/public/pwa-192x192.png` and `frontend/public/pwa-512x512.png`. Current files are placeholders.

## Future Enhancements
1. Replace mocked AI with deployed TensorFlow/PyTorch scoring service.
2. Strengthen validation, rate limiting, and audit trails.
3. Add multilingual voice guidance and chat assistant integrations (OpenAI or equivalent).
4. Expand test coverage (unit + integration) across services and UI.

---
Built as a reference implementation for AI-assisted crop insurance workflows under PMFBY.
