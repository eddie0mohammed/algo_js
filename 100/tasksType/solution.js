const solution = (deadlines, day) => {

    let today = [];
    let upcoming = [];
    let later = [];

    deadlines.forEach(elem => {
        if (elem <= day){
            today.push(elem);
        }else if (elem >= day + 1 && elem <= day + 7){
            upcoming.push(elem);
        }else{
            later.push(elem);
        }
    });
    // console.log(today);
    // console.log(upcoming);
    // console.log(later);

    return [today.length, upcoming.length, later.length];


}



console.log(solution([1, 2, 3, 4, 5], 2));