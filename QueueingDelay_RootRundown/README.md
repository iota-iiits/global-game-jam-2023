# Instructions

## Way 1 (Build the game yourself)

1. `git pull --recursive https://github.com/BlackGoku36/GGJRice2D.git`
2. This should download everything required, you might need to download Haxe programming language.
3. You need to `node.js` to build project.
4. cd into the repository
5. To compiler, run: `node Kha/make html5`.
6. To start server to play the game, run: `node Kha/make --server`.
7. Open `http://localhost:8080` in your browser.

## Way 2 (If you don't want to download anything, run the already build html output)

1. `git pull https://github.com/BlackGoku36/GGJRice2D.git`
2. Cd into the `docs` folder.
3. To play, start a server with: `python3 -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

## Way 3 (If you don't want to do anything, run already hosted game)

1. The game is already hosted here: https://blackgoku36.github.io/GGJRice2D/

# How to play the game

It pretty easy, all you have to do is move the block with your keyboard arrow keys.
- Purple is heavy node, it will not move at all.
- Pink is medium node, it will only move 1 block.
- Light pink is light node, it will move freely.
You have to move the blocks in such a way that they form square. And sum of the numbers on blocks that create square should be a square number.
For example, if there are 4 block with number, 5, 4, 3, 2, 2. These number add up to 16, which is square of 4. And when it produce square, it will merge into one with value of square root. If there no more combinations, then you wins. It is time limited, so better hurry up.
