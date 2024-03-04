# Run server by running the following script:
# uvicorn microscope_api:app --reload

# Wrapper around Labsmore's Microscope API
# https://docs.google.com/document/d/1DeH7sRFJL5jzOhhswXLT6Msq-TXWYu_6sOhDkCAcsn0/edit#heading=h.ltc37h9sv735

import base64
from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import Union

# Load environment variables from .env
load_dotenv()
SCOPE_IP = os.getenv("SCOPE_IP")
SCOPE_PORT = os.getenv("SCOPE_PORT")
microscope_base_url = f"http://{SCOPE_IP}:{SCOPE_PORT}"
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Todo: Only allow frontend origin
# Add CORS middleware to allow requests from your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class ErrorResponse(BaseModel):
    error: str


class PositionData(BaseModel):
    z: float
    x: float
    y: float


class ImageData(BaseModel):
    image: str


# Get the current position of the microscope
@app.get("/position/", response_model=Union[PositionData, ErrorResponse])
async def get_position():
    print("---position---")
    position_response = requests.get(f"{microscope_base_url}/get/position")
    if position_response.status_code == 200:
        position_data = position_response.json()["data"]
        if position_data:
            return position_data
        else:
            return {"error": "Position data not found"}
    else:
        return {"error": "Unable to fetch position"}


# Get the snapshot of the microscope's current view
@app.get("/image/", response_model=Union[ImageData, ErrorResponse])
async def get_image():
    image_response = requests.get(f"{microscope_base_url}/get/image")
    if image_response.status_code == 200:
        response_json = image_response.json()
        # Extract the base64 encoded image
        base64_image = response_json["data"]["base64"]
        
        # Todo: Run Rob's cell counting algorithm
        # Todo: Save to db

        return {"image": base64_image}
    else:
        return {"error": "Unable to fetch image"}
