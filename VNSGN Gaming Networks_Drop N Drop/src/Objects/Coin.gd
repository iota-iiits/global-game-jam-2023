extends Area2D

onready var anim_player = get_node("AnimationPlayer")
var score = 0

func _on_body_entered(body: Node) -> void:
	anim_player.play("fade_out")
