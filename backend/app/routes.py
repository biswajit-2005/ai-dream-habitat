from fastapi import APIRouter
from app.models import HouseRequest, ModelResponse
from app.services.blender_service import generate_model

router = APIRouter()

@router.post("/generate_model", response_model=ModelResponse)
def create_model(req: HouseRequest):
    return generate_model(req)
