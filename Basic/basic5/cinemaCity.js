function solve(input) {
    let index = 0;
    let movieName = input[index];
    index++;
    let studentTicketCount = 0;
    let standartTicketsCount = 0;
    let kidTicketsCount = 0;
    while (movieName !== "Finish"){
        let freeSpaces = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let spacesTaken = 0;
        while (ticketType !== "End"){
            spacesTaken++;
            if (ticketType === "student") {
                studentTicketCount++;
            }
            else if (ticketType === "standard"){
                standartTicketsCount++;
            }
            else {
                kidTicketsCount++;
            }

            if (spacesTaken=== freeSpaces){
                break;
            }
            ticketType = input[index];
            index++;
        }
        let spacesTakenPercent = ((spacesTaken/ freeSpaces)*100).toFixed(2);
        console.log(`${movieName} - ${spacesTakenPercent}% full.`);
        movieName = input[index];
        index++;
    }
    let totalTicketsCount = studentTicketCount + standartTicketsCount + kidTicketsCount;
    let studentTicketPercent = ((studentTicketCount / totalTicketsCount)*100).toFixed(2);
    let standartTicketPercent = ((standartTicketsCount / totalTicketsCount)*100).toFixed(2);
    let kidTicketPercent = ((kidTicketsCount / totalTicketsCount)*100).toFixed(2);
    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${studentTicketPercent}% student tickets.`);
    console.log(`${standartTicketPercent}% standard tickets.`);
    console.log(`${kidTicketPercent}% kids tickets.`);
}
solve  (["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])