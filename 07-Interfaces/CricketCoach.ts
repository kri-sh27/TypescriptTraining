import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut(): string {
        // throw new Error("Method not implemented.");
        return "Practice your spin bowling technique..."
    }
    
}