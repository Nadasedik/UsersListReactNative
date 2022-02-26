import React from 'react';

import {Box ,Text ,VStack ,HStack ,QuestionIcon} from 'native-base'

export default User=({item,navigation})=>{

  if(item.id)
 { return(
    <Box width="100%" bg="primary.500" color="white">
            <HStack style={{justifyContent:'space-between',margin:5}}>
                <VStack>
                    <Text>
                    <Text style={{fontWeight:'bold'}}>
                            
                            Name:
                            </Text>
                        {item.name}
                    </Text>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>
                            
                            Email:
                            </Text>
                        {item.email}
                    </Text>
                </VStack>
                <QuestionIcon onPress={()=>{
                    navigation.navigate({name:'details',params:{
                        id:item.id
                    }})
                }}/>
            </HStack>
        </Box>
  )}

  return(
    <Text> No Users</Text>
  )
}