from pydantic import BaseModel

class HouseRequest(BaseModel):
    rooms: int
    floors: int
    area: int
    style: str

class ModelResponse(BaseModel):
    model_url: str
