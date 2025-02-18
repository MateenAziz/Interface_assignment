## Running the code Locally

### Prerequisites

- Node.js and npm installed. You can download them from [here](https://nodejs.org/).
- Python and pip installed. You can download them from [here](https://www.python.org/).

### Backend Setup

1. Navigate to the `backend` directory:

```sh
cd backend
```

2. Create a virtual environment:

   ```sh
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```

4. Install the required packages:

   ```sh
   pip install -r requirements.txt
   ```

5. Run the Django development server:
   ```sh
   python manage.py runserver
   ```
6. Create a superuser to access the Django admin panel:

   ```sh
   python manage.py createsuperuser
   ```

   Follow the prompts to create a superuser account.

7. Access the Django admin panel:
   Open [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) in your browser and log in with the superuser credentials you created.

### Frontend Setup

1. Navigate to the [frontend](http://_vscodecontentref_/0) directory:

   ```sh
   cd frontend
   ```

2. Install the required packages:

   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) to view the frontend in your browser. The backend will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).
