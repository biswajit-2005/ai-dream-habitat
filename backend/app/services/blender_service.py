import subprocess, uuid, os, json
from app.models import HouseRequest, ModelResponse

OUTPUT_DIR = "models"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_model(req: HouseRequest) -> ModelResponse:
    model_id = str(uuid.uuid4())
    output_file = f"{OUTPUT_DIR}/{model_id}.glb"

    params = {
        "rooms": req.rooms,
        "floors": req.floors,
        "area": req.area,
        "style": req.style,
        "output": output_file
    }

    subprocess.run([
        "blender", "--background", "--python", "blender_scripts/generate_house.py", "--", json.dumps(params)
    ])

    return ModelResponse(model_url=f"/{output_file}")
