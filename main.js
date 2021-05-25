const counters = document.querySelectorAll(".count"); //selecting all class count
const speed = 200; // how fast it count

//loop through each of the counters and execute a function
counters.forEach((counter) => {
    const updateCount = () => {
        //the target variable will hold the target that is defined using the data attribute in html
        //parseInt will convert the value into an integer because, by default the return value is of string type 
        const target = parseInt(counter.getAttribute("data-target")); //getAttribute is used to get the data values
        const count = parseInt(counter.innerText); 
        const increment = Math.trunc(target / speed); //Math.trunc will round off the value that we det by dividing

        if (count < target) {
            counter.innerText = count + increment; 
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
})