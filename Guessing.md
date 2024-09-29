``` mermaid
flowchart TD
    A[Start of game] --> B[Generate random number]
    B --> C[Get guess]
    C --> D[Is Input a number?]
    D --> E[Input is not a number]
    E --> F[Error: Please only use numbers] --> C
    D --> G[Is guess correct]
    G --> H[Is guess to high]
    H --> I[Feedback: TOO HIGH!] --> C
    G --> J[Is guess to low?]
    J --> K[Feedback: TOO LOW!] --> C
    G --> L[Guess is correct] --> M[Shows text YOU WIN! and End Game]
```

# Step 1
## Start Game
- Description: User starts game and gets ready to play.

# Step 2
## Generate random number
- Description: Computer Generates a random number for the user to guess.

# Step 3
## Get Guess
- Description: Computer waits on user input, user inputs a number.

# Step 4
## Is Input a number?
- Description: Computer makes sure the player is following the rules and checks to see if the input is a number.

# Step 5
## Input is not a number
- Description: Computer decides the input is not a number. If input is not a number it moves to Step 6. If the input is a number it will move to Step 7.

# Step 6
## Error: Please only use numbers
- Description: Computer displays message that there was an error because the user did not input a number.

# Step 7
## Is guess correct
- Descrtiption: Computer checks if the guess is correct. If so it goes to the last step.

# Step 8
## Is guess to high
- Description: Computer checks if the guess was to high. 

# Step 9
## Feedback: TOO HIGH
- Description: Computer gives feedback that states the guess is to high. Guess is to high the user will be brought back to Step 3 to guess again.

# Step 10
## Is guess to low
- Description: Computer detects if the guess was to low

# Step 11
## Feedback: TOO LOW
-Description: Computer displays the number is to low. Guess is to low the user will be brought back to Step 3 to guess again.

# Step 12
## Guess is correct
- Description: Computer decides they guessed correct.

# Step 13
## Show text YOU WIN and end game
- Description: Computer shows user message YOU WIN and ends the game. 
