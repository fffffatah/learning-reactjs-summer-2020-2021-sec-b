export default function Button () {
    var i=0;
    function AlertMe() {
        i++;
        alert('Clicked '+i+' Times!');
    }
    return(
        <button onClick={AlertMe}>Click Me</button>
    );  
}