BUSINESS USECASE

Build a REST API for a simple Notes application.

REQUIREMENTS :

1. Endpoints:
    a. `POST /notes` – Create a note
    b. `GET /notes` – List all notes
    c. `GET /notes/:id` – Fetch by ID
    d. `PUT /notes/:id` – Update note
    e. `DELETE /notes/:id` – Delete note
2. Use in-memory storage (array).
3. Add validation (e.g., title is required, minimum length 3).
4. Implement middleware for error handling and request logging.
5. Return proper HTTP status codes.

STEPS TO INITIATE PROJECT : 

1. npm init --y  -> for initiating the Node project
2. npm install -> to install dependencies
3. npm install -D typescript ts-node-dev @types/express @types/node @types/uuid  -> to install typescript
4. tsc --init  -> to make it as TS project
5. npm install express uuid
6. npm install 
7. npx tsc --init
8. npm run dev