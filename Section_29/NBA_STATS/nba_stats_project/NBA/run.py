from app import app
import os

if __name__ == '__main__':
    app.run(port=os.environ.get('PORT', 5000))
