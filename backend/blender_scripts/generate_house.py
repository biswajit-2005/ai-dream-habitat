import bpy
import sys
import json

# ------------------------------
# Parse arguments
# ------------------------------
argv = sys.argv
argv = argv[argv.index("--") + 1:] if "--" in argv else []
params = json.loads(argv[0]) if argv else {}

# Default values (in case missing from request)
rooms = params.get("rooms", 3)
floors = params.get("floors", 1)
area = params.get("area", 100)
style = params.get("style", "modern")
output = params.get("output", "models/house.glb")

# ------------------------------
# Cleanup default scene
# ------------------------------
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# ------------------------------
# Simple placeholder geometry
# ------------------------------
# For demo: make one cube per room stacked into floors
room_size = (area / rooms) ** 0.5 / 2   # approximate size

for f in range(floors):
    for r in range(rooms):
        x = (r % 2) * (room_size * 2.5)   # spread out rooms
        y = (r // 2) * (room_size * 2.5)
        z = f * (room_size * 2.5)
        bpy.ops.mesh.primitive_cube_add(size=room_size*2, location=(x, y, z))

# ------------------------------
# Apply style (very basic demo)
# ------------------------------
if style == "modern":
    for obj in bpy.context.selected_objects:
        mat = bpy.data.materials.new(name="ModernMat")
        mat.diffuse_color = (0.8, 0.8, 0.9, 1)
        obj.data.materials.append(mat)
elif style == "traditional":
    for obj in bpy.context.selected_objects:
        mat = bpy.data.materials.new(name="WoodMat")
        mat.diffuse_color = (0.6, 0.4, 0.2, 1)
        obj.data.materials.append(mat)

# ------------------------------
# Export as GLB for frontend
# ------------------------------
bpy.ops.export_scene.gltf(filepath=output, export_format='GLB')

print(f"✅ House model generated at: {output}")
