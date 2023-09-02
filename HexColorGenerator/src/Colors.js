

const hexColorGenerator = () => {
    const values =['A', 'B', 'C', 'D', 'E', 'F','0', '1', '2', '3', '4', '5','6', '7', '8', '9'] 

    let hexColor = "#";
    for (let i = 0; i < 6; i++)
        hexColor += values[Math.floor(Math.random() *(values.length -1))]
    console.log(hexColor);

}

hexColorGenerator()