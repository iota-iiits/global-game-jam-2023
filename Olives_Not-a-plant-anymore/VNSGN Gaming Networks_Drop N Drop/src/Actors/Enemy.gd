extends Actor

var gravity1 = 100000

func _ready() -> void:
	velocity.x = -speed.x


func _on_StompDetector_body_entered(body: PhysicsBody2D) -> void:
	if body.global_position.y > get_node("StompDetector").global_position.y:
		return
	queue_free()

func _physics_process(delta: float) -> void:
	velocity.y = gravity1*delta
	velocity.y = move_and_slide(velocity, FLOOR_NORMAL).y
