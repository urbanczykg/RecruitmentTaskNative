import React, { useState } from 'react'
import {Text,View, Button, TextInput,ScrollView} from 'react-native'
import {DataTable} from 'react-native-paper'
export default function Button1(){
    const [data, setData] = useState([{}]);
    const [hasError,setHasError] = useState(false);
    const [loadingData, setLoadingData] =useState(false)
    const encties = Object.entries(data);

    const handleClick =() => {
        fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json"
        )
        .then((response) => response.json())
        .then((res) => {setData(res.Results), console.log(res.Results)})
        .then((res) => setLoadingData(true))
        .catch((err) => setHasError(true))
    };

    return (
        <View style={{flex:1}} >
            {!loadingData ? <Button onPress={handleClick} title='zaladuj dane'/>  :  null}
                  {loadingData && (<View style={{flex:1}}>
                      <View style={{flexDirecton:'row', justifyContent:'space-around'  }}>
                          <Text style={{fontSize:16, fontWeight: '700'}}>Marka                ID               Model</Text>

                      </View>
                      <ScrollView style={{flex:1}}>
                          {data.map(({Make_Name, Model_ID, Model_Name})=>(
                            <View style={{flexDirecton:'center', justifyContent:'space-around'}} key={Model_ID}>
                                <Text >{Make_Name}               {Model_ID}             {Model_Name}</Text>
                                
                                <Text></Text>
                                
                            </View>))}
                            </ScrollView>
                  </View>
                  )}    
        </View>
    )
}



/* <DataTable>
                    <DataTable.Header>
                        <DataTable.Title> Marka </DataTable.Title>
                        <DataTable.Title numeric> ID </DataTable.Title>
                        <DataTable.Title> Model</DataTable.Title>
                    </DataTable.Header>
                    {data.map(({Make_Name, Model_ID}, index) =>(
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{Make_Name}</DataTable.Cell>
                        <DataTable.Cell>{Model_ID} </DataTable.Cell>
                    </DataTable.Row>
                      ))}
                 </DataTable>*/