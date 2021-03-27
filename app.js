// Selectors
const web = document.getElementById('wd');
const math = document.getElementById('maths');
const comp = document.getElementById('comp');
const physics = document.getElementById('phy');
const showData = document.getElementById('showData');

// Add Event Listners
document.getElementById('btn').addEventListener('click', () => {


    const webValue = parseFloat(web.value),
    mathValue = parseFloat(math.value),
    compValue = parseFloat(comp.value),
    physicsValue = parseFloat(physics.value);

    const obtainValue = add(webValue, mathValue, compValue, physicsValue);

    const totalValue = 400;

    const percentValue = percent(obtainValue, totalValue);

    const gradeValue = grade(percentValue);

    data(gradeValue);

    refresh();
})


// Functionality

    function add(a,b,c,d) {
        return a+b+c+d
}


    function percent(obtain, total) {
        return (obtain / total) * 100
}


    function grade(percent) {
        
        switch (true) {

            case percent >= 80:
                return "You got A+ Grade";
                break;
        
            case percent >= 70 && percent < 80:
                return "You got A Grade";
                break;
        
            case percent >= 60 && percent < 70:
                return "You got B Grade";
                break;
        
            case percent >= 50 && percent < 60:
                return "You got C Grade";
                break;
        
            case percent >= 40 && percent < 50:
                return "You got D Grade";
                break;
        
            default:
                return "You Failed";
        }
}


    function data(Data) {
        
        showData.innerText = Data

    }


    function refresh() {
        web.value = '';
        comp.value = '';
        physics.value = '';
        math.value = '';
}