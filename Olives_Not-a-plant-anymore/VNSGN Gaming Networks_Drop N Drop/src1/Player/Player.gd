extends KinematicBody2D

const FLOOR_NORMAL = Vector2.UP
var speed = 2000
var velocity = Vector2.ZERO
var gravity = 300

func get_input():
	velocity = Vector2.ZERO
	velocity.y = gravity*get_physics_process_delta_time()
	if is_on_floor():
		velocity.y = 0.0
	if Input.is_action_pressed("move_left"):
		velocity.x -= 1
	if Input.is_action_pressed("move_right"):
		velocity.x += 1
	if Input.is_action_pressed("jump"):
		velocity.y -= 1
	if Input.is_action_pressed("crounch"):
		velocity.y += 1
	velocity = velocity.normalized()*speed
	
func _physics_process(delta: float) -> void:
	get_input()
	velocity = move_and_slide(velocity)
