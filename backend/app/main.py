from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import subprocess, json, os, uuid

app = FastAPI()

# serve generated models
MODELS_DIR = os.path.join(os.path.dirname(__file__), "../models")
os.makedirs(MODELS_DIR, exist_ok=True)
app.mount("/models", StaticFiles(directory=MODELS_DIR), name="models")

BLENDER_PATH = r"C:\Program Files\Blender Foundation\Blender 3.5\blender.exe"
SCRIPT_PATH = os.path.join(os.path.dirname(__file__), "../blender_scripts/generate_house.py")

@app.post("/generate_model")
async def generate_model(params: dict):
    output_name = f"{uuid.uuid4()}.glb"
    output_path = os.path.abspath(os.path.join(MODELS_DIR, output_name))
    params["output"] = output_path

    # Run Blender headless
    subprocess.run([
        BLENDER_PATH, "--background", "--python", SCRIPT_PATH, "--", json.dumps(params)
    ])

    return {"model_url": f"/models/{output_name}"}
