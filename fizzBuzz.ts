const fizzBuzz = (params: number) => {
    const games: string[] = [];

    for (let i = 1; i <= params; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            games.push("FizzBuzz")
        else if (i % 3 == 0)
            games.push("Fizz")
        else if (i % 5 == 0)
            games.push("Buzz")
        else 
        games.push(i.toString())
    }
    return games;
}

console.log(fizzBuzz(50));