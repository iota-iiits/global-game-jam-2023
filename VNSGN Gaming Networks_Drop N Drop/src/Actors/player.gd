extends Actor

onready var anim_player = get_node("AnimationPlayer")
export var stomp_impulse: = 1000.0

func _on_EnemyDetector_area_entered(area: Area2D) -> void:
	velocity = calculate_stomp_velocity(velocity, stomp_impulse)

func _on_EnemyDetector_body_entered(body: Node) -> void:
	queue_free()

func _physics_process(delta: float) -> void:
	var is_jump_interrupted: = Input.is_action_just_released("jump") and velocity.y < 0.0
	var direction: = get_direction()
	velocity = calculate_move_velocity(velocity,direction,speed,is_jump_interrupted)
	velocity = move_and_slide(velocity,FLOOR_NORMAL)
	if velocity.x == 0:
		anim_player.play("RESET")
	else:
		anim_player.play("hero")
	
func get_direction() -> Vector2:
	return Vector2(
		Input.get_action_strength("move_right")-Input.get_action_strength("move_left"),
		-1.0 if Input.get_action_strength("jump") and is_on_floor() else 0.0
	)

func calculate_move_velocity(linear_velocity: Vector2,direction: Vector2,peed: Vector2,is_jump_interrupted: bool) -> Vector2:
	var new_velocity: = linear_velocity
	new_velocity.x = speed.x * direction.x
	new_velocity.y += gravity * get_physics_process_delta_time()
	if direction.y == -1.0:
		new_velocity.y = speed.y*direction.y
	if is_jump_interrupted:
		new_velocity.y = 0.0
	return new_velocity

func calculate_stomp_velocity(linear_velocity: Vector2, impulse: float) -> Vector2:
	var out: = linear_velocity
	out.y = -impulse
	return out
