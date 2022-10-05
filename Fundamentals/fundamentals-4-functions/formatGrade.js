function formatedGrade(grade) {
    function formatGrade(grade) {
        let format = ``;
        let finalGrade = '';
        if (grade < 3) {
            format = "Fail";
        }
        else if (grade < 3.5) {
            format = "Poor";
        }
        else if (grade < 4.5) {
            format = "Good";
        }

        else if (grade < 5.5) {
            format = "Very good";
        }

        else {
            format = "Excellent";
        }
        if (grade >= 3) {
            finalGrade = format + " (" + grade.toFixed(2) + ")";
        }
        else {
            finalGrade = format + " (" + Math.floor(grade) + ")";
        }
        return finalGrade

    }
    let result = formatGrade(grade)

    console.log(result)
}

formatedGrade(2.99)



// < 3.00 - "Fail"

// · >= 3.00 and < 3.50 - "Poor"

// · >= 3.50 and < 4.50 - "Good"

// · >= 4.50 and < 5.50 - "Very good"

// · >= 5.50 - "Excellent"