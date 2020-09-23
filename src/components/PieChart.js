import React, {useEffect} from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



export default function Chart() {
  useEffect(() => (
    fetch('http://farmmanager-api.herokuapp.com/api/casual/'),
    fetch('http://farmmanager-api.herokuapp.com/api/casual/'),
    fetch('http://farmmanager-api.herokuapp.com/api/casual/'),
    fetch('http://farmmanager-api.herokuapp.com/api/casual/'),
    fetch('http://farmmanager-api.herokuapp.com/api/casual/')
    
  ),[])
    
    
//   console.log(this.options.yData)
  
  return (
    <React.Fragment>  
      
          <HighchartsReact highcharts={Highcharts} />  
          
    </React.Fragment>
  );
}
