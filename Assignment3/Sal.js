<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Salary Calculator</title>
    <style>
        .field{
            margin-bottom: 10px;
        }
        label{ 
            display : block 
        }
        td{ 
            padding-right : 10px;
            font-size: 18pt;
        }

    </style>
     <script src="react.development.js"></script>
     <script src="react-dom.development.js"></script>
     <script src="babel.min.js"></script>
     
     <script>
         class Salary extends React.Component{
             state= {
                Basic : 0,
                HRA : 0,
                DA : 0,
                Tax: 0,
                Salary: 0,

             };
            onCalculate = () =>{
                const {Basic,HRA,DA,Tax} = this.state
                const Salary = `${basic}+${HRA}+${DA}+${Tax}`
            }



            // presentation

            render(){
                return(
                    

                        <div>

                                <h1>Salary Calculator</h1>
                                <hr/>
                                <div class="field">
                                    <label for="">Basic :</label>
                                    <input type="number" name="" id=""/>
                                </div>
                                <div class="field">
                                    <label for="">HRA :</label>
                                    <input type="number" name="" id=""/>
                                </div>
                                <div class="field">
                                    <label for="">DA :</label>
                                    <input type="number" name="" id=""/>
                                </div>
                                <div class="field">
                                    <label for="">Tax :</label>
                                    <input type="range" name="" id="" min="0" max="30"/>
                                </div>
                                <div class="field">
                                    <input type="button" value="Calculate" OnClick={this.onCalculate} />
                                </div>
                                <div class="field">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{Basi}]</td>
                                                <td>{HRA}</td>
                                                <td>{DA}</td>
                                                <td>{Tax}</td>
                                                <td>{Salary}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                        </div>
                            

                        )
                    }

                }

         
    
     ReactDOM.render(
        <Salary />,
        document.getElementById('root'))
    
</script>

</head>
<body>
    <div id="root">
        </div>
</body>
</html>
